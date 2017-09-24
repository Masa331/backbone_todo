TodoApp.Views.List = Backbone.View.extend({
  archive_mode: null,
  el: $('#content'),
  collection: null,
  template: _.template($("#items-list").html()),
  events: {
    'click a[data-up]':         'priorityUp',
    'click a[data-down]':       'priorityDown',
    'click a[data-archive]':    'archive',
    'click input[data-status]': 'changeStatus'
  },

  initialize: function(options) {
    this.collection   = TodoApp.collection;
    this.archive_mode = options.archive_mode;
    var handler       = _.bind(this.render, this);
    this.collection.bind('change', handler);
    this.collection.bind('add',    handler);
    this.collection.bind('remove', handler);
  },

  render: function() {
    self = this;
    this.$el.html(this.template({ x_collection: this.collection.where({ archived: this.archive_mode }) }));
    this.delegateEvents();
    return this;
  },

  priorityUp: function(e) {
    var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
    this.collection.up(index);
  },

  priorityDown: function(e) {
    var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
    this.collection.down(index);
  },

  archive: function(e) {
    var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
    this.collection.archive(this.archive_mode !== true, index);
  },

  changeStatus: function(e) {
    var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
    this.collection.changeStatus(e.target.checked, index);
  }

  // setMode: function(archive_mode) {
  //   this.archive_mode = archive_mode;
  // }
});
