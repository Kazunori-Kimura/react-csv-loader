// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
    // webpack-dev-server設定
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
    },
    // typescript ビルド設定
    devtool: 'inline-source-map',
    entry: {
        app: './src/ts/index.tsx',
    },
    output: {
        path: path.join(__dirname, 'public/assets/'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
};

module.exports = config;
