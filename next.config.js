module.exports = {
	webpack: (config, { dev }) => {
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: "emit-file-loader",
				options: {
					name: "dist/[path][name].[ext]"
				}
			},
			{
				test: /\.css$/,
				loader: "babel-loader!raw-loader"
			},
			{
				test: /\.scss$/,
				loader: "babel-loader!raw-loader!sass-loader"
			},
			{
				test: /\.(png|jpg|gif|ico)$/,
				loader: "url-loader",
				options: {
					limit: 8192
				}
			},
		);
		return config;
	}
};
