import * as faker from 'faker';

export interface AccordionItem {
    heading: string;
    data: string;
}

export interface DataProviderInterface {
    getAccordionData(size?: number): AccordionItem[];
}

export class DataProvider implements DataProviderInterface {
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
    private capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
