
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.1.0'
 * Timestamp: Wed Feb 12 2020 15:35:02 GMT-0500 (Eastern Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class PageButton extends ContentItem {
    public buttonText: Elements.TextElement;
    public externalPageLink: Elements.TextElement;
    public openInNewTab: Elements.MultipleChoiceElement;
    public internalPageLink: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'button_text') {
                    return 'buttonText';
                }
                if (elementName === 'external_page_link') {
                    return 'externalPageLink';
                }
                if (elementName === 'open_in_new_tab') {
                    return 'openInNewTab';
                }
                if (elementName === 'internal_page_link') {
                    return 'internalPageLink';
                }
                return elementName;
            })
        });
    }
}
