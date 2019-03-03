module.exports = {
  dev: {
    entry: {
      main: './src/js/main.js',
    },
    output: {
      path: `${__dirname}/../../src/js/`,
      filename: '[name].pack.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              'env',
            ],
          },
        },
      ],
    },
    cache: true,
    failOnError: false,
    watch: true,
    watchOptions: {
      aggregateTimeout: 500,
      poll: true,
    },
    keepalive: true,
  },
  prod: {
    entry: {
      main: './src/js/main.js',
    },
    output: {
      path: `${__dirname}/../../src/js/`,
      filename: '[name].pack.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              'env',
            ],
          },
        },
      ],
    },
  },
};
