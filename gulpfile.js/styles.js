const { src, dest } = require("gulp")
const scss = require("gulp-sass")(require("sass"))
const concat = require("gulp-concat") //union all files into one file + rename (use gulp-rename for only renaming)
const browserSync = require("browser-sync").create()

function styles() {
  return src("src/scss/style.scss")
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream()) //.stream == change without refreshing the page
}

exports.styles = styles
