/* eslint-disable no-var */
var chai;
var sinonChai;
/* eslint-enable no-var */

require('babel-register')({
  'presets': ['es2015']
});

require('mocha');
chai = require('chai');
sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.config.includeStack = true;
