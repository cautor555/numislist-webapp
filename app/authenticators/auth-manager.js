import Ember from 'ember';
import { bool } from '@ember/object/computed';
import Base from 'ember-simple-auth/authenticators/base' 


export default Base.extend({
  async restore(data){
    // console.log(data.access_token);

    let {token} = data.access_token;
    // if(token){
    console.log(token);

    return data;
    // }
    // else{
      // throw 'no valid session data';
    // }
    
  },

  async authenticate(login, password) {

    let response = await fetch('http://localhost:8080/login', {
      method: "post",
      mode: "cors",
      body: new URLSearchParams({
        'username': login,
        'password': password,
      })
    });

    if(response.ok){
      console.log(true);
      return response.json();
    }
    // else{

    // }
},

  invalidate(data) {
  this.set('accessToken', null);
},

});
