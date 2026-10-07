import Foundation
import RoomPlan
import simd

// Versioned, minimal export: no photos, account credentials, GPS or Home Assistant entities.
struct ScanFile: Encodable {
    let format = "neoncasa3d-scan"
    let version = 1
    let units = "m"
    let coordinates = "arkit-xz"
    let name: String
    let rooms: [ScanRoom]
}
struct ScanRoom: Encodable {
    let name: String
    let floorY: Float
    let height: Float
    let points: [[Float]]
    let objects: [ScanObject]
    let openings: [ScanOpening]
}
struct ScanObject: Encodable {
    let id: String
    let category: String
    let x, z, bottom, width, depth, height, rotation: Float
}
struct ScanOpening: Encodable {
    let kind: String
    let x, z, sill, width, height: Float
}
enum ScanExportError: LocalizedError {
    case noFloor(Int), incomplete(Int), mixedLevels
    var errorDescription: String? {
        switch self {
        case .noFloor(let n): return "Pavimento della stanza \(n) non riconosciuto. Ripeti la scansione inquadrando anche il pavimento."
        case .incomplete(let n): return "Perimetro della stanza \(n) incompleto. Ripeti la scansione."
        case .mixedLevels: return "Scansiona un piano alla volta: sono stati rilevati livelli diversi."
        }
    }
}
@available(iOS 17.0, *)
enum ScanExporter {
    static func category(_ category: CapturedRoom.Object.Category) -> String {
        switch category {
        case .storage: return "storage"
        case .refrigerator: return "refrigerator"
        case .stove: return "stove"
        case .bed: return "bed"
        case .sink: return "sink"
        case .washerDryer: return "washerDryer"
        case .toilet: return "toilet"
        case .bathtub: return "bathtub"
        case .oven: return "oven"
        case .dishwasher: return "dishwasher"
        case .table: return "table"
        case .sofa: return "sofa"
        case .chair: return "chair"
        case .television: return "television"
        case .stairs: return "stairs"
        case .fireplace: return "fireplace"
        @unknown default: return "unknown"
        }
    }
    static func make(rooms: [CapturedRoom], name: String) throws -> Data {
        var result: [ScanRoom] = []
        for (i, room) in rooms.enumerated() {
            guard let floor = room.floors.max(by: { abs($0.dimensions.x * $0.dimensions.y) < abs($1.dimensions.x * $1.dimensions.y) }) else { throw ScanExportError.noFloor(i+1) }
            guard floor.polygonCorners.count >= 3 else { throw ScanExportError.incomplete(i+1) }
            // Apple defines polygonCorners in the surface's LOCAL plane coordinates.
            let vertices = floor.polygonCorners.map { floor.transform * SIMD4<Float>($0, 1) }
            let floorY = vertices.map(\.y).reduce(0,+) / Float(vertices.count)
            if let first = result.first, abs(first.floorY-floorY) > 0.3 { throw ScanExportError.mixedLevels }
            let height = room.walls.map { $0.dimensions.y }.max() ?? 2.5
            let objects = room.objects.map { o in
                ScanObject(id:o.identifier.uuidString, category:category(o.category), x:o.transform.columns.3.x, z:o.transform.columns.3.z,
                    bottom:o.transform.columns.3.y-o.dimensions.y/2-floorY, width:o.dimensions.x, depth:o.dimensions.z, height:o.dimensions.y,
                    rotation:atan2(o.transform.columns.0.z,o.transform.columns.0.x)*180 / .pi)
            }
            func opening(_ o: CapturedRoom.Surface, _ kind: String) -> ScanOpening {
                ScanOpening(kind:kind,x:o.transform.columns.3.x,z:o.transform.columns.3.z,sill:max(0,o.transform.columns.3.y-o.dimensions.y/2-floorY),width:o.dimensions.x,height:o.dimensions.y)
            }
            result.append(ScanRoom(name:"Stanza \(i+1)",floorY:floorY,height:height,points:vertices.map{[$0.x,$0.z]},objects:objects,
                openings:room.doors.map{opening($0,"door")} + room.windows.map{opening($0,"window")} + room.openings.map{opening($0,"opening")}))
        }
        let encoder=JSONEncoder(); encoder.outputFormatting=[.prettyPrinted,.sortedKeys]
        return try encoder.encode(ScanFile(name:name,rooms:result))
    }
}
