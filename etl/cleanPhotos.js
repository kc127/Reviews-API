const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('../data/reviews_photos.csv', {encoding: "utf8"}, {start: 1}),
  crlfDelay: Infinity
});

const outStream = fs.createWriteStream('../dataClean/photos_clean.csv', {encoding: "utf8"});

rl.on('line', (line) => {

    const fields = line.split(',');
    const totalFields = 3;
    if (line.split(',').length !== 3) {
      return;
    }

    if(fields[2] !== 'url' && isValidURL(fields[2]) === false) {
       console.log("bad photo", fields[2])
       return;
    }

    outStream.write(line + '\n');

});

/* helper function to validate url */
const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

function isValidURL(url) {
      let str = url;
      // remove surrounding double quotes
      if (url[0] === '"' && url[0] === url[url.length - 1]) {
        str = url.substring(1, url.length - 1);
      }
      return !!urlPattern.test(str);
}





