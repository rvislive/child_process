/*

The fork method spawns a new process with communication between parent and child (process and thread). 
This method is intended to work with bifurcations and convergence.

*/

const { fork } = require('child_process');

const subProcess = fork("./src/apis/fork/child");


subProcess.on('message', (msg) => {
    console.log(`This message is coming from parents: ${msg}`);
})