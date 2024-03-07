/*

The spawn method creates a new process by executing a command with stream manipulation. 
This method is intended for working with intensive workloads.

*/

const { spawn } = require('child_process');

const subProcess = spawn("find", ["."]);

subProcess.stdout.on('data', (data) => {
    console.log(`stdout:\n ${data}\n\n`);
})

subProcess.stderr.on('error', (error) => {
    console.log(`stderr:\n ${error.message}\n\n`);
})

subProcess.on('data', (data) => {
    console.log(`data:\n ${data}`);
})

subProcess.on('close', (data) => {
    console.log(`data close: \n ${data}`);
})