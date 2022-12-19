const { exec } = require("child_process");

const savePM2 = async () => {
        return new Promise((res, rej) => {
                exec(`pm2 save`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Sucessfully saved pm2 config');
                        return(res(stdout));
        	});
    	});
};

module.exports = savePM2;
