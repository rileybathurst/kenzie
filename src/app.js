// grab the button width
var rect = btn.getBoundingClientRect();

// make a square the big size which is width as button should only be one line I could do a greater than thing incase if really needed
spa.style.height = spa.style.width = Math.max(rect.width, rect.height) + "px";


