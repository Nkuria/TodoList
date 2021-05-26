import Todo from '../src/newTodo';
import Project from '../src/project';

const testData = {
  todo: new Todo(
    'Mow lawn',
    'Clear the surrounding grasses',
    '23/03/2010',
    'high',
    'Leave immediately after school',
    'pending',
  ),
  project: new Project('Chores'),
  target: document.createElement('p'),
  span: '<span class="iconify" data-icon="si-glyph:square-checked" data-inline="false"></span>',
};

const baseProject = new Project('Default');
baseProject.addTodo(new Todo(
  'Visit Dentist',
  'See the dentist for molar evaluation',
  '23/03/2010',
  'high',
  'Leave immediately after school',
  'pending',
));

baseProject.addTodo(new Todo(
  'Write Article',
  'Write an article on the difference between pass by value and pass by reference',
  '23/03/2010',
  'medium',
  'Set the target audience to begginers',
  'pending',
));

const defaultProjects = [baseProject];

export { testData, defaultProjects };
