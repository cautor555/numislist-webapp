import Component from '@glimmer/component';
import { action }  from'@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service session;
  @tracked isAuthenticated = this.session.isAuthenticated;

  @action
  logout(){
    this.session.invalidate();
  }
}