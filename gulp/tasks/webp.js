import webp from 'gulp-webp';

export function webpImages() {
  return app.gulp.src([`${app.paths.images.src}/**/**.{jpg,jpeg,png}`], { encoding: false })
    .pipe(webp())
    .pipe(app.gulp.dest(app.paths.images.build))
};
