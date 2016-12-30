import './styles.scss';

import * as $ from 'jquery';
import Accordion from './widgets/accordion/accordion';
import { DataProvider } from './providers/dataProvider';

$(document).ready(() => {
    let parent: JQuery = $('.container');
    let accordion: Accordion = new Accordion(parent, new DataProvider());

    accordion.setTitle('Filters');
    accordion.draw();
});
