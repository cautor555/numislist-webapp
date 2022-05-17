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

  async model(params){
    const coinId = params.coin_id;

    this.store.unloadAll('like');
    this.store.unloadAll('comment');
    this.store.unloadAll('image');

    let collectionId = await this.store.findRecord('coin', coinId).then(coin => {
      return coin.get('collectionId');
    });

    let issuer = await this.store.findRecord('collection', collectionId).then(collection => {
      return collection.get('issuer');
    });
    
    let permissions = await this.store.findRecord('collection', collectionId).then(collection => {
      return collection.get('permissions');
    });

    if(permissions === 'Public'){
      return Ember.RSVP.hash({
        coin: this.store.findRecord('coin', coinId),
        collection: this.store.findRecord('collection', collectionId),        
        likes: this.store.findAll('like', { adapterOptions: { prefix: coinId } }),
        comments: this.store.findAll('comment', { adapterOptions: { prefix: coinId }}),
        images: this.store.findAll('image', { adapterOptions: { prefix: coinId }}),
        user: this.store.queryRecord('user',{}),
        grades: this.store.findAll('enum', { adapterOptions: { enumType: 'grades' } }),
        mintMarks: this.store.findAll('enum', { adapterOptions: { enumType: 'mintmarks/'+issuer } }),
      });
    }
    else{
      return Ember.RSVP.hash({
        coin: this.store.findRecord('coin', coinId),
        collection: this.store.findRecord('collection', collectionId),        
        likes:false,
        comments:false,
        images: this.store.findAll('image', { adapterOptions: { prefix: coinId }}),
        user: this.store.queryRecord('user',{}),
        grades: this.store.findAll('enum', { adapterOptions: { enumType: 'grades' } }),
        mintMarks: this.store.findAll('enum', { adapterOptions: { enumType: 'mintmarks/'+issuer } }),
      });
    }
  }

}