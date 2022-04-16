import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";


export default class login extends Controller {
  @service session;

  @tracked username;
  @tracked password;
  @tracked error;


  // beforeModel(){
  //   this.session.prohibitAuthentication('index');
  // }


  @action
  authenticate(event) {
    event.preventDefault();

    try {
      this.session.authenticate('authenticator:auth-manager', this.username, this.password)
    } catch (error) {
      this.error = err;
      console.log(err);
    }



  }

  @action
  update(attr, event) {
    console.log('test');
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

//     }
//   }
// });


