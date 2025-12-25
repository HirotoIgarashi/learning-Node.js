let profiles = require('./lib/profiles.js');
// .js拡張子はオプション

profiles = JSON.stringify(profiles).replace(/name/g, 'fullname');

profiles = JSON.parse(profiles);
profiles.felix.fullname = "Felix Geisendörfer";

console.log(profiles.felix);
