import Todo from '../src/newTodo';

const todoOne = new Todo(
  'Mow lawn',
  'Clear the surrounding grasses',
  '23/03/2010',
  'high',
  'Leave immediately after school',
  'pending',
);

const target = document.createElement('p');

const span = '<span class="iconify" data-icon="si-glyph:square-checked" data-inline="false"></span>';

describe('Todo', () => {
  it('should assign title to todo', () => {
    expect(todoOne.title).toBe('Mow lawn');
  });

  it('should assign description to todo', () => {
    expect(todoOne.description).toBe('Clear the surrounding grasses');
  });

  it('should assign duedate to todo', () => {
    expect(todoOne.dueDate).toBe('23/03/2010');
  });

  it('should assign priority to todo', () => {
    expect(todoOne.priority).toBe('high');
  });

  it('should assign notes to todo', () => {
    expect(todoOne.notes).toBe('Leave immediately after school');
  });

  it('should assign completion state to todo', () => {
    expect(todoOne.checklist).toBe('pending');
  });

  it('should update Todo properties after edit', () => {
    todoOne.edit(
      'Mow lawn Edited',
      'Clear the surrounding grasses edited',
      '23/03/2020',
      'low',
      'Leave immediately after school Edited',
      'complete',
    );
    expect(todoOne.title).toBe('Mow lawn Edited');
    expect(todoOne.description).toBe('Clear the surrounding grasses edited');
    expect(todoOne.dueDate).toBe('23/03/2020');
    expect(todoOne.priority).toBe('low');
    expect(todoOne.notes).toBe('Leave immediately after school Edited');
    expect(todoOne.checklist).toBe('complete');
  });

  it('should change priority', () => {
    todoOne.changePriority(target, 'medium');
    expect(todoOne.priority).toBe('medium');
    expect(target.innerHTML).toBe('medium');
  });

  it('should change Completion of todo State', () => {
    todoOne.changeCompletion(target);
    expect(todoOne.checklist).toBe('completed');
    expect(target.innerHTML).toBe(span);
  });
});
