import Project from '../src/project';
import Todo from '../src/newTodo';

const projectOne = new Project('Chores');
const todoOne = new Todo(
  'Mow lawn',
  'Clear the surrounding grasses',
  '23/03/2010',
  'high',
  'Leave immediately after school',
  'pending',
);

describe('Project', () => {
  it('should assign the name to the project title', () => {
    expect(projectOne.title).toBe('Chores');
  });

  it('should be assigned an empty array of todos', () => {
    expect(projectOne.todos.length).toBe(0);
  });

  it('should add a todo to the project todos', () => {
    projectOne.addTodo(todoOne);
    expect(projectOne.todos.length).toBe(1);
    expect(projectOne.todos[0]).toBe(todoOne);
  });

  it('should remove todo from project todos at index', () => {
    projectOne.deleteTodo(0);
    expect(projectOne.todos.length).toBe(0);
  });
});
