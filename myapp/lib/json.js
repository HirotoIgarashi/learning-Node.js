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

const parseJSONAsyncWithCache = (json, callback) => {
    const cache3 = {};
    const cached = cache3[json];
    if (cached) {
        // 1. Node.jsのみを対象としたコードの場合
        // process.nextTick(() => callback(cached.err, cached.result));
        // ブラウザ環境でも動かすコードの場合
        // 2. queueMicrotask()を使う
        // queueMicrotask(() => callback(cached.err, cached.result));
        // 3. Promiseを使う
        Promise.resolve().then(() => callback(cached.err, cached.result));
        return;
    }
    parseJSONAsync(json, (err, result) => {
        cache3[json] = { err, result };
        callback(err, result);
    });
};
module.exports.parseJSONAsyncWithCache = parseJSONAsyncWithCache;
