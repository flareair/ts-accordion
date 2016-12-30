import './accordion.scss';

import * as $ from 'jquery';
import { AccordionItem, DataProviderInterface } from '../../providers/dataProvider';
import { template } from 'lodash';

let rawTemplate: string = require('./accordion.html');

export default class Accordeon {
    private parent: JQuery;
    private container: JQuery;
    private containerId: string;
    private provider: DataProviderInterface;
    private title: string = 'default';

    public containerClass: string = 'accordion';
    public elementClass: string = 'accordion__element';
    public headingClass: string = 'accordion__element-heading';
    public expandedElementClass: string = 'accordion__element_expanded';
    public collapseAllClass: string = 'accordion__collapse-all';
    public expandAllClass: string = 'accordion__expand-all';

    constructor(parent: JQuery, provider: DataProviderInterface, id: string) {
        if (!parent[0]) {
            throw new TypeError('Parent element should be a valid DOM node');
        }

        if (id.length <= 0 || $(`#${id}`)[0]) {
            throw new TypeError('You should provide unique id');
        }

        this.parent = parent;
        this.containerId = id;
        this.provider = provider;
    }

    public draw(): void {
        let data = this.getData();

        this.parent.append(this.compileTemplate(rawTemplate, data));
        this.container = this.parent.find(`#${this.containerId}`);

        let headings = this.getHeadings();
        this.setEventHandlers(headings);
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
            id: this.containerId,
            data
        });
    }

    private setEventHandlers(headings: JQuery): void {

        headings.click((event) => {
            this.toggleElement(event);
        });

        this.container.find(`.${this.collapseAllClass}`).click((event: JQueryInputEventObject) => {
            event.preventDefault();
            this.collapseAll(headings);
        });

        this.container.find(`.${this.expandAllClass}`).click((event: JQueryInputEventObject) => {
            event.preventDefault();
            this.expandAll(headings);
        });
    }

    private toggleElement(event: JQueryInputEventObject): void {
        let element: JQuery = $(event.target);

        element.parents(`.${this.elementClass}`).toggleClass(this.expandedElementClass);
    }

    private getHeadings(): JQuery {
        return this.container.find(`.${this.headingClass}`);
    }

    private collapseAll(headings: JQuery): void {
        headings.parent().removeClass(this.expandedElementClass);
    }

    private expandAll(headings: JQuery): void {
        headings.parent().addClass(this.expandedElementClass);
    }
}
