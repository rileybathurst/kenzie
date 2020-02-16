const btn = document.createElement('button');
btn.innerHTML = 'Menu'

document.getElementById('header_menu').appendChild(btn);

// start with an interior span
const spa = document.createElement('span');
spa.className = 'ripple';

// grab the button width
var rect = btn.getBoundingClientRect();

// make a square the big size which is width as button should only be one line I could do a greater than thing incase if really needed
spa.style.height = spa.style.width = Math.max(rect.width, rect.height) + 'px';

// drop it in
btn.appendChild(spa);






function show() {
    if (menu_small.className === 'active'){
        menu_small.className = 'inactive';
    } else {
        menu_small.className = 'active';
    }

    spa.classList.remove('show');

    // const ww = document.createElement('p');
    var xacross = event.pageX;
    var ydown = event.pageY;
    // console.log('ydwon = ' + ydown);


    // spa.style.top = '20px';
    // spa.style.top = ydown + 'px';
    // spa.style.left = xacross + 'px';

    // how far down the button is on the page
    console.log(rect.top);

    // height of the span including padding but not margin
    console.log(spa.offsetHeight);

    // top = click point on y minus how far down the button is minus the button height divided by 2 - minus how far the page has been scrolled
    // var top = ydown - rect.top - spa.offsetHeight / 2 - document.body.scrollTop; // just copying the math at this point
    var top = ((ydown - rect.top) - (spa.offsetHeight / 2)) - document.body.scrollTop; // just copying the math at this point
    // has a problem if the page is loaded further down
    console.log(top);
    spa.style.top = top + 'px';

    // var left = ((xacross - rect.left) - (spa.offsetWidth / 2)) - document.body.scrollLeft;
    var left = ((xacross - rect.left) - (spa.offsetWidth / 2)) - document.body.scrollLeft; // this might just be working because its the furthest left element
    spa.style.left = left + 'px';

    spa.classList.add('show');
}

btn.onclick = show;