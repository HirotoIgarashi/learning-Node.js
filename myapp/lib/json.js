module.exports.parseJSONSync = (json) => {
    try {
        return JSON.parse(json);
    } catch (err) {
        console.error("エラーをキャッチ", err);
    }
};
