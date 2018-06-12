const pwd = require('./pwd');
const fs = require('fs');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data, err) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.split(' ')[0] === 'cat') {
    for (let i = 1; i < cmd.split(' ').length; i++) {
      cat(cmd.split(' ')[i]);
    }
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
