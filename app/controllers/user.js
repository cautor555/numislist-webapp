import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';


// fetch('http://localhost:8080/coins',{
//   method: "get",
//   mode:"cors",
//   headers: new Headers({"Content-Type":"application/json",}),
//   credentials: "include"
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


