import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const aboutAnchor = document.body.querySelector('#about-anchor');
const aboutMenu = document.body.querySelector('#about-menu');

aboutAnchor.addEventListener('click', () => { aboutMenu.open = !aboutMenu.open; });

const changeColor = document.body.querySelector('#change-color');
let state = false;

changeColor.addEventListener('click', () => {
    state = !state;
    if (state) {
        document.documentElement.style.setProperty('--green-code', 'white');
        document.documentElement.style.setProperty('--blue-code', 'white');
        document.documentElement.style.setProperty('--orange-code', 'white');
        document.documentElement.style.setProperty('--magenta-code', 'white');
    }else {
        document.documentElement.style.setProperty('--green-code', '#6aab73');
        document.documentElement.style.setProperty('--blue-code', '#56a8f5');
        document.documentElement.style.setProperty('--orange-code', '#cf8e6d');
        document.documentElement.style.setProperty('--magenta-code', '#c47cba');
    }
});