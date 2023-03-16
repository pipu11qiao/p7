const { src, dest, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const sassGlob = require("gulp-sass-glob");

const postcss = require("gulp-postcss");

const autoprefixer = require("autoprefixer");

const cssnano = require("cssnano");

function scss() {
  const plugins = [autoprefixer(), cssnano()];

  return src("src/styles/*.scss")
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(dest("lib/styles"));
}

exports.default = series(scss);
