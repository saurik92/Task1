module.exports = {
    entry: {
        app: "./sampleApp.jsx",
    },
    output: {
        path: "./build",
        filename: "./sampleApp.js",
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [/\.min.js$/, /node_modules/,/lib/],
            loaders: ["babel-loader"]
        }, {
            test: /\.jsx?$/,
            exclude: [/\.min.js$/, /node_modules/],
            loaders: ["babel"]
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8000000'
        }, {
            test: /\.svg$/,
            loader: 'url-loader?limit=8000000'
        }],
    },
    modulesDirectories: ["node_modules", "bower_components"],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
    }
};