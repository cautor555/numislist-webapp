import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Ember from 'ember';


export default class CoinController extends Controller {
  @service store;
  @tracked commentText = '';


  @action
  deleteCoin(coinId) {
    // store = this.get('store');
    this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function (coin) {
      coin.destroyRecord(); // => DELETE to /posts/2
    });
  }

  // @action
  // modifyCoin(coinId) {
  //   // store = this.get('store');
  //   this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
  //     coin.destroyRecord(); // => DELETE to /posts/2
  //   });
  // }

  @action
  modifyCoin(coinId) {
    // this.get('model').set('notes','test1');
    // this.get('model').get(id);

    this.store.find('coin', coinId).then(function (record) {
      record.set('notes', 'test5');

      record.save();
    });

    // store = this.get('store');
    // this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
    //   coin.destroyRecord(); // => DELETE to /posts/2
    // });
  }


  @action
  checkCoin(coinId) {

    this.store.find('coin', coinId).then(function (record) {
      let inCollection = record.inCollection;

      // inCollection = record.get('inCollection');
      inCollection = !inCollection;
      record.set('inCollection', inCollection);

      record.save();
    });

    // store = this.get('store');
    // this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function(coin) {
    //   coin.destroyRecord(); // => DELETE to /posts/2
    // });
  }

  @action
  openModal() {
    // btn.onclick = function() {
    let modal = document.getElementById('editCoin')
    modal.style.display = "block";
  }

  @action
  addComment(coinId, userId) {
    let comment = this.store.createRecord('comment', {
      userId: userId,
      coinId: coinId,
      comment: this.commentText,
    });

    comment.save({ adapterOptions: { prefix: coinId }});//.then(function(save){
      // console.log(comment.get('commentId'))
      // record.set('likedByViewer', liked);
      // record.save();

    //});

    // selection.save().then(function(savedSelection){
      // console.log( savedSelection.get('id') );
    // });
    this.commentText = '';
  }

  

  @action
  like(userId, coinId, likedByViewer) {
    let liked = false; 

    if(likedByViewer){
      let like = this.store.findRecord('like', userId, { backgroundReload: false }).then(function(like) {
        
        like.destroyRecord({ adapterOptions: { prefix: coinId }});
        // like.save();
        // this.store.ul
      });
      console.log(like);
      liked = false;

      // this.store.unloadRecord(like);
    }
    else{
      let like = this.store.createRecord('like', {
        id: userId,
        userId: userId,
        coinId: coinId
      });

      like.save({ adapterOptions: { prefix: coinId }});
      liked = true;
    }

    this.store.find('coin', coinId).then(function (record) {
      record.set('likedByViewer', liked);
      record.save();
    });

  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}