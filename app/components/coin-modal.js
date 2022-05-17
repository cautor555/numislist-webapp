import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class CoinModalComponent extends Component {
  @service store;
  @service router;

  @tracked date;
  @tracked mintMark;
  @tracked attributes;
  @tracked notes;
  @tracked grade = "Not Graded";

  @action
  async save() {

    let url = this.router.currentURL;
    let parsedUrl = url.split("/");

    if (url.includes("coin")) {
      let coinId = parsedUrl[parsedUrl.length - 1];

      let context = this;

      this.store.find('coin', coinId).then(function (record) {
        record.set('date', context.date);
        record.set('mintMark', context.mintMark);
        record.set('attributes', context.attributes);
        record.set('notes', context.notes);
        record.set('grade', context.grade);

        record.save();
      });
    }

    else {
      let collectionId = parsedUrl[parsedUrl.length - 1];

      let collection = this.store.peekRecord('collection', collectionId);
      let denomination = collection.get('denomination');
      let denominationQuantity = collection.get('denominationQuantity');

      let coin = this.store.createRecord('coin', {
        collectionId: collectionId,
        date: this.date,
        denomination: denomination,
        denominationQuantity: denominationQuantity,
        attributes: this.attributes,
        mintMark: this.mintMark,
        grade: this.grade,
        inCollection: false,
        notes: this.notes
      });

      let deletedCoin = await coin.save().catch(function (err) {
        coin.destroyRecord();
      });

      this.store.unloadAll('coin');
      this.store.findAll('coin', { adapterOptions: { collectionId: collectionId } }).then(results => results.sortBy('order'));

    }

    let modal = document.getElementById('coin-modal');
    modal.style.display = "none";
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}