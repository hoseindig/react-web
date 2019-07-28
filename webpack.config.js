//entry -> output 

const path = require('path');

const myPath = path.join(__dirname, 'public');

console.log("curent path :", myPath);


module.exports = {
    entry: './src/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/
        }


            , {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: myPath,
        historyApiFallback: true
    }
};