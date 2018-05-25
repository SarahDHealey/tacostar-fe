const path = require('path');
const webpack = require('webpack');

const port = process.env.PORT || 3000;


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