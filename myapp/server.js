var http = require('http');
var url = require('url');
var profiles = require('./lib/profiles.js');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var cb = urlObj.query.callback;
    var who = urlObj.query.who;
    var profile;
    console.log("cb : " + cb);
    console.log("who : " + who);
    if (cb && who) {
        profile = cb + "(" + JSON.stringify(profiles[who]) + ")";
        console.log("profile : " + profile);
        console.log(profile);
        res.end(profile);
    }
}).listen(8080);
