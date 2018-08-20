const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const optionsSchema = {
  type: 'object',
  properties: {
    kind: {
      type: 'string'
    },
    autoclass: {
      type: 'boolean',
    },
    minify: {
      type: 'boolean'
    }
  }
};

const defaultOptions = {
  kind: 'css',
  replace: null,
  autoclass: false,
  minify: false
};

function getOptionsTVML(config) {

  const rawOptions = getOptions(config);

  rawOptions.kind = rawOptions.kind != 'css' || rawOptions.kind != 'handlebars' ? 'css' : rawOptions.kind;
  validateOptions(optionsSchema, rawOptions, 'tvml-loader');

  return Object.assign({}, defaultOptions, rawOptions);
}

module.exports = getOptionsTVML;
