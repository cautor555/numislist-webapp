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
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/comment`;
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

  findAll: function (store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      const myArray = url.split("coin/");
      url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1] + '?order=NEWEST';

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  createRecord : function(store, type, snapshot) {
    console.log(store);

    if (snapshot.adapterOptions) {
      // let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let data = this.serialize(snapshot, { includeId: true });
      // url = url.replace('likes', 'like')
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/comment`;
      console.log(url);

      // const myArray = url.split("coin/");
      // url = myArray[0] + this.namespace + snapshot.adapterOptions.prefix + myArray[1];

      return this.ajax(url, 'POST', { data: data });
    } else {
      return this._super(...arguments);
    }
  },

  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),



});