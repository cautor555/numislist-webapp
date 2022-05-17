import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  namespace: 'coin/',
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  findAll: function (store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
      };
      const myArray = url.split("coin/");
      url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/images`;

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  findRecord: function (store, type, id, snapshot) {
    let url = `http://10.252.174.190:8080/coin/${snapshot.adapterOptions.prefix}/image/` + id;

    let query = {
    };
    return this.ajax(url, 'GET', { data: query });
  },

  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),

})