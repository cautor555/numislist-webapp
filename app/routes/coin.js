import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CoinRoute extends Route {
  @service store;

  model(){
    let nums = [1,2,3];
    return this.store.findAll('collectionentity');
  }

  // async model(params) {
  //   const {
  //     item_id
  //   } = params;
  //   const data  = await fetch('http://localhost:8080/coins/6');
  //   // const product = data.find(({
  //   //   id
  //   // }) => id === item_id);
  //   // console.log(product)
  //   return product;
  // }
}