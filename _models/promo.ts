
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.1.0'
 * Timestamp: Wed Feb 12 2020 15:35:02 GMT-0500 (Eastern Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Promo extends ContentItem {
    public backgroundImage: Elements.AssetsElement;
    public description: Elements.RichTextElement;
    public title: Elements.TextElement;
    public learnMore: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'background_image') {
                    return 'backgroundImage';
                }
                if (elementName === 'learn_more') {
                    return 'learnMore';
                }
                return elementName;
            })
        });
    }
}
