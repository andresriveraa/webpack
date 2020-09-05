const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry:{
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/[name].js',
	},
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					// 'style-loader',este lo injecta 
					// {
					// 	loader: MiniCSSExtractPlugin.loader
					// },
					// MiniCSSExtractPlugin.loader,
					'style-loader',
					'css-loader'
				],
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			// title: 'name' podemos cambiar el nombre del ouput
			minify: false
		}),
		// new MiniCSSExtractPlugin({
		// 	filename: 'css/[name].css', // este crea el archivo
		// }),
	]
};
