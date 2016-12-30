import './accordion.scss';

import * as $ from 'jquery';
import { AccordionItem, DataProviderInterface } from '../../providers/dataProvider';
import { template } from 'lodash';

let rawTemplate: string = require('./accordion.html');

export default class Accordeon {
    private parent: JQuery;
    private provider: DataProviderInterface;
    private title: string = 'default';

    private elementClass: string = 'accordion__element';
    private headingClass: string = 'accordion__element-heading';
    private expandedElementClass: string = 'accordion__element_expanded';

    constructor(parent: JQuery, provider: DataProviderInterface) {
        if (!parent[0]) {
            throw new TypeError('Parent element should be a valid DOM node');
        }

        this.parent = parent;
        this.provider = provider;
    }

    public draw(): void {
        let data = this.getData();

        this.parent.append(this.compileTemplate(rawTemplate, data));
        this.setEventHandlers();
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    private getData(): AccordionItem[] {
        return this.provider.getAccordionData();
    }

    private compileTemplate(rawTemplate: string, data: AccordionItem[]): string {
        return template(rawTemplate)({
            title: this.title,
            data
        });
    }

    private setEventHandlers(): void {

        this.parent.find(`.${this.headingClass}`).click((event) => {
            this.toggleElement(event);
        });
    }

    private toggleElement(event: JQueryInputEventObject): void {
        let element: JQuery = $(event.target);

        element.parents(`.${this.elementClass}`).toggleClass(this.expandedElementClass);
    }
}
