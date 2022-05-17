import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  namespace: 'coin/',
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  findRecord: function(store, type, id, snapshot) {
    if (snapshot.adapterOptions) {
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/liked`;
      let query = {
      };

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  findAll: function(store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
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
      let query = {};
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/unlike`;

      return this.ajax(url, 'DELETE', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  createRecord : function(store, type, snapshot) {
    if (snapshot.adapterOptions) {
      let query = {};
      let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/like`;

      return this.ajax(url, 'POST', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  headers: computed('session.data.authenticated.access_token', function() {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
}),

});