

module.exports = {
  init: {
    command: ([
      'rm -rf tmp',
      'rm -rf dist',
      'echo "\\$compileHash: \\"$(shuf -i 10000000-99999999 -n 1)\\";" > src/css/lib/_compilehash.scss',
    ]).join(' && '),
  },
  last: {
    command: ([
      'cp src/js dist/lib/ -rf',
      'cp tmp/js/* dist/lib/js/ -rf',
    ]).join(' && '),
  },
};
