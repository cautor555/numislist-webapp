import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";


export default class Signup extends Controller {
  @service session;

  @tracked username;
  @tracked email;
  @tracked password;

  // beforeModel(){
  //   this.session.prohibitAuthentication('index');
  // }


  @action
  async signUp(event) {
    event.preventDefault();

    let response = await fetch('http://10.252.174.190:8080/user', {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({
        'username': this.username,
        'email': this.email,
        'password': this.password
      })
    });

    if(response.ok){
      return response.json();
    }

  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }

}
