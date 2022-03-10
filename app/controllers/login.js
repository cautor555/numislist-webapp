// app/controllers/login.js
import Controller from '@ember/controller';
// import { inject } from '@ember/service';



fetch('http://localhost:8080/login?username=cautor&password=password',{
    method: "post",
    mode:"cors",
  credentials: "include"

  })
  .then((response)=> response.json())
  .then((json => console.log(json)))



export default Controller.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});
