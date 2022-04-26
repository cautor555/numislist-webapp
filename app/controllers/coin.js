import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CoinController extends Controller {
  @service store;
  @tracked commentText = '';

  @action
  deleteCoin(coinId, collectionId) {
    this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function (coin) {
      coin.destroyRecord();
    });
    this.transitionToRoute('collection',collectionId);
  }

  @action
  modifyCoin(coinId) {
    this.store.find('coin', coinId).then(function (record) {
      record.set('id', record.commentId);

      record.save();
    });
  }

  @action
  checkCoin(coinId) {
    this.store.find('coin', coinId).then(function (record) {
      let inCollection = record.inCollection;

      inCollection = !inCollection;
      record.set('inCollection', inCollection);

      record.save();
    });

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

    comment.save({ adapterOptions: { prefix: coinId }});

    this.commentText = '';
  }

  @action
  like(userId, coinId, likedByViewer) {
    let liked = false; 

    if(likedByViewer){
      let like = this.store.findRecord('like', userId, { backgroundReload: false }).then(function(like) {
        
        like.destroyRecord({ adapterOptions: { prefix: coinId }});
      });
      liked = false;
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