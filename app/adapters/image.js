// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default class ApplicationAdapter extends JSONAPIAdapter {
  

//   namespace = 'coin/1';

  
// }



import DS from "ember-data";
import Ember from 'ember';

import { computed } from '@ember/object';
import { inject } from '@ember/service';
import application from "./application";

export default application.extend({

  // host: 'http://localhost:8080',

//   pathForType: function(type) {
//     // return Ember.String.singularize(type);
//     return type;
//  },
  namespace: 'coin/1'
  // session: inject('session'),

  // host: 'http://localhost:8080',

  // headers: computed('session.data.authenticated.access_token', function() {
  //   // if (this.session.isAuthenticated) {

  //     console.log(this.session.data.authenticated.access_token);
  //     return {
  //       Authorization: `Bearer ${this.session.data.authenticated.access_token}`,
  //     };
  // }),

  
});