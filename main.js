// main.js
var slideLoader = require('./slide-loader');

console.log(slideLoader.slideLoader);
console.log(slideLoader.dummy);


slideLoader.slideLoader('slides.txt', function(slides){
    slides.forEach(function (slide) {
        console.log('\n\n\n\n    ' + slide);
    });
});

slideLoader.dummy();
