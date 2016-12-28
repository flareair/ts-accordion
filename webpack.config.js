const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
