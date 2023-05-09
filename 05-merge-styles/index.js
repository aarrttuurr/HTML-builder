const fs = require('fs');
const path = require('path');
const stylesPath = path.join(__dirname, 'styles');
const bundleFilePath = path.join(__dirname, 'project-dist', 'bundle.css');
const bundleWrStream = fs.createWriteStream(bundleFilePath);

fs.readdir(stylesPath, {withFileTypes: true}, (error, files) => {
    if (error) throw error;
    files.forEach(item => {
        if (item.isFile() && path.extname(item.name) === '.css') {
            const stylesReadStream = fs.createReadStream(path.join(__dirname, 'styles', item.name), 'utf-8');
            stylesReadStream.on('data', chunk => bundleWrStream.write(chunk));
        }
    });
});

