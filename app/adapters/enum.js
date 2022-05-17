import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  session: inject('session'),

  findAll: function (store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = "http://10.252.174.190:8080/enum/"+snapshot.adapterOptions.enumType;

      let query = {
      };

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),

})