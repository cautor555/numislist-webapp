import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
  namespace: 'coin/',
  host: 'http://10.252.174.190:8080',
  session: inject('session'),

  findAll: function(store, type, id, snapshot) {
      let url = `http://10.252.174.190:8080/user/messages/all`;
      let query = {
      };

      return this.ajax(url, 'GET', { data: query });

    },
    headers: computed('session.data.authenticated.access_token', function() {
      return {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
      };
  }),

})