import './styles.scss';

import * as $ from 'jquery';
import Accordion from './widgets/accordion/accordion';
import { DataProvider } from './providers/dataProvider';

$(document).ready(() => {
    let parent: JQuery = $('.container');
    let accordion: Accordion = new Accordion(parent, new DataProvider(), 'accordion1');

    accordion.setTitle('Filters');
    accordion.draw();

    let secondAccordion: Accordion = new Accordion(parent, new DataProvider(), 'accordion2');

    secondAccordion.setTitle('Widgets');
    secondAccordion.draw();
});
