import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CollectionsController extends Controller {
  @service store;
  @service session;

  @action
  collectionModal(){
    let modal = document.getElementById('collection-modal');
    modal.style.display = "block";
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}


window.onclick = function(event) {
  let modal1 = document.getElementById('collection-modal');
  let modal2 = document.getElementById('collection-wrapper');

  if (event.target == modal1 || event.target == modal2) {
    modal1.style.display = "none";
  }

  let modal3 = document.getElementById('sell-wrapper');
  let modal4 = document.getElementById('sell-modal');

  if(event.target == modal3 || event.target == modal4)
    modal4.style.display = "none";
}