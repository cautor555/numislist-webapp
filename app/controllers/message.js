import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MessageController extends Controller {
  @service store;
  @tracked messageText = '';

  @action
  sendMessage(fromUserId, toUserId, messageLength) {
    let message = this.store.createRecord('message', {
      toUserId: toUserId,
      fromUserId: fromUserId,
      messageContent: this.messageContent,
    });

    message.save();

    this.messageText = '';
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}