const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const configureAppPermissions = async (app) => {
        return new Promise((res, rej) => {
                exec(`cd /home/Anthony && sudo chmod 777 ./${app}`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Successfully reconfigured acess permmision for /home/Anthony/' + app);
                        return(res(stdout));
        });
    });
};

module.exports = configureAppPermissions;
