import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

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
  copyCollection(collectionId){
    let collection = this.store.createRecord('collection');
    collection.save({ adapterOptions: { id: collectionId } });
  }

  @action
  addCoinModal(){
    let modal = document.getElementById('coin-modal');
    modal.style.display = "block";
  }
}

window.onclick = function(event) {
  let modal1 = document.getElementById('coin-modal');
  let modal2 = document.getElementById('cm');

  if (event.target == modal1 || event.target == modal2) {
    modal1.style.display = "none";
  }

  modal1 = document.getElementById('collection-modal');
  modal2 = document.getElementById('collection-wrapper');

  if (event.target == modal1 || event.target == modal2) {
    modal1.style.display = "none";
  }

  let modal3 = document.getElementById('sell-wrapper');
  let modal4 = document.getElementById('sell-modal');

  if(event.target == modal3 || event.target == modal4)
    modal4.style.display = "none";
}