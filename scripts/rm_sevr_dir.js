const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const rmSevrDir = (dirName) => {
	return new Promise((res, rej) => {
		if(!dirName) {
	                console.error('Must give name to rmSevrDir function. Got:', dirName);
	                return;
	        }
	        const appPath = path.join(`/home/Anthony/${dirName}`);
	        console.log('Removing:', appPath);
	        try{
	                fs.access(appPath, async function(error) {
	                        if (error) {
					console.log("Directory does not exist.");
					return(res(error));
				}
	                        else
	                                exec(`cd /home/Anthony && sudo rm -rf ${dirName}`, (error, stdout, stderr) => {
	                                        if (error) {
	                                                console.log(`error: ${error.message}`);
	                                                return(res(error));
	                                        }
        	                                if (stderr) {
	                                                console.log(`stderr: ${stderr}`);
	                                                return(res(stderr));
	                                        }
	                                        console.log(`stdout: ${stdout}`);
						console.log('Successfully handled remove operation');
	                                        return(res(stdout));
	                                });
	                });
	        }
	        catch(err){
	                console.error(err);
			rej(err);
	        }
	});
};

module.exports = rmSevrDir;
