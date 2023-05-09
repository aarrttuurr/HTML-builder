const { stdin, stdout } = require('process');
const fs = require('fs');
const path = require('path');
const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Здавствуйте, введите ваш текст:\n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    writableStream.write(data);
});

process.on('exit', () => stdout.write('Ввод закончен. Файл готов!'));
process.on('SIGINT', () => {
    stdout.write('\nctrl + c\n');
    process.exit();
});

// В терминале Git-bash есть баг с обработкой 'ctrl + c' - не выведется stdout.write, поэтому лучше проверять через powershell