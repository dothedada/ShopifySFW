const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (_, argv) => {
    const devMode = argv.mode === 'development';

    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: devMode ? '[name].js' : 'main.js',
            clean: true,
        },

        devtool: devMode ? 'eval-source-map' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]',
                    },
                },
                {
                    test: /\.(otf|ttf|woff2?)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext]',
                    },
                },
            ],
        },
        plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],

        optimization: devMode
            ? {}
            : {
                  minimize: true,
                  minimizer: [
                      new TerserPlugin({
                          terserOptions: {
                              compress: {
                                  drop_console: true,
                              },
                          },
                      }),
                      new CssMinimizerPlugin(),
                  ],
                  sideEffects: true,
                  usedExports: true,
              },
        mode: devMode ? 'development' : 'production',
    };
};
