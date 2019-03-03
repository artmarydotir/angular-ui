// const theme = require('./theme.js');

module.exports = {
  init: {
    files: [
      // {
      //   cwd: 'node_modules/angular-material/modules/closure/icon',
      //   src: '*.{eot,ttf,woff,woff2,svg}',
      //   dest: 'tmp/fonts',
      //   filter: 'isFile',
      //   expand: true,
      // },
      {
        cwd: 'node_modules/font-awesome/fonts',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: 'tmp/fonts',
        filter: 'isFile',
        expand: true,
      },
      {
        cwd: 'node_modules/vazir-font/dist',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: 'tmp/fonts',
        filter: 'isFile',
        expand: true,
      },
      {
        cwd: 'node_modules/vazir-font/dist/Farsi-Digits',
        src: '*.{eot,ttf,woff,woff2,svg}',
        dest: 'tmp/fonts',
        filter: 'isFile',
        expand: true,
      },
      {
        cwd: 'tmp/icons',
        src: '*.png',
        dest: 'dist/lib/icons',
        filter: 'isFile',
        expand: true,
      },
      {
        'dist/favicon.ico': 'tmp/icons/favicon.ico',
        'src/css/lib/_normalize.scss': 'node_modules/normalize.css/normalize.css',
      },
    ],
  },
  postCopy: {
    files: [
      {
        'src/css/lib/_framework.scss': 'tmp/css/framework.css',
      },
    ],
  },
  final: {
    files: [
      {
        cwd: 'src/css',
        src: '**/*',
        dest: 'dist/lib/css',
        expand: true,
      },
      {
        cwd: 'tmp/fonts',
        src: '**/*',
        dest: 'dist/lib/fonts',
        expand: true,
      },
    ],
  },
};
