const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const prompt = require('./prompt');
const curl = require('./curl');


process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//     const dataArr = [];
//     for (let key in data) {
//         dataArr.push(data[key]);
//     }
//     const cmd = data.toString().trim();
//     process.stdout.write(cmd[0]);
//     process.stdout.write('\nprompt > ')
// });

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdArr = cmd.split(' ')

    if(cmd === 'pwd'){
        pwd();
        process.stdout.write('\nprompt > ')
    } else if (cmd === 'ls'){
        ls();
    } else if (cmdArr[0] === 'cat'){
        cat(cmdArr[1]);
    } else if (cmdArr[0] === 'curl'){
        curl(cmdArr[1]);
    }

    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ')
    }
    prompt();
});


//
// NOTES BELOW!
//

/* original bash.js with pwd code... up to lab section 2

process.stdout.write('prompt > ');
const { cwd } = require('process');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
        process.stdout.write(`${cwd()}`);
    }
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > '); // this isn't needed?
});

*/

/* ryan tinkered around with code logic...

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
        const { cwd } = require('process');
        process.stdout.write(`${cwd()}`);
    }
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > '); // this isn't needed?
});

*/
