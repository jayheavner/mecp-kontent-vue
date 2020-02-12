import { Client } from '@/api/Kontent/client.js';
import { takeUntil } from 'rxjs/operators';

import BaseStore from '@/store/base';

let content = '';

class MECP extends BaseStore {
  constructor() {
    super();
  }

  // Actions
  fetchFromCMS(codeName) {
    console.log(`codName > ${codeName}`);
    // if (localStorage.topic !== undefined) {
    //   content = JSON.parse(localStorage.topic);
    //   this.notifyChange();
    // } else {
    // debugger;

    let query = Client.item(codeName).depthParameter(10)

    query
      .toObservable()
      .pipe(takeUntil(this.observableUnsubscribe))
      .subscribe(response => {
        content = response.item;
        localStorage.topic = JSON.stringify(content);
        this.notifyChange();
      });
    // }
  }
  // Methods
  get() {
    return content;
  }

  fetchHomePageContent() {
    this.fetchFromCMS('home');
  }
}

let Store = new MECP();

export { Store };
