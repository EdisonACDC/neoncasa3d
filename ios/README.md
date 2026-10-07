# NeonCasa Scanner — prototipo iOS 0.1.0

**Sorgenti, non un’app già installabile. Non compilato con Xcode e non provato su un iPhone in questa consegna.** L'importatore web è verificato con file sintetici conformi al formato. La compatibilità end-to-end richiede ancora compilazione e scansione reale su iPhone LiDAR.

L'app usa Apple RoomPlan (iOS 17+) per acquisire più stanze dello stesso piano in una sessione continua e salvare un JSON per NeonCasa 3D 1.2.0. Non richiede un account Home Assistant, non invia scansioni a un server e non esporta foto, posizione GPS o credenziali. Il file contiene la geometria della casa: condividilo solo con chi vuoi.

## Compilazione su Mac

1. Installa Xcode e [XcodeGen](https://github.com/yonaskolb/XcodeGen), ad esempio `brew install xcodegen`.
2. Da questa cartella esegui `xcodegen generate` e apri `NeonCasaScanner.xcodeproj`.
3. In **Signing & Capabilities** seleziona il tuo Team e un bundle identifier disponibile.
4. Collega l’iPhone con LiDAR, scegli il dispositivo e avvia la compilazione da Xcode. Concedi il permesso fotocamera quando richiesto.
5. La distribuzione tramite TestFlight richiede firma e configurazione Apple appropriate. HACS non installa app iOS. Non è incluso un file IPA firmato.

## Uso previsto (da collaudare su dispositivo)

- Premi **Avvia scansione**, inquadra lentamente pareti, porte, finestre, mobili e pavimento.
- Premi **Termina stanza**, attendi l'elaborazione, poi passa alla stanza successiva senza uscire dall'app. Tutte le stanze devono condividere la stessa sessione e appartenere allo stesso piano.
- Premi **Esporta per NeonCasa → Salva su File**.
- Apri NeonCasa: **Disegna casa → Scansione LiDAR → Importa scansione JSON**.
- Controlla il riepilogo e conferma. La scansione viene aggiunta come nuovo piano; puoi annullare e modificare geometria, quota e mobili.
- Collega manualmente le entità Home Assistant. I mobili sono rappresentazioni semplificate; non vengono riprodotti tessuti, colori e dettagli fotografici.

Il prototipo tiene le scansioni in memoria fino all'esportazione: non chiudere l'app prima di salvare. L'interruzione della sessione impedisce di aggiungere altre stanze per non mescolare sistemi di coordinate; esporta quelle acquisite e ricomincia un nuovo piano. Non è prevista la fusione automatica di scansioni fatte in giorni/sessioni diverse.

## Formato JSON versione 1

Campi radice: `format: "neoncasa3d-scan"`, `version: 1`, `units: "m"`, `coordinates: "arkit-xz"`, `name`, `rooms`.
Ogni stanza contiene `name`, `floorY` (quota ARKit del pavimento), `height`, `points` (perimetro ordinato di coppie [x,z]), `objects` e `openings`.

Oggetto: `id`, `category`, `x`, `z`, `bottom` (quota dal pavimento della stanza), `width`, `depth`, `height`, `rotation` (gradi: asse locale +x ruotato verso +z). `name` è facoltativo.
Apertura: `kind` (`door`, `window`, `opening`), `x`, `z`, `sill` (quota inferiore dal pavimento), `width`, `height`.

Limiti: 8 MB, 50 stanze per importazione, 200 vertici per stanza, 1000 mobili e 1000 aperture complessivi, coordinate entro ±100 m. Perimetri errati e livelli diversi sono rifiutati. Aperture lontane dai muri e categorie non supportate vengono escluse con avviso. Le aperture libere diventano passaggi; il camino non ha un modello base equivalente ed è escluso. Doppioni degli oggetti vengono rimossi solo quando condividono l'identificatore RoomPlan.

Sono supportati i file di questo scanner, **non automaticamente i JSON di altre app o i file USDZ**.

Riferimenti: [Apple RoomPlan](https://developer.apple.com/augmented-reality/roomplan/), [MultiRoom](https://developer.apple.com/videos/play/wwdc2023/10192/). Le coordinate dei vertici del pavimento sono trasformate dal piano locale al mondo ARKit prima dell'esportazione.
