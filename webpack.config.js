const path = require('path');
module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		finename: 'bundle.js',
	},
	mode: 'development',
};
