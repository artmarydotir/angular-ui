module.exports = {
  /* adminFrameworkJs */
  frameworkJs: {
    options: {
      banner: '/*! Maryam Haghgou <m@artmary.ir>, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: 'tmp/js/framework.min.js.map',
    },
    files: {
      'tmp/js/framework.min.js': [
        'tmp/js/framework.js',
      ],
    },
  },
  /* main */
  main: {
    options: {
      banner: '/*! Maryam Haghgou <m@artmary.ir>, Generate at: <%= grunt.template.today("isoUtcDateTime") %> */',
      sourceMap: true,
      sourceMapName: 'src/js/main.js.map',
    },
    files: {
      'src/js/main.min.js': [
        'src/js/main.pack.js',
      ],
    },
  },
};
