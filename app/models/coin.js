import Model, { attr } from '@ember-data/model';

export default class Coin extends Model {
  @attr('number') coinId;
  @attr('number') collectionId;
  @attr('number') date;
  @attr('string') denomination;
  @attr('number') denominationQuantity;
  @attr('string') attributes;
  @attr('string') mintMark;
  @attr('string') grade;
  @attr('boolean') inCollection;
  @attr('string') notes;
  @attr('date') timestamp;

  @attr('number') userId;
  @attr('number') listPrice;
  @attr('number') order;
  

}