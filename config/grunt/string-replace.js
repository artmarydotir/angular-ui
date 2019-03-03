module.exports = {
  init: {
    files: {
      'tmp/css/framework.css': 'tmp/css/framework.css',
    },
    options: {
      replacements: [
        {
          pattern: /(@font-face[^}]+})/gm,
          replacement: '/*$1*/',
        },
        {
          pattern: /@charset.+;/gm,
          replacement: '',
        },
        {
          pattern: /@import.*;/gm,
          replacement: '',
        },
        {
          pattern: /[\r\n]{2,}/g,
          replacement: '\n',
        },
      ],
    },
  },
};
