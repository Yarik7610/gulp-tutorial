const { watch, parallel } = require("gulp")
const browserSync = require("browser-sync").create()

const { src, dest } = require("gulp")
const concat = require("gulp-concat") //union all files into one file + rename (use gulp-rename for only renaming)

const scss = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")

const uglify = require("gulp-uglify-es").default //minificate js-code, like scss({outputStyle: "compressed"})

function styles() {
  return src("src/scss/style.scss")
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer())
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream()) //.stream == change without refreshing the page
}

function scripts() {
  return src(["node_modules/swiper/swiper-bundle.js", "src/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(browserSync.stream())
}

function watching() {
  watch(["src/scss/style.scss"], styles)
  watch(["src/js/main.js"], scripts)
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

function build() {
  return src(["src/css/style.min.css", "src/js/main.min.js", "src/**/*.html"], { base: "src" }).pipe(dest("dist")) //base: "src" means save the same folder structure in dist as in src folder
}

exports.styles = styles //gulp styles in terminal
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync
exports.build = build

exports.default = parallel(styles, scripts, browsersync, watching)
