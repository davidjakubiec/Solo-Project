const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'index.bundle.js'
    }, 
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 3010,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                 }
                },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }, 
    plugins: [
                new HtmlWebpackPlugin({
                // title: 'Development',
                //absolute path in future
                 template: './src/index.html'
                })
            ]
};
