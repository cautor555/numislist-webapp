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
    // this.get('model').get(id);

    this.store.find('coin', coinId).then(function(record) {
      record.set('notes', 'test5');

      record.save();
    });

    // store = this.get('store');
    // this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
    //   coin.destroyRecord(); // => DELETE to /posts/2
    // });
  }


  @action
  checkCoin(coinId) {
    // this.get('model').set('notes','test1');
    // this.get('model').save();

    this.store.find('coin', coinId).then(function(record) {
      let inCollection = record.inCollection;

      // inCollection = record.get('inCollection');
      inCollection = !inCollection;
      record.set('inCollection', inCollection);

      record.save();
    });

    // store = this.get('store');
    // this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
    //   coin.destroyRecord(); // => DELETE to /posts/2
    // });
  }

  @action
  openModal(){
    // btn.onclick = function() {
      let modal = document.getElementById('editCoin')
      modal.style.display = "block";
    
  }




  
}