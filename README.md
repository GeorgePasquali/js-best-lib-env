# Environment-js

## Getting started

Clone this repository and install its dependencies:

```bash
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

`npm test` builds the library, then tests it.

*Note that you would often include the `dist` folder in your [.gitignore](https://github.com/rollup/rollup-starter-lib/blob/master/.gitignore) file, but they are included here for ease of illustration.*
