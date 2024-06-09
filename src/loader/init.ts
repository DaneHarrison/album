// ----------------------------------------------------
// Based on the WGS84 coordinate system
//
// - Divides quadrants by 10 based on their "first decmical" i.e 10.1, 10.2 ... 11
// - Sections that dont exist yet are added to the OBJ via their dividing key key
// ----------------------------------------------------

import { GeoMappings } from "../types"
import { formatNumberWithDecimal, loadImages } from "./utils/initUtils"

const FILE_UPLOAD_LOCATIONS: string[] = []


function initJSON() {
    // init from existing file
    const geoMappings: Record<string, GeoMappings> = {}

    for(const path of FILE_UPLOAD_LOCATIONS) {
        const images = loadImages(path);
        
        for(const currImg of images) {
            const quadX = formatNumberWithDecimal()
            const quadY = formatNumberWithDecimal()
            const accessorKey = `${quadX}:${quadY}`

            if(geoMappings[accessorKey]) {
                // add to and update
            }
            else {
                // init
            }
        }
    }

    // dump to geoImages file in assets
}

function initDB() {

}

