'use strict'
const fs = require('fs');
const filePath = '../data/reviews.csv';


let data = '';

var readStream = fs.createReadStream(filePath, {encoding: 'UTF8'});
var writeStream = fs.createWriteStream('../dataClean/test_clean.csv');

/* 1. Readable */
readStream.on('readable', () =>  {
    var chunk;
    while((chunk = readStream.read())){
      data += chunk;
      console.log(data);
    }

})
.on('end', () => {
  console.log('done reading file')
});



readStream.pipe(writeStream);






// readFile.pipe(writeFile)
// .on('end', () => {
//   console.log("hiii");
// });

/**
 * while insertions, if you get warnings
 * - those are the edge cases
 * - handle
 */

/* 1. a readable event will be emitted as soon as data is available to be read and you can call .read() to read chunks of it. Once there is no more data available, .read() returns null, but then another readable event is fired again when data is available again. This continues until the end of the file when end is fired like before.
 */