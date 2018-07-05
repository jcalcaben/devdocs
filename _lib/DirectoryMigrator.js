var mapGenerator = require("./MapGenerator");
var replace = require("gulp-replace");
var mapRename = require("./MigrationRename");
var mdfileprocessor = require("./MigrationMarkdownFileProcessor");

module.exports = migrationConfig => {
  let mappingFile = migrationConfig.mappingFile;
  let versionDirectory = migrationConfig.versionDirectory;
  let subDirectory = migrationConfig.subDirectory;
  let destination = migrationConfig.destination;
  let destinationFormat = migrationConfig.destinationFormat;
  let gulp = migrationConfig.gulp;
  let rootDirectory = migrationConfig.rootDirectory;

  mapGenerator(mappingFile, map => {
    let globPathPrefix = subDirectory?versionDirectory+'/'+subDirectory:versionDirectory
    gulp
      .src(globPathPrefix + "/**/*.*")
      .pipe(replace(/{{\s+page.baseurl\s+}}/g, "{{page.baseurl}}")) //Compress {{ page.baseurl }} so Jekyll URL's can be parsed
      .pipe(replace(/{{\s+(site.mage2.00url)\s+}}/g, "{{$1}}")) //Compress {{ site.mage2x00url }} entries
      .pipe(replace(/{{\s+(site.baseurl)\s+}}/g, "{{$1}}")) //Compress {{ site.baseurl }} entries
      .pipe(replace(/{{\s+(page.guide_version)\s+}}/g, "{{$1}}")) //Compress {{ page.guide_version }} entries
      .pipe(replace(/<\/h([1-9])>\n/g, "</h$1>\n\n")) //Add an empty line after HTML header so they can be converted to markdown easier later
      .pipe(replace(/<\/div>\n/g, "</div>\n\n")) //Add an empty line after divs so they can be converted to markdown easier later
      .pipe(replace(/{{site.baseurl}}\/common\/images/g, "{{site.baseurl}}/static/images")) //update image directories
    .pipe(replace(/<a href="{{page.baseurl}}([^"]*?)"[^>]*?>([^<]*?)<\/a>/g,"[$2]({{page.baseurl}}$1)")) //Replace all html links with markdown
      .pipe(
        mdfileprocessor({
          cwd: rootDirectory,
          mapping: map,
          versionDirectory: versionDirectory
        })
      )
      .pipe(mapRename(map, globPathPrefix, destinationFormat))
      .pipe(gulp.dest(destination));
  });
};
