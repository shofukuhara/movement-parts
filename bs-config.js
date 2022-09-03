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
  files: ["./スクロール背景拡大/index.pug", "./スクロール背景拡大/src/scss/style.scss"],
  watchEvents: ["change"],
  watch: false,
  ignore: [],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  server: 'スクロール背景拡大',
  proxy: false,
  port: 3000,
  middleware: false,
  serveStatic: [],
};
