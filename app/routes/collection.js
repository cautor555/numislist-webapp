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
  }
  setupController(controller, model){
    controller.set('model', model);
  }

  model(params) {
    const collectionId = params.collection_id;
    this.store.unloadAll('coin');

    return Ember.RSVP.hash({
      collection: this.store.findRecord('collection', collectionId),
      coins: this.store.findAll('coin', { adapterOptions: { collectionId: collectionId } })
    });
  }
}