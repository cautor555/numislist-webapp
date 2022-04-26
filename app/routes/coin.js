import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class CoinRoute extends Route {
  @service store;
  @service session;

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('liked', false);
    }
  }

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(params){
    this.store.unloadAll('like');

    const coinId = params.coin_id;

    this.store.unloadAll('comment');
    

    return Ember.RSVP.hash({
      coin: this.store.findRecord('coin', coinId),
      // coin: this.store.find('coin', coinId),
      likes: this.store.findAll('like', { adapterOptions: { prefix: coinId } }),
      comments: this.store.findAll('comment', { adapterOptions: { prefix: coinId }}),
      user: this.store.queryRecord('user',{}),
    });
  }

}