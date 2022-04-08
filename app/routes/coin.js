import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CoinRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(params){
    const coinId = params.coin_id;

    return this.store.findRecord('coin', coinId)
      // "image" : this.store.findRecord();
  





    // const coinId = params.coin_id;
    // return this.store.findRecord('collectionentity', coinId)
  }
}