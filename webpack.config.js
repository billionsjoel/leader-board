const path = require('path');
module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: './dist',
	},
};
