import Model, { attr } from '@ember-data/model';

export default class Coin extends Model {
  @attr('number') imageId;
}