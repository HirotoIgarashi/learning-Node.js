let profiles = require('./lib/profiles.js');
// .js拡張子はオプション

profiles = JSON.stringify(profiles).replace(/name/g, 'fullname');

console.log(profiles);
