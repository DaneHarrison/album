export type Coords = {
    x: number
    y: number
}

export type GeoPath = {
    date: Date
    cords: Coords    
}

export type GeoImage = {
    date: Date
    cords: Coords
    base64Img: string
}

export type GeoMappings = {
    coords: Coords
    geoImageCount: number
    geoImages: []
}