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
	},
	{ 
		test: /\.svg$/, 
		exclude: ['node_modules'],
		loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' 
	},
	{
		test: /\.png/,
		exclude: ['node_modules'],
		loader: 'url-loader'
	}
]