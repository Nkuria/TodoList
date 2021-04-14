function Todo(title, description, dueDate, priority, notes, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;

  const editList = (newTitle, newdescription, newDueDate, newPriority, newNotes, newChecklist) => {
    this.title = newTitle;
    this.description = newdescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.notes = newNotes;
    this.checklist = newChecklist;
  };

  

}

Todo.prototype.changePriority = (target, text) => {
  target.innerHTML = text;
  this.priority = text;
  console.log(this.priority);
}

Todo.prototype.changeCompletionBtn = (target) => {
target.innerHTML = "Completed";
this.checklist = "Completed";
console.log(this.checklist);
}



export default Todo;
