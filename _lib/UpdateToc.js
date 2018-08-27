var through = require('through2');
var fs = require('fs');
var Updater = require('./TocUpdater')
var yaml = require('js-yaml')

function updateToc(map){
    var updater = through.obj(function(file, encoding, callback) {

        let content = yaml.safeLoad(file.contents.toString());
        
        let result = Updater(map,content);

        file.contents = new Buffer(yaml.safeDump(result));

        this.push(file);

        callback();

    });

    return updater;

}

module.exports = updateToc;