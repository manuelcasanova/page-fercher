let args = process.argv.slice(2);

const request = require('request');
const fs = require('fs');
const webAddress = args[0];
const localPath = args[1];


request(webAddress, (error, response, body) => {
  const data = body;


  //fs.writeFile(file, data, options, callback);
  fs.writeFile(localPath, data, error => {
    if (error) {
      console.log(error);
    }
  });


  //fs.stat(path, options, callback);
  fs.stat(localPath, (error, stats) => {
    if (!error) {
      console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`);
    }
  });



}); //closing of function starting in line 10










// console.log(webAddress, localPath);






