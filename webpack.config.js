const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './js/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'out')
    }
}