
var visit = require("unist-util-visit");

module.exports = options => {

    let transformer = tree => {
        visit(tree, ['html'], visitor);
    }

    let visitor = node => {
        //console.log(node);
    }

    return transformer;
};
