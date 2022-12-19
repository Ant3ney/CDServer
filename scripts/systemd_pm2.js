const { exec } = require("child_process");

const systemdPM2 = async () => {
        return new Promise((res, rej) => {
                exec(`sudo pm2 startup systemd`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
			console.log(`Successfully ran pm2 systemd command`);
                        return(res(stdout));
        	});
    	});
};

module.exports = systemdPM2; 
