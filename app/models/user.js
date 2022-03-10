import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('number') userId;
  @attr('string') username;
  @attr('string') email;
  @attr('date') joinDate;

}