const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');

gulp.task('es', done => {
  gulp
    .src([
      path.resolve(__dirname, 'components', '**', '*.js'),
      path.resolve(__dirname, 'components', '**/demo', '*.jsx'),
    ])
    .pipe(
      babel({
        presets: [
          'react',
          path.resolve(__dirname, 'scripts', 'babel-preset.js'),
        ],
      }),
    )
    .pipe(gulp.dest(path.resolve(__dirname, 'test-gulp')));

  done();
});
