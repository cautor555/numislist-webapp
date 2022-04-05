import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CollectionsRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return this.store.findAll('collection');
  }
}