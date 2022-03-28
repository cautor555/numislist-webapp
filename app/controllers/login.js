// app/controllers/login.js
import Controller from '@ember/controller';
// import { inject } from '@ember/service';

fetch('http://localhost:8080/username=cautor&password=password',{
    method: "get",
    mode:"cors"

  })
  .then((response)=> response.json())
  .then((json => console.log(json)))



export default Controller.extend({

  // authManager: Ember.inject.service(),

  // actions: {
  //   authenticate() {
  //     const { login, password } = this.getProperties('login', 'password');
  //     this.get('authManager').authenticate(login, password).then(() => {
  //       alert('Success! Click the top link!');
  //     }, (err) => {
  //       alert('Error obtaining token: ' + err.responseText);
  //     });
  //   }
  // },
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});
