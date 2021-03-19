const fs = require('fs');
const readline = require('readline');
// const filePath = '../data/reviews.csv';

const rl = readline.createInterface({
  input: fs.createReadStream('new.csv', {encoding: "utf8"}, {start: 1}),
  crlfDelay: Infinity
});
const fieldsName = [ 'id',
'product_id',
'rating',
'date',
'summary',
'body',
'recommend',
'reported',
'reviewer_name',
'reviewer_email',
'response',
'helpfulness' ]
const outStream = fs.createWriteStream('clean_new.csv', {encoding: "utf8"});
//outStream.write('id' + '\n')
const count = 0;

rl.on('line', (line) => {



    const fields = line.split(',');
    const totalFields = 12;
    if (line.split(',').length !== 12) {
      return;
    }

    /* id and product_id should not be 0 */
    if(fields[0] === '0' && fields[1] === '0') {
      return;
    }

    /* rating should be between 0 and 5 */
    if(Number(fields[2]) > 5 || Number(fields[2]) < 0) {
      return;
    }

    /* date should be in formate "2019-06-23" */

    /* summary: 1 sentence, 60 chars, body: 50 - 1000 chars */
    if(fields[4].length > 60)  {
      return;
    }

    if(fields[5].length > 1000 || fields[5].length < 50) {
      return;
    }

    console.log(fields);

    outStream.write(line + '\n');


});


// console.log(`Line from file: ${line}`);
  // console.log(`length of the line: ${line.split(',').length}`)

// let data = '';

// var readStream = fs.createReadStream(filePath, {encoding: 'UTF8'});
// var writeStream = fs.createWriteStream('../dataClean/test_clean.csv');

// /* 1. Readable */
// readStream.on('readable', () =>  {
//     var chunk;
//     while((chunk = readStream.read())){
//       data += chunk;
//       console.log(data);
//     }

// })
// .on('end', () => {
//   console.log('done reading file')
// });


// readStream.pipe(writeStream);






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