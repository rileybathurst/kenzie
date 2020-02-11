import _ from 'lodash';

function menuSwap() {
    if (menu_small.className === 'active'){
        menu_small.className = 'inactive';
    } else {
        menu_small.className = 'active';
    }
}

const btn = document.createElement('button');
btn.innerHTML = 'Menu';
btn.onclick = menuSwap;  // onclick event is bind to the original printMe function

document.getElementById('header_menu').appendChild(btn);
