import gulpif from 'gulp-if';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import newer from "gulp-newer";

export function images () {
  return app.gulp.src([`${app.paths.images.src}/**/**.{jpg,jpeg,png,svg}`], { encoding: false })
    .pipe(newer(app.paths.images.build))
    .pipe(gulpif(app.isProd, imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 2 }),
    ])))
    .pipe(app.gulp.dest(app.paths.images.build))
};
