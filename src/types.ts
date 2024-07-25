export interface Coords {
    x: number
    y: number
}

export interface GeoPath {
    date: Date
    coords: Coords[]
}

export interface GeoImage extends Coords {
    id: number
    date?: Date
    base64Img: string
}

export interface GeoMapping {
    geoImgCount: number
    geoImgIDs: number[]
}

export type GeoMarker = Record<string, number>
export type GeoMappings = Record<string, GeoMapping>

export type TOTAL_NUM_LATS = 180
export type TOTAL_NUM_LONGS = 360
