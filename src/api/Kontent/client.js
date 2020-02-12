// Kentico Kontent
import { DeliveryClient, TypeResolver, ElementsModels } from '@kentico/kontent-delivery';

const projectId = process.env.VUE_APP_PROJECT_ID;

// models
// eslint-disable-next-line no-unused-vars
import { HomePage } from '@/models/home_page';
import { SimplePage } from '@/models/simple_page';
import {Promo} from '@/models/promo';

// configure type resolvers
let typeResolvers = [
  new TypeResolver('home_page', () => new HomePage()),
  new TypeResolver('simple_page', () => new SimplePage()),
  new TypeResolver('promo', () => new Promo()),
];

let Client = new DeliveryClient({
  projectId: projectId,
  typeResolvers: typeResolvers,
  elementResolver: (elementWrapper) => {
    debugger;
    if (elementWrapper.contentItemSystem.type === 'your-content-type' && elementWrapper.rawElement.name === 'your-element-name') {
      //return new ColorElement(elementWrapper);
      debugger;
    }

    return undefined;
  }
});

export {
  Client
};