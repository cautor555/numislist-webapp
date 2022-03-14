// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class ApplicationSerializer extends JSONAPISerializer {
//   primaryKey = 'entityId';
// }


import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'entityId'
});
