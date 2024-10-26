const { src, dest } = require("gulp")
const scss = require("gulp-sass")(require("sass"))
const concat = require("gulp-concat") //union all files into one file + rename (use gulp-rename for only renaming)

function styles() {
  return src("src/scss/style.scss")
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("src/css"))
}

exports.styles = styles
