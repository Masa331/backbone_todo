window.TodoApp = {
  Models:      {},
  Collections: {},
  Views:       {},
  Routers:     {},
  content:     null,
  router:      null,
  collection:  null,

  initialize: function() {
    this.content    = $('#content');
    this.collection = new TodoApp.Collections.Todos;

    this.router = new this.Routers.BaseRouter;
    new this.Views.Menu({ el: $('#menu') });

    Backbone.history.start({});
  },

  title: function(str) {
    $('h1').text(str);
  }
};
