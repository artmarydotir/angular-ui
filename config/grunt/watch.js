module.exports = {
  'sass-watch': {
    files: [
      'src/css/**/*.scss',
      'src/**/*.pug',
    ],
    tasks: [
      'sass',
      'pug',
    ],
    options: {
      spawn: false,
    },
  },
};
