const { exec } = require('child_process'); 

/*
1. The exec method spawns a new shell process and proceeds with executing commands in that shell.

*/

url = "https://www.youtube.com/watch?v=SK7yB7EtMkk&list=RDMMSK7yB7EtMkk";
cmdCommand = `start msedge /new-tab ${url}`;
exec(cmdCommand);


exec('ping youtube.com', (error, stdout, stderr) => {
    if(error) {
        console.log(`Error: ${error.message}`);
    }

    if(stderr) {
        console.log(`stdError: ${stderr}`);
    }

    console.log(`stdout: ${stdout}`); 
})