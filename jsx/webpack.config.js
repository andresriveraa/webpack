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
					'style-loader',
					'css-loader'
				],
			},
			{
				test: /\.js|jxs$/,
				use: [
					'babel-loader',
				],
				exclude: /node_modules/,
			},
			{
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
		]
	},
	resolve:{
		extensions: [".js", ".jsx"]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			minify: false,
			template:  path.resolve(__dirname, './src/index.html'),
		}),
	],
	optimization:{
    splitChunks:{ // permite dividir el peso en diferentes archivos para evitar duplicación
      chunks:'all',
      minSize:0,
      name:'commons',
    }
  },
};
