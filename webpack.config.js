let path = require('path');

module.exports = {
   entry: './assets/js/script.js',
   output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: './dist/'
   },
}


