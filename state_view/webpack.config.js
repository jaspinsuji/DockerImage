const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      // inline: true,
      port: 3000
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
               extensions: [".js", ".jsx"]
             },
             use: {
               loader: "babel-loader"
             }
            // options: {
            //    // presets: ['es2015', 'react']
            //    presets: ['@babel/env', '@babel/react']
            // }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}