import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CoinController extends Controller {
  @service store;

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}