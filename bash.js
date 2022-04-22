const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
        pwd();
        process.stdout.write('\nprompt > ')
    } else if (cmd === 'ls'){
        ls();
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ')
    }
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
