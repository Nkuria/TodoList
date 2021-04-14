import { newList, displayTodoItems } from './dom';


const todos = [{
  title: 'Todo One',
  description: 'Todo is about food',
  dueDate: '23/03/2010',
  notes: 'this is a todo note',
  priority: 'Urgent',
  checklist: 'checked',
}];
displayTodoItems(todos);
newList(todos);
