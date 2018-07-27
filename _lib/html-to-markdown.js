
var visit = require("unist-util-visit");

module.exports = options => {

    let transformer = tree => {
        visit(tree, ['html'], visitor);
    }

    let visitor = node => {
        if(/bs-callout/.test(node.value)){
            //console.log(node);
        }
    }

    return transformer;
};
