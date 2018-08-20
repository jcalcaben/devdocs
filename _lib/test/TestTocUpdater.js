var assert = require('assert');

var Updater = require('../TocUpdater');

var yaml = require('js-yaml')

describe('TocUpdater', function() {
  describe('#update()', function() {
    let map = new Map();

    let content = '';

    let expected = '';

    let result = Updater(map,content);

    it('should return updated yaml string', function() {
      assert.equal(result,expected);
    });
  })
})