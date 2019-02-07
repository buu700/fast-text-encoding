This is a Node.js polyfill for [`TextEncoder`][1] and [`TextDecoder`][2].
Literally all it does is put `require('util').TextEncoder` and `require('util').TextDecoder`
into the global scope.

[1]: https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
[2]: https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder

# Usage

Install via NPM or Yarn (name "fast-text-encoding"), and then import purely for side effects:

```js
// don't need to save this anywhere, just require before use
require('fast-text-encoding');

const buffer = new TextEncoder().encode('Turn me into UTF-8!');
// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
```
