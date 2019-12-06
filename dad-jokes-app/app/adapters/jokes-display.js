import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({
  joke: DS.attr('string'),
  punchline: DS.attr('string'),
  laugh: DS.attr('number')
});