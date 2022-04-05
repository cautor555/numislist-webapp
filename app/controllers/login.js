import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";


export default class login extends Controller {

  @tracked username = "";
  @tracked password = "";

  @service session;

  beforeModel(){
    this.session.prohibitAuthentication('index');
  }


  @action
  authenticate() {
    this.session.authenticate('authenticator:auth-manager', this.username, this.password).then(() => {
      alert('Success! Click the top link!');
    }, (err) => {
      alert('Error obtaining token: ' + err.responseText);
    });

    // console.log(this.authManager.isAuthenticated)
  }

  @action
  update(attr, event){
    this[attr] = event.target.value;
  }

}





// import Controller from '@ember/controller';
// import Ember from 'ember';

// export default Controller.extend({

//   authManager: Ember.inject.service(),

//   isExpanded: false,

//   actions: {
//     authenticate() {
//       const { login, password } = this.getProperties('username', 'password');
//       this.get('authManager').authenticate('cautor', 'password').then(() => {
//         alert('Success! Click the top link!');
//       }, (err) => {
//         alert('Error obtaining token: ' + err.responseText);
//       });

//       console.log(this.get('authManager').isAuthenticated)
//     }
//   }
// });


