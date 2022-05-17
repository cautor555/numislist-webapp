import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({

  pathForType: function(type) {
    return type;
 },
  session: inject('session'),

  host: 'http://10.252.174.190:8080',

  headers: computed('session.data.authenticated.access_token', function() {
      return {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
      };
  }),

});