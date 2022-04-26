import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  // namespace: 'coin/',
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  findAll: function (store, type, id, snapshot) {

    if (snapshot.adapterOptions) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
      };
      url = `http://10.252.174.190:8080/collection/${snapshot.adapterOptions.collectionId}/coins`;

      return this.ajax(url, 'GET', { data: query });
    } else {
      return this._super(...arguments);
    }
  },

  findRecord: function (store, type, id, snapshot) {
    let url = "http://10.252.174.190:8080/coin/" + id;
    let query = {
    };
    return this.ajax(url, 'GET', { data: query });
  },

  updateRecord: function (store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    var id = snapshot.id;
    var url = 'http://10.252.174.190:8080/coin/' + id;

    return this.ajax(url, "PUT", { data: data });
  },

  deleteRecord: function (store, type, snapshot) {
    let query = {};

    var id = snapshot.id;
    var url = 'http://10.252.174.190:8080/coin/' + id;

    return this.ajax(url, "DELETE", { data: query });
  },
  
  headers: computed('session.data.authenticated.access_token', function () {
    return {
      Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
    };
  }),

})