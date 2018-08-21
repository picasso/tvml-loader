const path = require('path');
const { stringifyRequest } = require('loader-utils')
const getOptionsTVML = require('./src/get-options');

module.exports = function() {};
// ,
// "devDependencies": {
//   "babel-preset-env": "^1.7.0"
// }
module.exports.pitch = function(request) {

    // console.log('xere!');

    const options = getOptionsTVML(this);

    return `

        let content = require(${stringifyRequest(this, "!!" + request)});

        let result = (typeof content === 'string') ? content : content.toString();
        result = require(${stringifyRequest(this, "!" + path.join(__dirname, "src", "tvml-string.js"))})(result, ${JSON.stringify(options)});

        module.exports = result;`;
};
