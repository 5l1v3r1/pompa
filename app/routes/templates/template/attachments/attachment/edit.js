import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'attachments.attachment.edit',
  renderTemplate: function(controller, model) {
    this.render('templates.template.attachments.index');
    this.render('attachments.attachment.edit', {
      into: 'application',
      outlet: 'modal',
      model: model,
    });
  },
  model: function() {
    return this.modelFor('templates.template.attachments.attachment');
  },
  setupController(controller, model) {
    this._super(...arguments);

    let template = model.get('template');
    controller.set('resources', template.get('resources'));
  },
});