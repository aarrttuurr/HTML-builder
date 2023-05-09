const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');

fs.readdir(folder, {withFileTypes: true}, (error, files) => {
    if(error) throw error;
    files.forEach(item => {
        if (item.isFile()) {
            const itemPath = path.join(folder, item.name);
            fs.stat(itemPath, (error, params) => {
                if(error) throw error;
                console.log(`${path.parse(itemPath).name} - ${path.parse(itemPath).ext.slice(1)} - ${(params.size / 1000).toFixed(3)}kb`);
            });
        }
    });
});