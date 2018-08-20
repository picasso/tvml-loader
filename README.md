# TVML-string loader for webpack

Based on `to-string` loader by Gajus Kuizinas [https://github.com/gajus/to-string-loader]

## Usage

```js
let output = require('tvml-string!css!sass!./my.scss');
// => returns sass rendered to CSS a string with TVML processing
```
or if you setup a SASS loader:

```js
{
    test: /\.scss$/,
    loaders: [
        'tvml-string',
        'css',
        'sass'
    ]
},
```
or with options:
```js
{
    test: /\.scss$/,
    use: [{
            loader: path.resolve('../tvml-string/index.js'), //'tvml-string',
            options: {
                autoclass: true,
                minify: true
            }
          },{
            loader: 'css-loader'
          },{
            loader: 'sass-loader',
            options: {
                implementation: require('node-sass')
            }
    }]
 },
```

See `webpack` documentation.

## Options

Defaults

```js
{
    kind: 'css',
    autoclass: false,
    minify: false
}
```
