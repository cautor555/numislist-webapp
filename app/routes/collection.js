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
  setupController(controller, model) {
    controller.set('model', model);
  }

  async model(params) {
    const collectionId = params.collection_id;
    this.store.unloadAll('coin');
    this.store.unloadAll('collection');

    let issuer = await this.store.findRecord('collection', collectionId).then(collection => {
      return collection.get('issuer');
    });

    return Ember.RSVP.hash({
      collection: this.store.findRecord('collection', collectionId),
      coins: this.store.findAll('coin', { adapterOptions: { collectionId: collectionId } }),
      user: this.store.queryRecord('user', {}),
      grades: this.store.findAll('enum', { adapterOptions: { enumType: 'grades' } }),
      mintMarks: this.store.findAll('enum', { adapterOptions: { enumType: 'mintmarks/'+issuer } }),
    });
  }
}