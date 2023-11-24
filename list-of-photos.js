
//lägg in exifr metadata extractor
import exifr from 'exifr';
import fs from 'fs';

// give me a list of all files in a folder

let images = fs.readdirSync('Photos');

//loopa och ta ut meta data, -4 tar dem sista 4 bostäverna i bildnamnet
for (let image of images) {
    
if(image.slice(-4)== '.jpg')
console.log('IMAGE: ' + image);
let metadata = await exifr.parse('Photos/' + image);
console.log(metadata);
}
