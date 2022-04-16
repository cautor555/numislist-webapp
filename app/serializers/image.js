import DS from 'ember-data';

    // app/serializers/photo.js
    export default DS.RESTSerializer.extend({
      normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        
        payload = {
          photo: payload.photos.photo
        };

        return this._super(store, primaryModelClass, payload, id, requestType);
      }
    });