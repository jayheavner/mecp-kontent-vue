import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.1.0'
 * Timestamp: Wed Feb 12 2020 09:57:05 GMT-0500 (Eastern Standard Time)
 */
export class Promo extends ContentItem {
  constructor() {
    super({
      richTextResolver: promo => {
        debugger;
      },
      propertyResolver: elementName => {
        if (elementName === 'background_image') {
          return 'backgroundImage';
        }
        if (elementName === 'learn_more') {
          return 'learnMore';
        }
        return elementName;
      }
    });
  }
}
