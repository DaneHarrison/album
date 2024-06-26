// ----------------------------------------------------
// Based on the WGS84 coordinate system
//
// - Divides quadrants by 10 based on their "first decmical" i.e 10.1, 10.2 ... 11
// - Sections that dont exist yet are added to the OBJ via their dividing key's coordinates
//    - x:y
// ----------------------------------------------------
import { formatNumberWithDecimal, loadImages, exportJSONToFile } from "./utils/initUtils"
import { GeoMappings } from "../types"
import existingImages from '../assets/geoImages.json'
import photoCords from './seedPhotoCoords.json'

const FILE_UPLOAD_LOCATIONS: string[] = [
    './loader//photos'
]

// Uncomment the function you'd like to run
// initJSON()
// initDB()

 
function initJSON() {
    const geoMappings: Record<string, GeoMappings> = existingImages;
    let idx = 0;

    for(const path of FILE_UPLOAD_LOCATIONS) {
        const images = loadImages(path);
        
        for(const currImg of images) {
            const quadX = formatNumberWithDecimal(photoCords[idx]["x"])
            const quadY = formatNumberWithDecimal(photoCords[idx]["y"])
            const accessorKey = `${quadX}:${quadY}`

            if(geoMappings[accessorKey]) {
                geoMappings[accessorKey].geoImages.push(currImg)
                geoMappings[accessorKey].geoImageCount += 1
            }
            else {
                geoMappings[accessorKey] = {
                    geoImages: [currImg],
                    geoImageCount: 1
                }
            }
        }
    }

    exportJSONToFile(geoMappings)
}

function initDB() {

}