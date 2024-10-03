module.exports.lessOrEqual = (x, y) => x <= y;
module.exports.isEqual = (x, y) => {
    return x === y;
};
module.exports.isEmpty = (o) => {
    return o;
};
module.exports.isElement = (o) => {
    return o;
};
module.exports.isArray = (o) => Array.isArray(o);
module.exports.isObject = (obj) => typeof obj == "object";
module.exports.isArguments = (x, y) => {
    return x + y;
};
module.exports.isFunction = (fn) =>
    Object.prototype.toString.call(fn) === "[object Function]";
module.exports.isString = (x, y) => {
    return x + y;
};
module.exports.isNumber = (o) => {
    return o;
};
// isFinite関数は引数が有限数かどうかを判定します
module.exports.isFinite = (o) => isFinite(o);
module.exports.isBoolean = (o) => {
    return o;
};
module.exports.isDate = (o) => {
    return o;
};
// 日本の郵便番号かどうか。xxx-xxxxを期待している。
// candidateは候補者の意
// ToDo: xxx-xxxxでもxxxxxxxでも受け入れられるように改造する。
module.exports.isZipCodeJp = (candidate) => {
    if (typeof candidate !== "string" || candidate.length != 8) {
        return false;
    }
    return /^\d{3}-\d{4}$/.test(candidate);
};
module.exports.isRegExp = (o) => {
    return o;
};
module.exports.isNaN = (o) => isNaN(o);
module.exports.isNull = (o) => {
    if (o == null) {
        return true;
    } else {
        return false;
    }
};
module.exports.isUndefined = (o) => {
    return o;
};
