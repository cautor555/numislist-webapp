import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class CoinRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(params){
    this.store.unloadAll('message');

    const userId = params.user_id;

    return Ember.RSVP.hash({
      messages: this.store.findAll('message', { adapterOptions: { prefix: userId } }),
      user: this.store.queryRecord('user',{}),
      otherUser: this.store.findRecord('user',userId)
    });
  }
}