var glob = require("glob");
var fs = require('fs-extra')
var path = require('path')

// options is optional
glob("**/src/app/**/*.html", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
for (const file of files) {
    var fs = require('fs')
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data
    .replace(/className/g, 'class')
    .replace(/NavLink/g, 'a')
    .replace(/to=/g, 'routerLink=');

    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  })
}

})
