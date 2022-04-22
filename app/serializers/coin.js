import JSONAPISerializer from '@ember-data/serializer/json-api';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'coinId',

  // serialize(snapshot, options) {
    // let json = super.extractAttributes ()

    // console.log(snapshot);
    // snapshot.attr('date');

    // json.data = {
    //   coinId: 
    //   amount: json.data.attributes.amount,
    //   currency: json.data.attributes.currency
    // };

    // @attr('number', { key: 'coinId' }) coinId;
    // @attr('number', { key: 'collectionId' }) collectionId;
    // @attr('number', { key: 'date' }) date;
    // @attr('string', { key: 'denomination' }) denomination;
    // @attr('number', { key: 'denominationQuantity' }) denominationQuantity;
    // @attr('string', { key: 'attributes' }) attributes;
    // @attr('string', { key: 'mintMark' }) mintMark;
    // @attr('string', { key: 'grade' }) grade;
    // @attr('boolean', { key: 'inCollection' }) inCollection;
    // @attr('string', { key: 'notes' }) notes;
    // @attr('date', { key: 'timestamp' }) timestamp;

    // delete json.data.attributes.amount;
    // delete json.data.attributes.currency;

    // return 'json';
  // }

});
