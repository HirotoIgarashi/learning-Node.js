"use strict";

const parseJSONSync = (json) => {
    try {
        return JSON.parse(json);
    } catch (err) {
        console.error("エラーをキャッチ", err);
    }
};

module.exports.parseJSONSync = parseJSONSync;

const parseJSONAsync = (json, callback) => {
    setTimeout(() => {
        try {
            callback(null, JSON.parse(json));
        } catch (err) {
            callback(err);
        }
    }, 1000);
};

module.exports.parseJSONAsync = parseJSONAsync;

const parseJSONSyncWithCache = (json, callback) => {
    const cache2 = {};
    const cached = cache2[json];
    if (cached) {
        // キャッシュに値が存在する場合でも、非同期的にコールバックを実行する
        setTimeout(() => callback(cached.err, cached.result), 0);
        return;
    }
    parseJSONAsync(json, (err, result) => {
        cache2[json] = { err, result };
        callback(err, result);
    });
};

module.exports.parseJSONSyncWithCache = parseJSONSyncWithCache;
