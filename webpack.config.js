const path = require('path');

const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve('public'),
	},
	module: {
		rules: [
      {
  			test: /\.js$/,
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  			},
		  },
    ],
  },
};

// In this configuration object, we tell the pack to start from the index
// file under the source directory, and bundle all the modules that we depend
// on inside the entry file into a bundle.js file under the public directory.

// Then, for every file that ends with a .js, we want to run the babel-loader
// on it. The babel-loader will take care of transforming the non-standard
// JavaScript that we'll be using.
