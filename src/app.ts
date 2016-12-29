import './styles.scss';

import * as $ from 'jquery';
import Accordion from './widgets/accordion/accordion';


$(document).ready(() => {
    let parent: JQuery = $('.container');
    let accordion: Accordion = new Accordion(parent);

    accordion.draw();
});
