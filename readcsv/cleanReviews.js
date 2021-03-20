const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('../data/reviews.csv', {encoding: "utf8"}, {start: 1}),
  crlfDelay: Infinity
});

const outStream = fs.createWriteStream('../dataClean/reviews_clean.csv', {encoding: "utf8"});

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
    if(fields[4] !== 'summary' && fields[4].length > 60)  {
      console.log("summary data", fields[4]);
      return;
    }

    if(fields[5] !== 'body' && fields[5].length > 1000 || fields[5] !== 'body' && fields[5].length < 50) {
      console.log("body data", fields[5]);
      return;
    }

    /* recommend and reported: true, false, 0, 1 */
    const bools = ['true', 'false', '0', '1'];
    if(fields[6] !== 'recommend' && bools.includes(fields[6]) === false) {
      console.log("bools data", fields[6]);
      return;
    }

    if(fields[7] !== 'reported' && bools.includes(fields[7]) === false) {
      console.log("bools data", fields[7]);
      return;
    }

    if(fields[8] !== 'reviewer_name' && fields[8] === null) {
      console.log("reviewer_name", fields[8]);
      return;
    }

    if(fields[9] !== 'reviewer_email' && fields[9] === null) {
      console.log("reviewer_email", fields[9]);
      return;
    }

    if(fields[11] !== 'helpfulness' && Number(fields[11]) < 0) {

      console.log("helpfulness", fields[11]);
      return;
    }

    outStream.write(line + '\n');

});

