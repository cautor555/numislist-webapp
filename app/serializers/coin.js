import JSONAPISerializer from '@ember-data/serializer/json-api';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'coinId',

});
