fs = require('fs');

// readFileSync 同期的にファイルを読み込む
module.exports.readFileSync = (file) => {
    data = fs.readFileSync(file, 'utf8');
    return data;
}
