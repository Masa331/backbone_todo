TodoApp.Routers.BaseRouter = Backbone.Router.extend({
  routes: {
    "archive":       "archive",
    "new":           "newToDo",
    "edit/:index":   "editToDo",
    "delete/:index": "deleteToDo",
    "":              "list"
  },

  list: function(archive_mode) {
    var view = new TodoApp.Views.List({ archive_mode: false });

    TodoApp.title("Your ToDos:");
    view.render();
  },

  archive: function() {
    var view = new TodoApp.Views.List({ archive_mode: true });

    TodoApp.title("Archive:");
    view.render();
  },

  newToDo: function() {
    var view = new TodoApp.Views.Form();
    view.on("saved", function() {
      TodoApp.router.navigate("", { trigger: true });
    });
    TodoApp.title("Create new ToDo:");
    view.render();
  },

  editToDo: function(index) {
    var view = new TodoApp.Views.Form();
    view.on("saved", function() {
      TodoApp.router.navigate("", { trigger: true });
    });

    TodoApp.title("Edit:");
    view.render(index);
  },
  deleteToDo: function(index) {
    TodoApp.collection.remove(TodoApp.collection.at(parseInt(index)));
    TodoApp.router.navigate("", {trigger: true});
  }
});
