'use strict';

var ghpages = require('gh-pages');

main();

function main() {
  ghpages.publish('./out', console.error.bind(console));
}
