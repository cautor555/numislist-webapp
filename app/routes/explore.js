import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default class ExploreRoute extends Route {
  @service store;
  @service session;

  beforeModel(transition){
    this.session.requireAuthentication(transition, 'login');
    this.store.peekAll('coin').map(model => model.unloadRecord());
    this.store.peekAll('collection').map(model => model.unloadRecord());
  }

  model(){
    return Ember.RSVP.hash({
      coins: this.store.findAll('coin', { adapterOptions: { topLiked: "topLiked" } }).then(results => results.sortBy('order')),
      collections: this.store.findAll('collection', { adapterOptions: { top: true } })
    });
  }

}