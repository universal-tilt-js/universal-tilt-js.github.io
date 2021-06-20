ES6+:

```js
import UniversalTilt from "universal-tilt.js";
```

CommonJS:

```js
const UniversalTilt = require("universal-tilt.js");
```

\
JavaScript / TypeScript:

```js
const elems = document.querySelectorAll(".tilt");

// v2
const universalTilt = UniversalTilt.init({
  elements: elems,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});

// v1
const universalTilt = new UniversalTilt(elems, {
  // options...
});
```

jQuery:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

```sh
npm install jquery
yarn add jquery
bower install jquery
```

```js
const jQuery = require("jquery");
```

```js
// v2
$(".tilt").universalTilt({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  },
});

// v1
$(".tilt").universalTilt({
  // options...
});
```
