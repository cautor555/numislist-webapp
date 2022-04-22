import Model, { attr } from '@ember-data/model';

export default class Comment extends Model {
  
  @attr('number') commentId;
  @attr('number') userId;
  @attr('string') username;
  @attr('number') coinId;
  @attr('string') comment;
  @attr('date') timestamp;
}