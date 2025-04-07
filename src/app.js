import './styles/main.scss'; // Styles entrypoint
import { menuBehaviour } from './js/menu-behaviour';
import { marqueeBehaviour } from './js/marquee-behaviour';
import { productsBehaviour } from './js/products-behaviour';

menuBehaviour();
marqueeBehaviour();
productsBehaviour();

console.log('Gradiweb is online!!!');
