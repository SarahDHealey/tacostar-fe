const path = require('path');
const webpack = require('webpack');


module.exports = {
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
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			],
			test: /\.s?css$/
		}
	]},
	devtool: 'cheap-eval-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname,'public'),
		historyApiFallback: true
	}
}