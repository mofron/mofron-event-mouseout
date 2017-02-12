module.exports = {
    entry: __dirname + '/src/mouseout.js',
    output: {
        path: __dirname + '/dist',
        filename: 'mouseout.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
