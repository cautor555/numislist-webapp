import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'coinId',
  primaryKey: 'userId'

  // compositeKeys: ['coinId', 'userId'],

  // exractId(modelClass, resourceHash) {
  //   return this.compositeKeys.map((key) => resourceHash.attributes[key]).join('-');
  // }

});
