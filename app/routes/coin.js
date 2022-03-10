import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CoinRoute extends Route {
  @service store;

  // async 
  model(params) {
    const {
      coin_id
    } = params;
    // const data  = await this.store.findAll('product');
    // const product = data.find(({
      // id
    // }) => id === item_id);
    return coin_id;
  }

  // setupController(controller, model) {
  //   super.setupController(controller, model);
  //   controller.color = model.colors[0].color;
  // }
}