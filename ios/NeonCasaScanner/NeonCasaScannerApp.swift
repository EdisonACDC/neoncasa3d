import SwiftUI
import UIKit
import RoomPlan
import ARKit
import AVFoundation

@main
struct NeonCasaScannerApp: App {
    var body: some Scene { WindowGroup { ScannerHost().ignoresSafeArea() } }
}
struct ScannerHost: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> ScannerController { ScannerController() }
    func updateUIViewController(_ uiViewController: ScannerController, context: Context) {}
}
// UIViewController supplies the NSCoding requirements of RoomCaptureViewDelegate.
@available(iOS 17.0, *)
final class ScannerController: UIViewController, RoomCaptureViewDelegate {
    private let capture = RoomCaptureView(frame:.zero)
    private var rooms:[CapturedRoom]=[]
    private var scanning=false
    private var processing=false
    private var ended=false
    private let status=UILabel()
    private let scan=UIButton(type:.system)
    private let export=UIButton(type:.system)
    private let fresh=UIButton(type:.system)
    override func viewDidLoad() {
        super.viewDidLoad(); view.backgroundColor = .systemBackground
        capture.delegate=self
        capture.translatesAutoresizingMaskIntoConstraints=false
        view.addSubview(capture)
        status.numberOfLines=0;status.textAlignment = .center;status.font = .preferredFont(forTextStyle:.subheadline)
        scan.addTarget(self,action:#selector(scanTapped),for:.touchUpInside)
        export.setTitle("Esporta per NeonCasa",for:.normal);export.addTarget(self,action:#selector(exportTapped),for:.touchUpInside)
        fresh.setTitle("Nuovo piano",for:.normal);fresh.addTarget(self,action:#selector(newTapped),for:.touchUpInside)
        let buttons=UIStackView(arrangedSubviews:[scan,export,fresh]);buttons.axis = .vertical;buttons.spacing=10
        let panel=UIStackView(arrangedSubviews:[status,buttons]);panel.axis = .vertical;panel.spacing=12;panel.translatesAutoresizingMaskIntoConstraints=false
        view.addSubview(panel)
        NSLayoutConstraint.activate([
            capture.topAnchor.constraint(equalTo:view.safeAreaLayoutGuide.topAnchor),capture.leadingAnchor.constraint(equalTo:view.leadingAnchor),capture.trailingAnchor.constraint(equalTo:view.trailingAnchor),capture.bottomAnchor.constraint(equalTo:panel.topAnchor,constant:-12),
            panel.leadingAnchor.constraint(equalTo:view.leadingAnchor,constant:20),panel.trailingAnchor.constraint(equalTo:view.trailingAnchor,constant:-20),panel.bottomAnchor.constraint(equalTo:view.safeAreaLayoutGuide.bottomAnchor,constant:-12)])
        NotificationCenter.default.addObserver(self,selector:#selector(interrupted),name:UIApplication.didEnterBackgroundNotification,object:nil)
        refresh("Prototipo NeonCasa Scanner. Scansiona un piano alla volta, senza chiudere l’app fra le stanze. I mobili saranno semplificati.")
    }
    deinit { NotificationCenter.default.removeObserver(self) }
    private func refresh(_ message:String) {
        status.text=message
        scan.setTitle(scanning ? "Termina stanza" : rooms.isEmpty ? "Avvia scansione" : "Scansiona stanza successiva",for:.normal)
        scan.isEnabled = RoomCaptureSession.isSupported && !processing && !ended
        export.isEnabled = !scanning && !processing && !rooms.isEmpty
        fresh.isEnabled = !scanning && !processing
        if !RoomCaptureSession.isSupported { status.text="Questo dispositivo non supporta RoomPlan con LiDAR." }
    }
    @objc private func scanTapped() {
        guard !processing && !ended else{return}
        if scanning {scanning=false;processing=true;capture.captureSession.stop(pauseARSession:false);refresh("Elaborazione della stanza…");return}
        AVCaptureDevice.requestAccess(for:.video) { [weak self] allowed in
            DispatchQueue.main.async {
                guard let self else{return}
                guard allowed else{self.refresh("Consenti l’accesso alla fotocamera nelle Impostazioni di iPhone.");return}
                self.scanning=true;self.capture.captureSession.run(configuration:RoomCaptureSession.Configuration())
                self.refresh("Muoviti lentamente. Inquadra pareti, pavimento, porte e mobili. Premi Termina stanza quando hai finito.")
            }
        }
    }
    func captureView(shouldPresent roomDataForProcessing:CapturedRoomData,error:Error?) -> Bool {
        if let error { DispatchQueue.main.async { self.processing=false;self.ended=true;self.refresh("Scansione interrotta: \(error.localizedDescription). Esporta le stanze precedenti o avvia un nuovo piano.") };return false }
        return true
    }
    func captureView(didPresent processedResult:CapturedRoom,error:Error?) {
        DispatchQueue.main.async {
            self.processing=false
            if let error { self.ended=true;self.refresh(error.localizedDescription);return }
            self.rooms.append(processedResult)
            self.refresh("\(self.rooms.count) stanze acquisite. Passa alla stanza successiva senza chiudere l’app, oppure esporta il piano.")
        }
    }
    @objc private func interrupted() {
        ended=true
        if scanning {scanning=false;processing=true;capture.captureSession.stop(pauseARSession:true)} else {capture.captureSession.arSession.pause()}
        refresh("Sessione interrotta. Esporta le stanze salvate o avvia un nuovo piano per evitare disallineamenti.")
    }
    @objc private func exportTapped() {
        guard !rooms.isEmpty && !scanning && !processing else{return}
        do {
            let data=try ScanExporter.make(rooms:rooms,name:"Piano scansionato")
            let url=FileManager.default.temporaryDirectory.appendingPathComponent("NeonCasa-\(UUID().uuidString).json")
            try data.write(to:url,options:.atomic)
            ended=true;capture.captureSession.arSession.pause()
            let share=UIActivityViewController(activityItems:[url],applicationActivities:nil)
            share.popoverPresentationController?.sourceView=export
            present(share,animated:true)
            refresh("Scegli Salva su File. In NeonCasa: Disegna casa → Scansione LiDAR → Importa scansione JSON. Per un’altra scansione premi Nuovo piano.")
        }catch{refresh(error.localizedDescription)}
    }
    @objc private func newTapped() {
        let alert=UIAlertController(title:"Nuovo piano?",message:"Le scansioni non esportate saranno eliminate da questa sessione. Prima esportale se vuoi conservarle.",preferredStyle:.alert)
        alert.addAction(UIAlertAction(title:"Annulla",style:.cancel))
        alert.addAction(UIAlertAction(title:"Nuovo piano",style:.destructive){_ in
            self.capture.captureSession.arSession.pause();self.rooms=[];self.ended=false
            let config=ARWorldTrackingConfiguration()
            self.capture.captureSession.arSession.run(config,options:[.resetTracking,.removeExistingAnchors])
            self.capture.captureSession.arSession.pause()
            self.refresh("Nuovo piano pronto. Premi Avvia scansione.")
        });present(alert,animated:true)
    }
}
