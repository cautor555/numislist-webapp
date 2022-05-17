import Model, { attr } from '@ember-data/model';

export default class Like extends Model {
  @attr('number') userId;
  @attr('number') coinId;

}