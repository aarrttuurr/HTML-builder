const fs = require('fs');
const path = require('path');
const curDir = path.join(__dirname, 'files');
const copyDir = path.join(__dirname, 'files-copy');

fs.mkdir(copyDir, {recursive: true}, (error) => {
    if(error) throw error;
});

fs.readdir(curDir, {withFileTypes: true}, (error, files) => {
    if(error) throw error;
    files.forEach(item => {
        if(item.isFile()) {
            const curFilePath = path.join(curDir, item.name);
            const copyFilePath = path.join(copyDir, item.name);
            fs.copyFile(curFilePath, copyFilePath, (error) => {
                if(error) throw error;
            });
        }
    });
});
