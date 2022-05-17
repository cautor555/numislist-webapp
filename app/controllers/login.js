import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class login extends Controller {
  @service session;

  @tracked username;
  @tracked password;
  @tracked error;

  @action
  async authenticate(event) {
    event.preventDefault();

    try {
      await this.session.authenticate('authenticator:auth-manager', this.username, this.password);
    } catch (error) {
      this.error = error;
      console.log(this.error);
      console.log("test");

    }
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}



