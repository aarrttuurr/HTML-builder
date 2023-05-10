const fs = require('fs/promises');
const path = require('path');
const curDir = path.join(__dirname, 'files');
const copyDir = path.join(__dirname, 'files-copy');

async function copyDirectory(curDir, copyDir) {
    await fs.rm(copyDir, {recursive: true, force: true});
    await fs.mkdir(copyDir, {recursive: true});
    const entries = await fs.readdir(curDir, {withFileTypes: true});
    for(let item of entries) {
        let curFilePath = path.join(curDir, item.name);
        let copyFilePath = path.join(copyDir, item.name);
        if(item.isFile()) {
            await fs.copyFile(curFilePath, copyFilePath);
        }
    }
}

copyDirectory(curDir, copyDir);