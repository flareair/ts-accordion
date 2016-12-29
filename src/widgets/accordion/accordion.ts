import './accordion.scss';
let template: string = require('./accordion.html');

export default class Accordeon {
    constructor(private parent: JQuery) {
        if (!parent[0]) {
            throw new TypeError('Parent element should be a valid DOM node');
        }
    }
    draw(): void {
        this.parent.append(template);
    }
}
