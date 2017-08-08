module.exports = [
	{
		test: /\.js$/, 
		exclude: /node_modules/,
		loader: 'babel-loader'
	},
	{
		test: /\.css$/,
		loaders: ['style-loader', 'css-loader?importLoaders=1'],
		exclude: ['node_modules']
	}
]