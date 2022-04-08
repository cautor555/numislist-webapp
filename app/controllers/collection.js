import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CollectionController extends Controller {
  @service store;

  price = 10;
  date = 1909;

  get date(){
    return this.date;
  }


  // @service('shopping-cart') cart;

  // get subtotal() {
  //   return this.cart.itemList.reduce((acc, item) => {
  //     return acc + item.price * item.count;
  //   }, 0);
  // }

  // get tax() {
  //   return 0.09 * this.subtotal;
  // }

  // get total() {
  //   return this.subtotal + this.tax;
  // }

}