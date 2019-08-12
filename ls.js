var fs = require('fs');
var path = require('path');
module.exports = function(dirName, extention, callback) {

    fs.readdir(dirName, filter);

    function filter(err, list) {
        if (err) return callback(err);


        const nextList = list.filter(function(element) {
            if(path.extname(element) === '.' + extention) {
               return element;
            }
        });
        callback(null, nextList);
    }
}