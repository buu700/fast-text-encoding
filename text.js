/**
 * @fileoverview Polyfill for TextEncoder and TextDecoder.
 */

(function(scope) {
'use strict';

// fail early
if (scope['TextEncoder'] && scope['TextDecoder']) {
  return false;
}

scope['TextEncoder'] = require('util').TextEncoder;
scope['TextDecoder'] = require('util').TextDecoder;

}(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this)));
