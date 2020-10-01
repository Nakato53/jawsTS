declare var require: any;

require('./styles/main.css');
const jaws = require('../libs/jaws');

import Game from './game';
import JAWS from './JAWS';


window.onload = () => {
    JAWS.start(new Game(), ["assets/images/1004434.jpg"], {fps: 30, width: 300, height:300});
}