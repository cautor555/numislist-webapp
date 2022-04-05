import Ember from 'ember';

export default Ember.Component.extend({

  authManager: Ember.inject.service(),

  actions: {
    authenticate() {
      // const { login, password } = this.getProperties('username', 'password');
      const credentials = this.getProperties('username', 'password');
      console.log(credentials);
      this.get('authManager').authenticate('cautor', 'password').then(() => {
        alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }

});