import { displayProjects } from './dom';
import Todo from './newTodo';
import Project from './project';

const projectOne = new Project('Home');
projectOne.addTodo(new Todo(
  'Todo Project One',
  'Todo is about food',
  '23/03/2010',
  'high',
  'this is a todo note',
  'checked',
));

const projectTwo = new Project('Project Two');
projectTwo.addTodo(new Todo(
  'Todo Project Two ONw',
  'Todo is about food',
  '23/03/2010',
  'medium',
  'this is a todo note',
  'checked',
));

projectTwo.addTodo(new Todo(
  'Todo Project Two two',
  'Todo is about two',
  '23/03/2010',
  'high',
  'this is a todo note',
  'checked',
));

const projects = [projectOne, projectTwo];
displayProjects(projects);
// newList(todos);
