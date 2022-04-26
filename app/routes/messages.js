import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';


export default class MessagesRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(){
    return Ember.RSVP.hash({
      messagesIds: this.store.findAll('messageInfo'),
      user: this.store.queryRecord('user',{}),
    });
  }
}