// ----------------------------------------------------
// Based on the WGS84 coordinate system
//
// - Divides quadrants by 10 based on their "first decmical" i.e 10.1, 10.2 ... 11
// - Sections that dont exist yet are added to the OBJ via their dividing key's coordinates
//    - x:y
// ----------------------------------------------------
const initUtils = require("./utils/initUtils");
const existingImages = require('../assets/geoImages.json')
const photoCords = require('./seedPhotoCoords.json')


const FILE_UPLOAD_LOCATIONS = [
    './loader/utils/photos'
]

// Uncomment the function you'd like to run
initJSON()
// initDB()

 
function initJSON() {
    const geoMappings = existingImages;
    let idx = 0;

    for(const path of FILE_UPLOAD_LOCATIONS) {
        const images = initUtils.loadImages(path);
        
        for(const currImg of images) {
            const quadX = initUtils.formatNumberWithDecimal(photoCords[idx]["x"])
            const quadY = initUtils.formatNumberWithDecimal(photoCords[idx]["y"])
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

    initUtils.exportJSONToFile(JSON.stringify(geoMappings))
}

function initDB() {

}