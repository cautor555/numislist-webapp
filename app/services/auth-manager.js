import Ember from 'ember';
import { bool } from '@ember/object/computed';


export default Ember.Service.extend({

  accessToken: null,

  authenticate(login, password) {
    // return Ember.$.ajax({
    //   method:'POST',
    //   url: 'http://localhost:8080/login?username=cautor&password=password',
    //   data: {username: 'cautor', password: 'password'}


    // })

    return fetch('http://localhost:8080/login?username=cautor&password=password',{
      method: "post",
      mode:"cors"
    // body: JSON.stringify({username: 'cautor', password: 'password'})
  
  
    }).then((result) => {
      this.set('accessToken', result.access_token);
    });
  },

  invalidate() {
    this.set('accessToken', null);
  },

  isAuthenticated: bool('accessToken')

});

      // host: 'http://localhost:8080',
