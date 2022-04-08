import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class CoinController extends Controller {
  @service store;

  // @tracked username = "";


  @action
  deleteCoin(coinId) {
    // store = this.get('store');
    this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
      coin.destroyRecord(); // => DELETE to /posts/2
    });
  }

  // @action
  // modifyCoin(coinId) {
  //   // store = this.get('store');
  //   this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
  //     coin.destroyRecord(); // => DELETE to /posts/2
  //   });
  // }

  @action
  modifyCoin(coinId) {
    // this.get('model').set('notes','test1');
    // this.get('model').save();

    this.store.find('coin', 6).then(function(record) {
      record.set('notes', 'test5');

      record.save();
    });

    // store = this.get('store');
    // this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
    //   coin.destroyRecord(); // => DELETE to /posts/2
    // });
  }

  
}