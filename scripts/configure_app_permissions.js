const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const configureAppPermissions = async (repo, dir) => {
        return new Promise((res, rej) => {
                exec(`cd /home/Anthony && sudo git clone ${repo} ./${dir}`, (error, stdout, stderr) => {
                        if (error) {
                                console.log(`error: ${error.message}`);
                                return(rej(error));
                        }
                        if (stderr) {
                                console.log(`stderr: ${stderr}`);
                        }
                        console.log(`stdout: ${stdout}`);
                        console.log('Successfully handled clone operation');
                        return(res(stdout));
        });
    });
};

module.exports = configureAppPermissions;
