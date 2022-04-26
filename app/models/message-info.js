import Model, { attr } from '@ember-data/model';

export default class Comment extends Model {
  
  @attr('number') userId;
  @attr('string') username;

}