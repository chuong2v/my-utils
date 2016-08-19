var gulp = require('gulp');
var cucumber = require('gulp-cucumber');

gulp.task('cucumber', function() {
    return gulp.src('*test/features/*').pipe(cucumber({
        'steps': '*test/features/step_definitions/*.js',
        'support': '*test/features/support/*.js'
    }));
});