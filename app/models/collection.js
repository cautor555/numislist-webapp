import Model, { attr } from '@ember-data/model';

export default class Collection extends Model {

  @attr('number') collectionId;
  @attr('number') userId;

  @attr('string') collectionName;
  @attr('string') denomination;
  @attr('number') denominationQuantity;
  @attr('string') issuer;

  @attr('string') permissions;
  @attr('date') timestamp;
}
