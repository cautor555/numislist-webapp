import Controller from '@ember/controller';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

export default Controller.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});


