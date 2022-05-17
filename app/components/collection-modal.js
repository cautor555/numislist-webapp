import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action }  from'@ember/object';
import { inject as service } from '@ember/service';


export default class CollectionModalComponent extends Component {
  @service store;
  @service router;

  @tracked collectionName;
  @tracked denomination = "Cent";
  @tracked denominationQuantity = 1;
  @tracked issuer = "United States";
  @tracked permissions = "Public";
  
  @action
  addCollection() {
    console.log(this.collectionName);
    console.log(this.denomination);
    console.log(this.denominationQuantity);
    console.log(this.issuer);
    console.log(this.permissions);

    let collection = this.store.createRecord('collection', {
      collectionName: this.collectionName,
      denomination: this.denomination,
      denominationQuantity: this.denominationQuantity,
      issuer: this.issuer,
      permissions: this.permissions,
    });

    collection.save();

    let modal = document.getElementById('collection-modal');
    modal.style.display = "none";
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
    console.log(event.target.value);
  }
}