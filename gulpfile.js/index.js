const { styles } = require("./styles")
const { scripts } = require("./scripts")

const { watch, parallel } = require("gulp")
const browserSync = require("browser-sync").create()

function watching() {
  watch(["src/scss/style.scss"], styles).on("change", browserSync.reload)
  watch(["src/js/main.js"], scripts).on("change", browserSync.reload)
  watch(["src/*.html"]).on("change", browserSync.reload) //.reload == full page reload
}

function browsersync() {
  //make static dev server
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  })
}

exports.styles = styles //gulp styles in terminal
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync

exports.default = parallel(styles, scripts, browsersync, watching)
