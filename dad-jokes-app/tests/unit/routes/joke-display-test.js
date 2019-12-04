import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | joke-display', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:joke-display');
    assert.ok(route);
  });
});
