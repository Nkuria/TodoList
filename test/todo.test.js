import { testData } from './testData';

describe('Todo', () => {
  it('should assign title to todo', () => {
    expect(testData.todo.title).toBe('Mow lawn');
  });

  it('should assign description to todo', () => {
    expect(testData.todo.description).toBe('Clear the surrounding grasses');
  });

  it('should assign duedate to todo', () => {
    expect(testData.todo.dueDate).toBe('23/03/2010');
  });

  it('should assign priority to todo', () => {
    expect(testData.todo.priority).toBe('high');
  });

  it('should assign notes to todo', () => {
    expect(testData.todo.notes).toBe('Leave immediately after school');
  });

  it('should assign completion state to todo', () => {
    expect(testData.todo.checklist).toBe('pending');
  });

  it('should update Todo properties after edit', () => {
    testData.todo.edit(
      'Mow lawn Edited',
      'Clear the surrounding grasses edited',
      '23/03/2020',
      'low',
      'Leave immediately after school Edited',
      'complete',
    );
    expect(testData.todo.title).toBe('Mow lawn Edited');
    expect(testData.todo.description).toBe('Clear the surrounding grasses edited');
    expect(testData.todo.dueDate).toBe('23/03/2020');
    expect(testData.todo.priority).toBe('low');
    expect(testData.todo.notes).toBe('Leave immediately after school Edited');
    expect(testData.todo.checklist).toBe('complete');
  });

  it('should change priority', () => {
    testData.todo.changePriority(testData.target, 'medium');
    expect(testData.todo.priority).toBe('medium');
    expect(testData.target.innerHTML).toBe('medium');
  });

  it('should change Completion of todo State', () => {
    testData.todo.changeCompletion(testData.target);
    expect(testData.todo.checklist).toBe('completed');
    expect(testData.target.innerHTML).toBe(testData.span);
  });
});
