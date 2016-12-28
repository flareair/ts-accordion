export default class Accordeon {

    constructor(private parent: JQuery) {
        if (!parent[0]) {
            throw new TypeError('Parent element should be a valid DOM node');
        }
    }
    greet(text: string): void {
        this.parent.append(text);
    }
}
