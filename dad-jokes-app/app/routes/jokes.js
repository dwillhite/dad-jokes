import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
   // return this.store.findAll('dad-jokes-61ccf');
    return this.store.findAll('joke');
  }
});
