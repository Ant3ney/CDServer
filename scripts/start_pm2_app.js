const { exec } = require("child_process");

const startPM2App = async (env) => {
        return new Promise((res, rej) => {
                exec(`cd /home/Anthony/${env.APP_NAME} && PORT=${env.PORT} pm2 start app.js --name ${env.APP_NAME} --update-env `, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Sucessfully started pm2 daemon of app!');
                        return(res(stdout));
        	});
    	});
};

module.exports = startPM2App;
