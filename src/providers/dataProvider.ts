import * as faker from 'faker';

/**
 * Accordion item interface
 */
export interface AccordionItem {
    heading: string;
    data: string;
}
/**
 * Data provider interface
 */
export interface DataProviderInterface {
    getAccordionData(size?: number): AccordionItem[];
}

export class DataProvider implements DataProviderInterface {
    /**
     * Returns data, suitable with accordion widget
     * @param  {number = 5} size data set size
     * @return {AccordionItem[]} array of Accordion items
     */
    public getAccordionData(size: number = 5): AccordionItem[] {
        let arr: AccordionItem[] = [];
        while (size > 0) {
            arr.push({
                heading: this.capitalizeFirstLetter(faker.lorem.word()),
                data: faker.lorem.sentence()
            });

            size--;
        }

        return arr;
    }
    /**
     * Capitalizes first letter of the string
     * @param  {string} word
     * @return {string} capitalized word
     */
    private capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }
}
