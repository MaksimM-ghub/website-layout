import gulp from 'gulp';
import browserSync from 'browser-sync';

import { paths } from './gulp/config/paths.js';
import { clean } from './gulp/tasks/clean.js';
import { svgSprites } from './gulp/tasks/sprite.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { resources } from './gulp/tasks/resources.js';
import { images } from './gulp/tasks/images.js';
import { webpImages } from './gulp/tasks/webp.js';
import { htmlInclude } from './gulp/tasks/html-include.js';
import { htmlMinify } from './gulp/tasks/html-minify.js';

global.app = {
  gulp,
  isProd: process.argv.includes('--build'),
  paths,
}

function watcher () {
  browserSync.init({
    server: {
      baseDir: `${app.paths.project.build}`
    },
    notify: false,
    port: 3000,
  });

  gulp.watch(app.paths.styles.src, styles);
  gulp.watch(app.paths.jsMain.src, scripts);
  gulp.watch(`${app.paths.htmlPartials.src}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.htmlInclude.src}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.resources.src}/**`, resources);
  gulp.watch(`${app.paths.images.src}/**/**.{jpg,jpeg,png,svg}`, images);
  gulp.watch(`${app.paths.images.src}/**/**.{jpg,jpeg,png}`, webpImages);
  gulp.watch(app.paths.svgSprites.src, svgSprites);
}


const dev = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, watcher);
const build = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, htmlMinify);

export { clean }
export { dev }
export { build }

gulp.task('default', dev);
