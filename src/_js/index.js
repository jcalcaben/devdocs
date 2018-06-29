// Javascript goes here

var $ = require('jquery');

$(function() {
    let contributors = require('./_includes/contributors')

    contributors($, window, document)

  $('.devdocs-contributors').contributorsList();

});
