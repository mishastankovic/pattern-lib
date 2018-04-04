var sass = require('node-sass');
sass.render({
    file: "../styles/**/*.scss"
    // [, options..]
}, function(err, result) { /*...*/ });
// OR
var result = sass.renderSync({
    data: scss_content
//        [, options..]
});