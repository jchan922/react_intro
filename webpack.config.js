module.exports = {
    // 1) Tells Webpack main.js will be point of entry
    entry: './main.js',
    output: {
      filename: "bundle.js",
      path: __dirname + '/webpacked_code'
    },
    module: {
        loaders: [
            // look out for JS files except in node_modules and transform according to babel-loader
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
