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
        // include: Ember.get(snapshot.adapterOptions, 'include')
      };
      const myArray = url.split("coin/");
      url = 'http://10.252.174.190:8080/user/messages/' + snapshot.adapterOptions.prefix;

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  createRecord : function(store, type, snapshot) {
      let data = this.serialize(snapshot, { includeId: true });
      let url = `http://10.252.174.190:8080/user/message`;

      return this.ajax(url, 'POST', { data: data });
  },

  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),

})