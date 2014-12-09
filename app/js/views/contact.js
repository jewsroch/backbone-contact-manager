ContactManager.Views.Contact = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: _.template($('#tpl-contact').html()),

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },

  events: {
    'click .delete-contract': 'onClickDelete'
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.collection.remove(this.model);
  }
});