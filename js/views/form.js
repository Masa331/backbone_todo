TodoApp.Views.Form = Backbone.View.extend({
  template: _.template($("#todo-form").html()),
  index: false,
  collection: null,
  el: $('#content'),

  events: {
    'click button': 'save'
  },

  initialize: function() {
    this.render();
    this.collection   = TodoApp.collection;
  },

  render: function(index) {
    var title = "";

    if(typeof index == 'undefined') {
      this.index = false;
    } else {
      this.index = parseInt(index);
      this.todoForEditing = this.collection.at(this.index);
      title = this.todoForEditing.get("title");
    };

    this.$el.html(this.template({ title: title }));
    this.$el.find("textarea").focus();
    this.delegateEvents();
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var title = this.$el.find("textarea").val();
    if(title == "") {
      alert("Empty textarea!"); return;
    }
    if(this.index !== false) {
      this.todoForEditing.set("title", title);
    } else {
      this.collection.add({ title: title });
    }
    this.trigger("saved");
  }
});
