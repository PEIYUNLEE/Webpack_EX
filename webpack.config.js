let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './assets/js/script.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[chunkhash].js',
      publicPath: './'
   },
   module:{
      rules:[
         {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 40000,
                     outputPath: './images',
                     publicPath: '../dist/images'
                  }
               },
               'image-webpack-loader'
            ]
         },
         // {
         //    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
         //    use: {
         //       loader: 'file-loader',
         //       options: {
         //          outputPath: './css/fonts',
         //          name: '[name].[ext]',
         //          publicPath: '../dist/images'
         //       },
         //    }
         // },
         {
            use: ExtractTextPlugin.extract({
               use: 'css-loader'
            }),
            // use: ['style-loader', 'css-loader'],
            test: /\.css$/
         },
      ]
   },
   plugins: [
      new ExtractTextPlugin('css/style.css'),
      new HtmlWebpackPlugin({
         template: 'assets/index.html',
         // favicon: 'assets/images/favicon.ico'
      })
   ]
}


