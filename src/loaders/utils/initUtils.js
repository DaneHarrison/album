
const { readdirSync, writeFileSync, readFileSync } = require('fs');

// EXIF metadata can only be associated with JPEG/JPG images
const IMAGE_FILTER = /\.(jpg|jpeg)$/i


function loadImages(pathToImages) {
    const images = [];

    try {
        const files = readdirSync(pathToImages)
            .filter((file) => IMAGE_FILTER.test(file));

        for(const currFile of files) {
            const fileData = readFileSync(`${pathToImages}/${currFile}`, {encoding: 'base64'})
            images.push(fileData)
        }
    } catch (err) {
        console.error('[ERROR]: ', err);
    }

    return images
}

function formatNumberWithDecimal(number) {
    let formattedNumber = number.toFixed(1);
    
    if (!formattedNumber.includes('.')) {
        formattedNumber += '.0';
    }
    
    return parseFloat(formattedNumber);
}

function exportJSONToFile(jsonData, outputFilename="test.json") {
    writeFileSync(outputFilename, jsonData);
}

module.exports = {
    exportJSONToFile,
    formatNumberWithDecimal,
    loadImages
}