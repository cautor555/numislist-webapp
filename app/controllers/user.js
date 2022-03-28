import Controller from '@ember/controller';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';


// fetch('http://localhost:8080/coin/6',{
//   method: "get",
//   mode:"cors",
//   headers: new Headers({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjQ4NTAwNzY4fQ.RIgSEGphjvlh99AugaP9LCVR4IRm3yUP4OL-HdVP6Ns'
// }),
//   // credentials: "include"
// }).then((response)=> response.json())
// .then((json => console.log(json)))


// store.queryRecord('user', {}).then(function(user) {
//   let username = user.get('username');
//   console.log(`Currently logged in as ${username}`);
// });

export default Controller.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});


