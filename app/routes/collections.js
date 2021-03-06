import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';


export default class CollectionsRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
    this.store.peekAll('collection').map(model => model.unloadRecord());

  }

  model() {
    return Ember.RSVP.hash({
      collections: this.store.findAll('collection'),
    });
  }
}