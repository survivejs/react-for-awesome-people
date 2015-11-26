'use strict';

var ghpages = require('gh-pages');

main();

function main() {
  ghpages.publish('./out', {
    silent: false,
    logger: console.log.bind(console)
  }, console.error.bind(console));
}
