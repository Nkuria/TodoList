function Project(title) {
    this.title = title;

    this.todos = [];

    this.addTodo = (obj) => {
        this.todos.push(obj);

    }

    this.deleteTodo = (index) => {
        
    }

}