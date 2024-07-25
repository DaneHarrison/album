export const nERDDDD = 5
// import piexif, { IExif, IExifElement, TagValues } from 'piexif-ts';

// export function addImgCoords() {
//     const gpsEXIFData: IExifElement = {};

//     gpsEXIFData[TagValues.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
//     gpsEXIFData[TagValues.GPSIFD.GPSLatitude] = piexif.GPSHelper.degToDmsRational(lat);
//     gpsEXIFData[TagValues.GPSIFD.GPSLongitude] = piexif.GPSHelper.degToDmsRational(lng);

//     var exifObj: IExif = {"GPS": gpsEXIFData};
//     var exifStr = piexif.dump(exifObj);

//     // get JPEG image from canvas
//     var jpegData = document.getElementById("canvas").toDataURL("image/jpeg", 1.0);
//     var exifModified = piexif.insert(exifStr, jpegData);
// }

// export function readImgCoords() {

// }