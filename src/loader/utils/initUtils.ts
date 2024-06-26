
import { readdirSync, writeFileSync } from 'fs';

// EXIF metadata can only be associated with JPEG/JPG images
const IMAGE_FILTER = /\.(jpg|jpeg)$/i


export function loadImages(pathToImages: string) {
    const images = [];

    try {
        const files = readdirSync(pathToImages)
            .filter((file) => IMAGE_FILTER.test(file));

        images.push(...files)
    } catch (err) {
        console.error('[ERROR]: ', err);
    }

    return images
}

export function formatNumberWithDecimal(number: number) {
    let formattedNumber = number.toFixed(1);
    
    if (!formattedNumber.includes('.')) {
        formattedNumber += '.0';
    }
    
    return parseFloat(formattedNumber);
}

export function exportJSONToFile(jsonData: any, outputFilename: string="test.json") {
    writeFileSync(outputFilename, jsonData);
}