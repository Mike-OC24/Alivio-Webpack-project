const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
   mode: 'development',

   entry: path.resolve(__dirname, 'src', 'script.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   },
   plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'), 
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
         filename: 'main.css'
      }),
   ],
   module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
         test: /\.s[ac]ss$/i,
         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
       },
       {
         test: /\.(png|jpg|jpeg|svg|gif)$/i,
         type: 'asset/resource',
         generator: {
            filename: 'img/[name][ext]'
            }
       },
       {
         test: /\.(woff|woff2)$/i,
         type: 'asset/resource',
         generator: {
            filename: 'fonts/[name][ext]'
            }
       },
       {
         test: /\.(avi|mp4)$/i,
         type: 'asset/resource',
         generator: {
            filename: 'video/[name][ext]'
            }
       },
      ],
    }, 
};