const { fork } = require('child_process');
const chalk = require("chalk");
let childProcess;
function start() {
    childProcess = fork('main.js');
    childProcess.on('exit', (code) => {
        console.log(chalk.yellow(chalk.bgRed(`Session Runner has Terminated with Code ${code}\nPlease Wait Restarting System`)))
        start()
    });
    console.log(chalk.yellow(chalk.bgBlue(`Starting System`)))
}

function restart() {
    if (childProcess) {
        childProcess.send('restart');
    } 
}

// Start the initial process
start();
