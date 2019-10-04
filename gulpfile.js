/*
 * The MIT License
 *
 * Copyright 2019 Sergey Pershin <sergey.pershin at hotmail.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('default', function (cb) {
  gulp.src('app/styles/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}))
          .pipe(sourcemaps.write('maps/'))
          .pipe(gulp.dest('www/static/styles/'));
  gulp.src('app/scripts/*.js')
          .pipe(sourcemaps.init())
          .pipe(uglify())
          .pipe(sourcemaps.write('maps/'))
          .pipe(gulp.dest('www/static/scripts/'));
  cb();
});
