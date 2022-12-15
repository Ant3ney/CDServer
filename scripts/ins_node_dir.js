const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const insNodeDir = async (dir) => {
	return new Promise((res, rej) => {
		exec(`cd /home/Anthony/${dir} && sudo npm i`, (error, stdout, stderr) => {
	        	if (error) {
	        		console.log(`error: ${error.message}`);
				return(rej(error));
		        }
	        	if (stderr) {
				console.log(`stderr: ${stderr}`);
			        return(res(stderr));
		        }    
			console.log(`stdout: ${stdout}`);
			console.log('Successfully handled install operation');
		        return(res(stdout));
		});
	});
}
module.exports = insNodeDir;
