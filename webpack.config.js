module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		path: __dirname,
		filename: './src/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}
