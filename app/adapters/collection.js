import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import Ember from 'ember';


export default DS.RESTAdapter.extend({
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  pathForType: function (type) {
    return type;
  },

  findAll: function (store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = '';
      if (snapshot.adapterOptions.top) {
        url = `http://10.252.174.190:8080/collections/top`
      }
      let query = {
      };

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  createRecord: function (store, type, snapshot) {
    if (snapshot.adapterOptions) {
      let url = `http://10.252.174.190:8080/collection/${snapshot.adapterOptions.id}/copy`;

      return this.ajax(url, 'POST', { data: {} });
    }
    else {
      let data = this.serialize(snapshot, { includeId: true });
      let url = `http://10.252.174.190:8080/collection`;

      return this.ajax(url, 'POST', { data: data });
    }
  },

  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),

})