import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class SaleRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
  }

  model(){
    this.store.unloadAll('coin');

    return Ember.RSVP.hash({
      coins: this.store.findAll('coin', { adapterOptions: { sale: "sale" } })
    });
  }

}