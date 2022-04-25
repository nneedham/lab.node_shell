module.exports = pwd;

function pwd(){
    const { cwd } = require('process');
    process.stdout.write(`${cwd()}`);
}



/*
also can look like below...

module.exports = function () {
  // pwd code
};

*/
