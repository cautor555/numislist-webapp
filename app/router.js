import EmberRouter from '@ember/routing/router';
import config from 'numislist-webapp/config/environment';

export default class Router extends EmberRouter {

  location = config.locationType;
  rootURL = config.rootURL;
}


Router.map(function () {

  this.route('user');
  this.route('messages');
  this.route('collection', {path: '/collection/:collection_id'});
  this.route('collections');
  this.route('coin', {path: '/coin/:coin_id'});
  this.route('explore');
  this.route('sale');

  this.route('login');

  this.route('404', { path: '/*path' });
});

