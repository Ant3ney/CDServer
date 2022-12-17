const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const isPM2RunningApp = async (app) => {
        return new Promise((res, rej) => {
                exec(`pm2 pid ${app}`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                        	return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
			const formatedSTDOut =  stdout.replace(/\s/g, "");
			const alreadyRunning = formatedSTDOut !== '';
			console.log(`formatedSTDOut: "${formatedSTDOut}"`);
			console.log(`Type of formatedSTDOut: ${typeof formatedSTDOut}`);
			console.log(`Already running: ${alreadyRunning}`);
                        console.log(``);
                        return(res(alreadyRunning));
        	});
	});
};

module.exports = isPM2RunningApp;
