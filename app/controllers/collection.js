import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CollectionController extends Controller {
  @service store;

  @action
  checkCoin(coinId) {
    this.store.find('coin', coinId).then(function (record) {
      let inCollection = record.inCollection;

      inCollection = !inCollection;
      record.set('inCollection', inCollection);

      record.save();
    });

  }

  @action
  addCoinModal(){
    let modal = document.getElementById('add-coin-modal')
    modal.style.display = "block";
  }

}