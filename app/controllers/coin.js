import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CoinController extends Controller {
  @service store;
  @service session;
  @tracked commentText = '';
  @tracked newImage = false;

  @action
  async deleteCoin(coinId, collectionId) {
    let coin = await this.store.findRecord('coin', coinId, { backgroundReload: false }).then(function (coin) {
      return coin.destroyRecord();
    });
      this.transitionToRoute('collection', collectionId);
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
  addComment(coinId, userId) {
    let comment = this.store.createRecord('comment', {
      userId: userId,
      coinId: coinId,
      comment: this.commentText,
    });

    comment.save({ adapterOptions: { prefix: coinId } });

    this.commentText = '';
  }

  @action
  like(userId, coinId, likedByViewer) {
    let liked = false;

    if (likedByViewer) {
      let like = this.store.findRecord('like', userId, { backgroundReload: false }).then(function (like) {

        like.destroyRecord({ adapterOptions: { prefix: coinId } });
      });
      liked = false;
    }
    else {
      let like = this.store.createRecord('like', {
        id: userId,
        userId: userId,
        coinId: coinId
      });

      like.save({ adapterOptions: { prefix: coinId } });
      liked = true;
    }

  }

  @action
  messageSeller(fromUserId, toUserId) {
    let url = window.location.href;
    let otherUser = 1;
    let message = this.store.createRecord('message', {
      toUserId: toUserId,
      fromUserId: fromUserId,
      messageContent: "Im interesten in this coin     " + url,
    });
    message.save();
  }

  @action
  didUploadImage(event) {
    let url = window.location.href;

    let parsedUrl = url.split("/");
    let coinId = parsedUrl[parsedUrl.length - 1];

    let [file] = event.target.files;

    let formData = new FormData()
    formData.append('file', file)

    fetch(`http://10.252.174.190:8080/coin/${coinId}/image`, {
      method: "post",
      mode: "cors",
      body: formData,
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`
      }
    });
    this.store.unloadAll('image');
    this.store.findAll('image', { adapterOptions: { prefix: coinId } });




    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById('new-img').src = e.target.result
      };

      reader.readAsDataURL(event.target.files[0]);
    }

  }

  @action
  editCoinModal(){
    let modal = document.getElementById('coin-modal');
    modal.style.display = "block";
  }

  @action
  sellModal(){
    let modal = document.getElementById('sell-modal');
    modal.style.display = "block";
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}


window.onclick = function(event) {

  let modal1 = document.getElementById('coin-modal');
  let modal2 = document.getElementById('cm');
  let modal3 = document.getElementById('sell-wrapper');
  let modal4 = document.getElementById('sell-modal');



  if (event.target == modal1 || event.target == modal2) {
    modal1.style.display = "none";
  }

  if(event.target == modal3 || event.target == modal4)
    modal4.style.display = "none";

}