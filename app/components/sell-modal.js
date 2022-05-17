import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class CoinModalComponent extends Component {
  @service store;
  @service session;

  @service router;

  @tracked price;

  @action
  sell() {

    let url = this.router.currentURL;
    let parsedUrl = url.split("/");

    let coinId = parsedUrl[parsedUrl.length - 1];

    fetch(`http://10.252.174.190:8080/coin/${coinId}/sale?price=${this.price}`, {
      method: "put",
      mode: "cors",
  
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
      }
    });

    let modal = document.getElementById('sell-modal');
    modal.style.display = "none";
  }



  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}