import Model, { attr } from '@ember-data/model';

export default class Coin extends Model {
  @attr('string') enumId;
  @attr('string') enumValue;
}