import mappings from "../assets/geoMappings.json"
import { GeoMappings, GeoMarker } from "../types"
import { GLOBE_VIEW } from "../views/globeView"
import { calcGroupSize } from "./utils/fetchUtils"


// zoomLvlScaler is required to normalize zoom levels to integers
export function generateMarkerMetaDataFromJSON(currView: string, zoom: number, zoomLvlScaler: number){
    const normalizedMinZoom = min
    const xGroupSize = currView === GLOBE_VIEW
        ? calcGroupSize(zoom, )
        :
    const xScalingDiff = MAX_GLOBE_X - MIN_GLOBE_X
    const yScalingDiff = MAX_GLOBE_Y - MIN_GLOBE_Y
    const possibleZoomLvls = MIN_GLOBE_ZOOM * 10 - MAX_GLOBE_ZOOM * 10
    const xNormalizedDiff = xScalingDiff / possibleZoomLvls
    const yNormalizedDiff = yScalingDiff / possibleZoomLvls
    const xGroupSize = NUM_LATS / xNormalizedDiff
    const yGroupSize = NUM_LONGS / yNormalizedDiff

    Object.keys(mappings).forEach((currKey) => {
        const coords = currKey.split(":")
        const numGroupX = Math.floor(Number(coords[0])/xGroupSize)
        const numGroupY = Math.floor(Number(coords[1])/yGroupSize)
        
        const markerPosiX = numGroupX * xGroupSize + xGroupSize/2
        const markerPosiY = numGroupY * yGroupSize + yGroupSize/2

        const markerKey = `${markerPosiX}:${markerPosiY}`
        const numPicturesForMarker = (mappings as GeoMappings)[currKey]["geoImgCount"]

        markerMetaData[markerKey] 
            ? markerMetaData[markerKey] += numPicturesForMarker
            : markerMetaData[markerKey] = numPicturesForMarker
    })
}

export function fetchRandomImgFromJSON(currView: string, zoom: number) {

}

export function generateMarkerMetaDataFromDB(currView: string, zoom: number) {
    const markerMetaData: GeoMarker[] = []
    // get distance
    // for each key add together
    // size should scale based on number of images with a maximum
}

export function fetchRandomImgFromDB(currView: string, zoom: number) {

}