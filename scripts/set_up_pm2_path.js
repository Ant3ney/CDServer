const { exec } = require("child_process");

const setUpPM2Path = async () => {
        return new Promise((res, rej) => {
                exec(`sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u Anthony --hp /home/Anthony`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Sucessfully ran pm2 path');
                        return(res(stdout));
        	});
    	});
};

module.exports = setUpPM2Path;
