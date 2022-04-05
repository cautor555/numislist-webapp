import DS from "ember-data";
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({

  pathForType: function(type) {
    // return Ember.String.singularize(type);
    return type;
 },
  session: inject('session'),

  host: 'http://localhost:8080',

  headers: computed('session.data.authenticated.access_token', function() {
    // if (this.session.isAuthenticated) {

      console.log(this.session.data.authenticated.access_token);
      return {
        Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
      };
  }),


});