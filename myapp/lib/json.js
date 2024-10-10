module.exports.parseJSONSync = (json) => {
    try {
        return JSON.parse(json);
    } catch (err) {
        console.error("エラーをキャッチ", err);
    }
};
module.exports.parseJSONSyncV2 = (json, callback) => {
    setTimeout(() => {
        try {
            callback(null, JSON.parse(json));
        } catch (err) {
            callback(err);
        }
    }, 1000);
};
