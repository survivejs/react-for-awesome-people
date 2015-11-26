'use strict';

var ghpages = require('gh-pages');

main();

function main() {
  ghpages.publish('./', {
    src: 'index.html|dist/*'
  }, console.error.bind(console));
}
