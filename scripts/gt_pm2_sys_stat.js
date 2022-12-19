const { exec } = require("child_process");

const getPM2SystemStatus = async () => {
        return new Promise((res, rej) => {
                exec(`systemctl status pm2-Anthony`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Sucessfully got pm2 systemd status');
                        return(res(stdout));
        	});
    	});
};

module.exports = getPM2SystemStatus;
