import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Helper.extend({
  // This service name is only an example
  // store: Ember.inject.service(),
  getUsername(userId) {
    let store = this.get('store');
    console.log(userId);
    return userId;
    // stuff here
  },
});

