import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const aboutAnchor = document.body.querySelector('#about-anchor');
const aboutMenu = document.body.querySelector('#about-menu');

aboutAnchor.addEventListener('click', () => { aboutMenu.open = !aboutMenu.open; });
