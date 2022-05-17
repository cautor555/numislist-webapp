import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class UserRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(){
    return Ember.RSVP.hash({
      user: this.store.queryRecord('user',{}),
      messagesIds: this.store.findAll('messageInfo')
    });
  }
}