import Controller from '@ember/controller';

export default Controller.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});


