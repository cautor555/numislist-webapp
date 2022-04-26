import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action }  from'@ember/object';
import { inject as service } from '@ember/service';


export default class EditCoinComponent extends Component {
  @service store;
  @service router;

  @tracked date = 1;
  @tracked mintMark;
  @tracked attributes = '';
  @tracked grade;
  @tracked collectionId;


  enums = fetch('http://10.252.174.190:8080/enum/grades').then(response => response.json());


  @action
  addCoin() {

    let url = this.router.currentURL;
    let parsedUrl = url.split("/");
    this.collectionId = parsedUrl[parsedUrl.length -1];


    // this.store.find('collection', coinId).then(function (record) {
    //   let inCollection = record.inCollection;

    //   inCollection = !inCollection;
    //   record.set('inCollection', inCollection);

    //   record.save();
    // });

    let coin = this.store.createRecord('coin', {
      collectionId: this.collectionId,
      date: this.date,
      denomination: 'Cent',
      denominationQuantity: 1,
      attributes: this.attributes,
      mintMark: 'P',
      grade: 'MS 65',
      inCollection: true,
      notes: ""
    });

    coin.save();
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}