const gulp = require('gulp');

// Only needed for migration
/*
require('devdocs-utils')(gulp, {
      mappingFile: './migration-mapping.csv',
      versionDirectory: 'guides/v2.3',
      subDirectory: '',
      rootDirectory: __dirname
});
*/

require('jekyll-tasks')(gulp);
