import Model, { attr } from '@ember-data/model';

export default class Coin extends Model {
  @attr('number') messageId;
  @attr('number') fromUserId;
  @attr('number') toUserId;
  @attr('string') messageContent;
  @attr('date') timestamp;
}
