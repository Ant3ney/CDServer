const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');
const isPM2RningApp = require('./is_pm2_rnig_app');

const stopPM2App = async (app) => {
        return new Promise(async (res, rej) => {
		console.log('Checking if PM2 is already running app');
                const isAlreadyRunningApp = await isPM2RningApp(app);
		if(!isAlreadyRunningApp) return res();
                exec(`pm2 stop ${app}`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log(`Removed ${app} from pm2 list via pm2 stop ${app} command`);
                        return(res(stdout));
        });
    });
};

module.exports = stopPM2App;
