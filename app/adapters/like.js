import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  namespace: 'coin/',
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  findRecord: function(store, type, id, snapshot) {
    // liked

    if (snapshot.adapterOptions) {
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/liked`;
      let query = {
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      // const myArray = url.split("coin/");
      // url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1];

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  findAll: function(store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      const myArray = url.split("coin/");
      url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1];

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  deleteRecord : function(store, type, snapshot) {

    if (snapshot.adapterOptions) {
      // let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      // url = url.replace('likes', 'like')
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/unlike`;
      console.log(url);

      // const myArray = url.split("coin/");
      // url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1];

      return this.ajax(url, 'DELETE', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  createRecord : function(store, type, snapshot) {
    console.log(store);

    if (snapshot.adapterOptions) {
      // let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      // url = url.replace('likes', 'like')
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/like`;
      console.log(url);

      // const myArray = url.split("coin/");
      // url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1];

      return this.ajax(url, 'POST', { data: query });
    } else {
      return this._super(...arguments);
    }
  },
  
  // adapterFor
// createRecord
// createRecordDataFor
// deleteRecord
// findRecord: function(store, type, snapshot){ return 'fr'},
// getReference: function(store, type, snapshot){return 'gr'},
// hasRecordForId: function(store, type, snapshot){return 'hr'},
// modelFor: function(store, type, snapshot){return 'mf'},
// normalize: function(store, type, snapshot){return 'n'},
// peekAll: function(store, type, snapshot){return 'pa'},
// peekRecord: function(store, type, snapshot){return 'pr'},
// push: function(store, type, snapshot){return 'p'},
// pushPayload: function(store, type, snapshot){return 'pp'},
// query: function(store, type, snapshot){return 'q'},
// queryRecord: function(store, type, snapshot){return 'qr'},
// serializerFor: function(store, type, snapshot){return 'sf'},
// unloadAll: function(store, type, snapshot){return 'ua'},
// unloadRecord: function(store, type, snapshot){return 'ur'},

  headers: computed('session.data.authenticated.access_token', function() {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
}),

});