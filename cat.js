module.exports = cat;

const fs = require('fs');

function cat(file){
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}
