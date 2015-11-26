'use strict';

var ghpages = require('gh-pages');

main();

function main() {
  ghpages.publish('./', console.error.bind(console));
}
