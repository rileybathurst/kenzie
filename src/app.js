import _ from 'lodash';

/*
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
*/

const btn = document.createElement('button');
btn.className = 'mdc-button foo-button';  // onclick event is bind to the original printMe function

const rip = document.createElement('div');
rip.className = 'mdc-button__ripple';

const spa = document.createElement('span');
spa.className = 'mdc-button__label';
spa.innerHTML = 'Button';

btn.appendChild(rip);
btn.appendChild(spa);

document.getElementById('header_menu').appendChild(btn);

import {MDCRipple} from '@material/ripple/index';
new MDCRipple(document.querySelector('.mdc-button')); // I think this needs to be a query all