import Model, { attr } from '@ember-data/model';

// import DS from 'ember-data';

// export default DS.Model.extend({
//   date: DS.attr('number'),
//   denomination: DS.attr('string'),
//   date: DS.attr('date')
// });

export default class CollectionEntity extends Model {
  
  @attr('number') entityId;
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

}