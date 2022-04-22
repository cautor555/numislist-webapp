import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';


export default class CollectionRoute extends Route {
  @service store;
  @service session;

  transition = null;

  beforeModel(transition) {
    this.transition = transition;
    this.session.requireAuthentication(transition, 'login');
    // transition.retry();
  }

  model(params) {
    // model() {
    const collectionId = params.collection_id;
    // this.store.unloadAll('coin');


    return Ember.RSVP.hash({
      // collections: this.store.findAll('collection'),
      collection: this.store.findRecord('collection', collectionId),
      coins: this.store.query('coin', { collectionId: collectionId })//this.store.findAll('coin', { include: 'collectionId' })
    });
    // return this.store.findAll('collection');
    // }


    // const collectionId = params.collection_id;
    // return this.store.findRecord('collection', collectionId);
  }
}