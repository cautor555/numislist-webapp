import Route from '@ember/routing/route';

export default class CollectionRoute extends Route {
  model() {
    const coins = [{date: 1909}, {date: 1914}];
    return coins;
  }
}