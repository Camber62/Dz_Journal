const path = require('path');

module.exports = {
    entry: './src/js.js',
    mode:'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.scss$/i,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
};