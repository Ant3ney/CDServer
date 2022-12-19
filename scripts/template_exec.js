const { exec } = require("child_process");

const templateExec = async (arg) => {
        return new Promise((res, rej) => {
                exec(`echo "Hello template"` (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Sucessfully ran template exec!');
                        return(res(stdout));
        	});
    	});
};

module.exports = templateExec;
