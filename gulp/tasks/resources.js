export function resources() {
  return app.gulp.src(app.paths.resources.src, { encoding: false })
    .pipe(app.gulp.dest(app.paths.resources.build))
}
