var _ = require('lodash');

module.exports.id = 'Bitstamp';
module.exports.url = 'http://pastebin.com/raw/tNaqJzKx';

module.exports.parseFn = function(raw) {
  return [{
    code: 'USD',
    rate: parseFloat(raw.last)
  }];
};
