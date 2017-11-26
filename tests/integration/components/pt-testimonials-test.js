import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pt-testimonials', 'Integration | Component | pt testimonials', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pt-testimonials}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pt-testimonials}}
      template block text
    {{/pt-testimonials}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
