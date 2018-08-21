// const getOptionsTVML = require('./get-options');
// const { stringifyRequest } = require('loader-utils')

function autoclassStyle(style) {

    var matches = `}${style}`.match(/\}[\s]*([^\{]+)/g);
    for(let index in matches) {
        let token = matches[index].replace(/\}[\s]*/, '');
        let tokens = token.split(' ');

        let newToken = tokens.reduce((acc, val) => {

            if(!val.startsWith('.')) acc += acc ? `-${val}` : `.${val}`;
            return acc;

        }, '');

        if(newToken) style = style.replace(token, newToken);
    }
    return style;
}

function minifyCSS(style) {

    return style.replace(/[\n\r\f]+/g, '')
        .replace(/[\s\t]+$/g, ' ')
        .replace(/\s*\{\s+/g, '{')
        .replace(/\s+\}\s*/g, '}')
        .replace(/:\s+/g, ':')
        .replace(/;\s+/g, ';');
}

function tvml(source, options) {

// console.log('\n\n !!source:', source);
// console.log('\n\n !!options:',  options);

    // autoclass works with minified source only
    if(options.autoclass) options.minify = true;

    let result = source;

    if(options.minify) {
        result = minifyCSS(result);
    }

    if(options.autoclass) {
        result = autoclassStyle(result);
    }

  return result;
}

module.exports = tvml;
//
// module.exports.pitch = function(remainingReq, precedingReq, input) {
//
//     const options = getOptionsTVML(this);
//     let funcString = tvml.toString();
//
//     return `
//         ${funcString}
//
//         var result = require(${stringifyRequest(this, "!!" + remainingReq)});
//
//         result = (typeof result === 'string') ? result : result.toString();
//         result = tvml(result, ${JSON.stringify(options)});
//
//         module.exports = result;`;
// };
