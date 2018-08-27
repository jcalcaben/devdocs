var assert = require('assert');

var Updater = require('../TocUpdater');

var yaml = require('js-yaml')

var fs = require('fs');

describe('TocUpdater', function() {
  describe('#update()', function() {
    let map = new Map();

    map.set("page/one.md","pages/page-one.md");
    map.set("page/two.md","pages/page-two.md");
    map.set("page/two/one.md","pages/page-two/page-one.md");
    map.set("page/two/two.md","pages/page-two/page-two.md");

    let content = yaml.safeLoad(fs.readFileSync('_lib/test/data/sample.yml', 'utf8'));

    let expected = yaml.safeLoad(fs.readFileSync('_lib/test/data/sample-expected.yml', 'utf8'));

    let result = Updater(map,content);

    it('should return updated yaml json object', function() {
      expect(result).toMatchObject(expected);
    });
  })
})