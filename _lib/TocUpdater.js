var yaml = require('js-yaml')

function processTocPageEntry(map, page) {
    let url = page.url;

    if(url){
        let transformedUrl = url.slice(1).replace(/\.html/,'.md');

        let mapEntry = map.get(transformedUrl);

        if(mapEntry){
            page.url = '/'+mapEntry.replace(/\.md/,'.html');
        }
    }

    let children = page.children;

    if(children){
        children.forEach(child => {
            processTocPageEntry(map,child);
        })
    }
}

function update(map, yaml) {

    let result = Object.assign({},yaml);

    let pages = result.pages;

    pages.forEach(page => {
        processTocPageEntry(map,page); 
    });

    return result;
}

module.exports = update;