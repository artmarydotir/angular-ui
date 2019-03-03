module.exports = {
  options: {
    outputStyle: process.env.NODE_ENV === 'dev' ? 'nested' : 'compressed',
    sourceMap: true,
  },
  dist: {
    files: {
      'src/css/main.css': 'src/css/main.scss',
    },
  },
};
