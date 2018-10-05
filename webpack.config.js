const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const api_key = process.env.API_URL;
const dotenv = require('dotenv');

const port = process.env.PORT || 3000;


module.exports = () => {
	// call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

	return {
		entry: [
			'./src/app.js'
		],
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
			})
		],
		externals: {
			'jQuery': 'jQuery'
		},
		output: {
			path: path.join(__dirname,'public/build'),
			filename: 'bundle.js',
			sourceMapFilename: 'bundle.map'	
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				],
				test: /\s?css$/
			}
		]},
		devtool: 'cheap-eval-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname,'public'),
			historyApiFallback: true
		}
	}
}