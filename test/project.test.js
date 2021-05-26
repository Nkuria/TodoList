import { testData } from './testData';

describe('Project', () => {
  it('should assign the name to the project title', () => {
    expect(testData.project.title).toBe('Chores');
  });

  it('should be assigned an empty array of todos', () => {
    expect(testData.project.todos.length).toBe(0);
  });

  it('should add a todo to the project todos', () => {
    testData.project.addTodo(testData.todo);
    expect(testData.project.todos.length).toBe(1);
    expect(testData.project.todos[0]).toBe(testData.todo);
  });

  it('should remove todo from project todos at index', () => {
    testData.project.deleteTodo(0);
    expect(testData.project.todos.length).toBe(0);
  });
});
