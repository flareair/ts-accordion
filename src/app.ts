import * as $ from 'jquery';
import Accordion from './accordion';

$(document).ready(() => {
    let parent: JQuery = $('.container');
    let accordion: Accordion = new Accordion(parent);

    accordion.greet('Hello!');
});
