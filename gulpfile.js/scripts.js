const { src, dest } = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify-es").default //minificate js-code, like scss({outputStyle: "compressed"})

function scripts() {
  return src("src/js/main.js").pipe(concat("main.min.js")).pipe(uglify()).pipe(dest("src/js"))
}

exports.scripts = scripts
