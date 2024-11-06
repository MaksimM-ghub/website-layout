const srcFolder = './src';
const buildFolder = './app';


export const paths = {
  project: {
    build: buildFolder
  },

  htmlInclude: {
    src: srcFolder,
    build: buildFolder
  },
  htmlFull: {
    src: srcFolder,
    build: buildFolder
  },
  htmlPartials: {
    src: `${srcFolder}/partials`
  },
  styles: {
    src: `${srcFolder}/scss/**/*.scss`,
    build: `${buildFolder}/css`
  },
  jsFull: {
    src: `${srcFolder}/scripts/**/*.js`,
    build: `${buildFolder}/scripts`
  },
  jsMain: {
    src: `${srcFolder}/scripts/main.js`,
    build: `${buildFolder}/scripts`
  },
  svgSprites: {
    src: `${srcFolder}/images/svg/*.svg`,
    build: `${buildFolder}/images`
  },
  images: {
    src: `${srcFolder}/images`,
    build: `${buildFolder}/images`
  },
  fonts: {
    src: `${srcFolder}/resources/fonts`,
    build: `${buildFolder}/resources/fonts`
  },
  resources: {
    src: `${srcFolder}/resources/**`,
    build: `${buildFolder}/resources`
  },
};
