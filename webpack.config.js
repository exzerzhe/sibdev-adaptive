const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'sibDev adaptive',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].css'
            }
        ),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: './img', to: 'img',
                    globOptions:{
                        ignore: [
                            'svg/*',
                        ]
                    }
                }
            ]
        })

    ],
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './js/index.js',
            './scss/style.scss',
        ],
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/js'),
            use: {
                loader: 'babel-loader',
            }
        },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader','resolve-url-loader','sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    devtool: (isProduction)? '' : 'inline-source-map',
    mode: isProduction ? 'production' : 'development'
};
