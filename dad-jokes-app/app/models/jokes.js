import Model from '@ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
  joke: DS.attr('string'),
  punchline: DS.attr('string'),
  laugh: DS.attr('number')

});
