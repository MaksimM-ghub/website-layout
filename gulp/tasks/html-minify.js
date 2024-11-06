import htmlmin from "gulp-htmlmin";

export function htmlMinify() {
  return app.gulp.src(`${app.paths.htmlFull.build}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(app.gulp.dest(app.paths.htmlFull.build));
}
