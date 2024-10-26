const { styles } = require("./styles")
const { scripts } = require("./scripts")
const { watch } = require("gulp")

function watching() {
  watch(["src/scss/style.css"], styles)
  watch(["src/js/main.js"], scripts)
}

exports.styles = styles //gulp styles in terminal
exports.scripts = scripts
exports.watching = watching
