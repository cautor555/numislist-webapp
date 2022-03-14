// import RESTAdapter from '@ember-data/adapter/rest';

// export default class ApplicationAdapter extends RESTAdapter {
//   namespace = 'api';

//   buildURL(...args) {
//     return `${super.buildURL(...args)}.json`;
//   }
// }


import Ember from "ember";
import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  // headers: new Headers({"Content-Type":"application/json",})
  // corsWithCredentials: true,
  // crossDomain: true,
  // xhrFields: { withCredentials: true }
});