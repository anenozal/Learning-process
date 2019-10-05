import './sass/mobile.sass';
import './scss/main.scss';
import './sass/main.sass';


document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;

console.log('Hello, world!');

var x=prompt ('Enter your name');
console.log (x);
confirm ('geopardy');