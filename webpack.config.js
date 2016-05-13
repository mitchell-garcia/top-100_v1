var webpack = require('webpack');

/**
 * Plugin that copies HTML file into the dist folder during webpack build.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = {
  title: 'Top 100 | The Best Source For Trending Music',
  template: __dirname + '/client/index.ejs'
};

/**
 * Bourbon and Bourbon Neat node packages export an array
 * of file paths to inlude in project. Use with Webpack
 * sass loader to have all bourbon + neat mixins included globally.
 */
var bourbonPaths = require('bourbon').includePaths;
var neatPaths = require('bourbon-neat').includePaths;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    __dirname + '/client/app.js' // Your appʼs entry point
  ],
  devtool: 'source-map',
  resolve: {
    'modulesDirectories' : ['node_modules', 'client', 'assets']
  },
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
      publicPath: "/"
  },

  module: {
    loaders: [
      { 
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot']
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel", 
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.scss?$/, loader: 'style!css!sass?sourceMap&includePaths[]=' + bourbonPaths + '&includePaths[]=' + neatPaths[0] + '&includePaths[]=' + neatPaths[1] }
    ]
  },
  plugins: [new HtmlWebpackPlugin(HtmlWebpackPluginConfig), new webpack.HotModuleReplacementPlugin()]
};