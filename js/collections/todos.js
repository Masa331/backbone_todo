TodoApp.Collections.Todos = Backbone.Collection.extend({
  model: TodoApp.Models.Todo,

  initialize: function() {
    this.add({ title: 'Learn Javascripts Basics', archived: false, done: false });
    this.add({ title: 'Go To Backbonejs.org', archived: false, done: false });
    this.add({ title: 'Develop a Backbone App', archived: false, done: false });
  },

  up: function(index) {
    if(index > 0) {
      var tmp = this.models[index-1];
      this.models[index-1] = this.models[index];7
      this.models[index] = tmp;
      this.trigger('change');
    }
  },
  down: function(index) {
    if(index < this.models.length-1) {
      var tmp = this.models[index+1];
      this.models[index+1] = this.models[index];
      this.models[index] = tmp;
      this.trigger("change");
    }
  },
  archive: function(archived, index) {
    this.models[index].set("archived", archived);
  },
  changeStatus: function(done, index) {
    this.models[index].set("done", done);
  }
});
