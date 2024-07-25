// ----------------------------------------------------
// Based on the WGS84 coordinate system
//
// - Divides quadrants by 10 based on their "first decmical" i.e 10.1, 10.2 ... 11
// - Sections that dont exist yet are added to the OBJ via their dividing key's coordinates
//    - x:y
// ----------------------------------------------------
const initUtils = require("./utils/initUtils");
const photoCords = require('./seed/seedPhotoCoords.json')

const OUTPUT_MAPPING_LOCATION = "assets/geoMappings.json"
const OUTPUT_IMG_LOCATION = "assets/geoImages.json"
const FILE_UPLOAD_LOCATIONS = [
    './loaders/seed/photos'
]


initJSON()
// initDB()

 
function initJSON() {
    const geoMappings = {};
    const geoImages = []
    let idx = 0;

    for(const path of FILE_UPLOAD_LOCATIONS) {
        const images = initUtils.loadImages(path);
        
        for(const currImg of images) {
            const quadX = initUtils.formatNumberWithDecimal(photoCords[idx]["x"])
            const quadY = initUtils.formatNumberWithDecimal(photoCords[idx]["y"])
            const accessorKey = `${quadX}:${quadY}`
            
            geoImages.push({
                id: idx,
                x: photoCords[idx]["x"],
                y: photoCords[idx]["y"],
                base64Img: currImg
            })

            if(geoMappings[accessorKey]) {
                geoMappings[accessorKey].geoImageIDs.push(idx)
                geoMappings[accessorKey].geoImageCount += 1
            }
            else {
                geoMappings[accessorKey] = {
                    geoImageIDs: [idx],
                    geoImageCount: 1
                }
            }

            idx += 1
        }
    }

    const exportReadyGeoMappings = JSON.stringify(geoMappings);
    const exportReadyGeoImages = JSON.stringify(geoImages);

    initUtils.exportJSONToFile(exportReadyGeoMappings, OUTPUT_MAPPING_LOCATION)
    initUtils.exportJSONToFile(exportReadyGeoImages, OUTPUT_IMG_LOCATION)
}

function initDB() {

}