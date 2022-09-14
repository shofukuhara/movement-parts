/*
|--------------------------------------------------------------------------
| Browser-sync config file
|--------------------------------------------------------------------------
|
| For up-to-date information about the options:
|   http://www.browsersync.io/docs/options/
|
| There are more options than you see here, these are just the ones that are
| set internally. See the website for more info.
|
|
 */
module.exports = {
  ui: {
    port: 3001,
  },
  files: [
    "./ScreenTransition/index.pug",
    "./ScreenTransition/src/scss/style.scss':'./ScreenTransition/src/css/style.css'",
  ],
  watchEvents: ["change"],
  watch: false,
  ignore: [],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  server: "ScreenTransition",
  proxy: false,
  port: 3000,
  middleware: false,
  serveStatic: [],
};
