import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CollectionRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(params) {
    const collectionId = params.collection_id;
    return this.store.findRecord('collection', collectionId);
  }
}