import Todo from './newTodo';
import Project from './project';

const projectOne = new Project('Default');
projectOne.addTodo(new Todo(
  'Visit Dentist',
  'See the dentist for molar evaluation',
  '23/03/2010',
  'high',
  'Leave immediately after school',
  'pending',
));

projectOne.addTodo(new Todo(
  'Write Article',
  'Write an article on the difference between pass by value and pass by reference',
  '23/03/2010',
  'medium',
  'Set the target audience to begginers',
  'pending',
));

const convertJsonToTodo = (jsonArr) => {
  const holder = new Project(jsonArr.title);
  for (let j = 0; j < jsonArr.todos.length; j += 1) {
    holder.addTodo(new Todo(
      jsonArr.todos[j].title,
      jsonArr.todos[j].description,
      jsonArr.todos[j].dueDate,
      jsonArr.todos[j].priority,
      jsonArr.todos[j].notes,
      jsonArr.todos[j].checklist,
    ));
  }
  return holder;
};

const convertJsonToProject = (jsonArr) => {
  const projects = [];
  for (let i = 0; i < jsonArr.length; i += 1) {
    projects.push(convertJsonToTodo(jsonArr[i]));
  }
  return projects;
};

const storeItem = (name, data) => window.localStorage.setItem(name, JSON.stringify(data));

const defaultProjects = [projectOne];

const fetchItem = name => {
  const json = JSON.parse(window.localStorage.getItem(name));
  if (json == null) {
    storeItem('projects', defaultProjects);
  }
  return convertJsonToProject(json);
};

const addItem = (name, projectObj) => {
  const projectArr = fetchItem(name);
  projectArr.push(projectObj);
  storeItem(name, projectArr);
};

export { fetchItem, storeItem, addItem };
