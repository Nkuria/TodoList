import Todo from './newTodo';
import Project from './project';
import { fetchItem, addItem, storeItem } from './localStorage';

const body = document.getElementById('content');

const headingContainer = document.createElement('div');
headingContainer.classList.add('heading-container');
const heading = document.createElement('h3');
heading.textContent = 'ToDo List';
headingContainer.appendChild(heading);
body.appendChild(headingContainer);

const bodyContainer = document.createElement('div');
bodyContainer.classList.add('body-container');
body.appendChild(bodyContainer);


const bodyLeft = document.createElement('div');
bodyLeft.classList.add('body-left');
const bodyRight = document.createElement('div');
bodyRight.classList.add('body-right');

bodyContainer.appendChild(bodyLeft);
bodyContainer.appendChild(bodyRight);

const updateTodoItem = (domObj, todoObj) => {
  const oldForm = document.getElementById('edit-todo-form');
  if (oldForm != null) {
    oldForm.remove();
  }
  domObj.title.innerHTML = todoObj.title;
  domObj.description.innerHTML = todoObj.description;
  domObj.dueDate.innerHTML = todoObj.dueDate;
  domObj.notes.innerHTML = todoObj.notes;
  domObj.priority.innerHTML = todoObj.priority;
  domObj.checklist.innerHTML = todoObj.checklist;
};

const displayEditForm = (domObj, obj) => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  formContainer.classList.add('modal');
  formContainer.id = 'edit-todo-form';
  bodyRight.appendChild(formContainer);

  const listForm = document.createElement('form');
  listForm.classList.add('list-form');
  formContainer.appendChild(listForm);

  const todoTitle = document.createElement('input');
  todoTitle.placeholder = 'Enter Title';
  todoTitle.value = obj.title;
  listForm.appendChild(todoTitle);

  const todoDescription = document.createElement('input');
  todoDescription.placeholder = 'Enter Description';
  todoDescription.value = obj.description;
  listForm.appendChild(todoDescription);

  const todoDueDate = document.createElement('input');
  todoDueDate.type = 'date';
  todoDueDate.value = obj.dueDate;
  listForm.appendChild(todoDueDate);

  const labelHigh = document.createElement('label');
  labelHigh.textContent = 'Urgent';
  listForm.appendChild(labelHigh);

  const highPriority = document.createElement('input');
  highPriority.type = 'radio';
  highPriority.name = 'priority';
  highPriority.value = 'high';
  if (obj.priority === highPriority.value) {
    highPriority.checked = true;
  }
  listForm.appendChild(highPriority);

  const labelMedium = document.createElement('label');
  labelMedium.textContent = 'important';
  listForm.appendChild(labelMedium);

  const mediumPriority = document.createElement('input');
  mediumPriority.type = 'radio';
  mediumPriority.name = 'priority';
  mediumPriority.value = 'medium';
  if (obj.priority === mediumPriority.value) {
    mediumPriority.checked = true;
  }
  listForm.appendChild(mediumPriority);

  const labelLow = document.createElement('label');
  labelLow.textContent = 'normal';
  listForm.appendChild(labelLow);

  const lowPriority = document.createElement('input');
  lowPriority.type = 'radio';
  lowPriority.name = 'priority';
  lowPriority.value = 'low';
  if (obj.priority === lowPriority.value) {
    lowPriority.checked = true;
  }
  listForm.appendChild(lowPriority);

  const todoNote = document.createElement('input');
  todoNote.placeholder = 'Add Note';
  todoNote.value = obj.notes;
  listForm.appendChild(todoNote);

  const completeLabel = document.createElement('label');
  completeLabel.textContent = 'Completed';
  listForm.appendChild(completeLabel);

  const todoCheckList = document.createElement('input');
  todoCheckList.type = 'checkbox';
  todoCheckList.checked = (obj.checklist === 'completed');
  listForm.appendChild(todoCheckList);

  const todoPriority = () => {
    if (highPriority.checked === true) {
      return highPriority.value;
    } if (mediumPriority.checked === true) {
      return mediumPriority.value;
    }
    return lowPriority.value;
  };

  const todoComplete = () => ((todoCheckList.checked === true) ? 'completed' : 'pending');

  const saveTodoBtn = document.createElement('button');
  saveTodoBtn.type = 'button';
  saveTodoBtn.textContent = 'Save';

  saveTodoBtn.addEventListener('click', () => {
    obj.edit(
      todoTitle.value,
      todoDescription.value,
      todoDueDate.value,
      todoPriority(),
      todoNote.value,
      todoComplete(),
    );

    updateTodoItem(domObj, obj);
  });
  listForm.appendChild(saveTodoBtn);
};

const displayTodoItems = (arr, project, projectArr, projectIndex) => {
  console.log(projectArr);
  console.log(projectIndex);
  const oldTodos = document.getElementById('todo-wrap');
  if (oldTodos != null) {
    oldTodos.remove();
  }
  const todoWrap = document.createElement('div');
  todoWrap.classList.add('todo-wrap');
  todoWrap.id = 'todo-wrap';

  const todoItemMaker = (parent, obj, index, project) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-items');

    const todoTitle = document.createElement('h3');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = obj.title;

    const todoDesc = document.createElement('p');
    todoDesc.classList.add('todo-desc');
    todoDesc.textContent = obj.description;

    const todoDueDate = document.createElement('p');
    todoDueDate.classList.add('todo-date');
    todoDueDate.textContent = obj.dueDate;

    const todoNotes = document.createElement('p');
    todoNotes.classList.add('todo-notes');
    todoNotes.textContent = obj.notes;

    const todoPriority = document.createElement('div');
    todoPriority.classList.add('todo-priority');
    todoPriority.textContent = obj.priority;

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');


    const highPriority = document.createElement('button');
    highPriority.innerHTML = 'Change to high';
    highPriority.classList.add('high-priority');
    highPriority.addEventListener('click', () => {
      obj.changePriority(todoPriority, 'high');
    });

    const mediumPriority = document.createElement('button');
    mediumPriority.innerHTML = 'Change to Medium';
    mediumPriority.classList.add('medium-priority');
    mediumPriority.addEventListener('click', () => {
      obj.changePriority(todoPriority, 'medium');
    });

    const normalPriority = document.createElement('button');
    normalPriority.innerHTML = 'Change to Low';
    normalPriority.classList.add('high-priority');
    normalPriority.addEventListener('click', () => {
      obj.changePriority(todoPriority, 'low');
    });

    priorityContainer.appendChild(highPriority);
    priorityContainer.appendChild(mediumPriority);
    priorityContainer.appendChild(normalPriority);


    const todoCheckList = document.createElement('div');
    todoCheckList.classList.add('todo-checklist');
    todoCheckList.textContent = obj.checklist;

    const changecompletion = document.createElement('button');
    changecompletion.innerHTML = 'Mark as completed';
    changecompletion.classList.add('change-completion');
    changecompletion.addEventListener('click', () => {
      obj.changeCompletionBtn(todoCheckList);
    });

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'edit';
    editBtn.type = 'button';
    editBtn.classList.add('edit-todo');
    editBtn.addEventListener('click', () => {
      displayEditForm({
        title: todoTitle,
        description: todoDesc,
        dueDate: todoDueDate,
        notes: todoNotes,
        priority: todoPriority,
        checklist: todoCheckList,
      }, obj);
    });

    const deleteTodoBtn = document.createElement('button');

    deleteTodoBtn.innerHTML = 'Delete ToDo';
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.addEventListener('click', () => {
      project.deleteTodo(index);
      projectArr[projectIndex] = project;
      storeItem('projects', projectArr);
      todoItem.remove();
    });

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDesc);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoNotes);
    todoItem.appendChild(todoPriority);
    todoItem.appendChild(priorityContainer);
    todoItem.appendChild(todoCheckList);
    todoItem.appendChild(changecompletion);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteTodoBtn);

    parent.appendChild(todoItem);
  };


  for (let i = 0; i < arr.length; i += 1) {
    const obj = arr[i];
    const index = i;
    todoItemMaker(todoWrap, obj, index, project);
  }

  bodyRight.appendChild(todoWrap);
};


const clearElement = (id) => {
  const ele = document.getElementById(id);
  ele.innerHTML = '';
};

const newList = (project, arr, index) => {
  const oldForm = document.getElementById('form-container');
  if (oldForm != null) {
    oldForm.remove();
  }
  const formContainer = document.createElement('div');
  bodyRight.prepend(formContainer);
  formContainer.classList.add('form-container');
  formContainer.id = ('form-container');

  const listForm = document.createElement('form');
  listForm.classList.add('list-form');
  formContainer.appendChild(listForm);

  const todoTitle = document.createElement('input');
  todoTitle.placeholder = 'Enter Title';
  listForm.appendChild(todoTitle);

  const todoDescription = document.createElement('input');
  todoDescription.placeholder = 'Enter Description';
  listForm.appendChild(todoDescription);

  const todoDueDate = document.createElement('input');
  todoDueDate.type = 'date';
  todoDueDate.placeholder = 'Enter Description';
  listForm.appendChild(todoDueDate);

  const labelHigh = document.createElement('label');
  labelHigh.textContent = 'Urgent';
  listForm.appendChild(labelHigh);

  const highPriority = document.createElement('input');
  highPriority.type = 'radio';
  highPriority.name = 'priority';
  highPriority.value = 'high';
  listForm.appendChild(highPriority);

  const labelMedium = document.createElement('label');
  labelMedium.textContent = 'important';
  listForm.appendChild(labelMedium);

  const mediumPriority = document.createElement('input');
  mediumPriority.type = 'radio';
  mediumPriority.name = 'priority';
  mediumPriority.value = 'medium';
  listForm.appendChild(mediumPriority);

  const labelLow = document.createElement('label');
  labelLow.textContent = 'normal';
  listForm.appendChild(labelLow);

  const lowPriority = document.createElement('input');
  lowPriority.type = 'radio';
  lowPriority.name = 'priority';
  lowPriority.value = 'low';
  listForm.appendChild(lowPriority);

  const todoNote = document.createElement('input');
  todoNote.placeholder = 'Add Note';
  listForm.appendChild(todoNote);

  const completeLabel = document.createElement('label');
  completeLabel.textContent = 'Completed';
  listForm.appendChild(completeLabel);

  const todoCheckList = document.createElement('input');
  todoCheckList.type = 'checkbox';
  listForm.appendChild(todoCheckList);

  const todoPriority = () => {
    if (highPriority.checked === true) {
      return highPriority.value;
    } if (mediumPriority.checked === true) {
      return mediumPriority.value;
    }
    return lowPriority.value;
  };

  const todoComplete = () => ((todoCheckList.checked === true) ? 'completed' : 'pending');

  const todoBtn = document.createElement('button');
  todoBtn.type = 'button';
  todoBtn.textContent = '+';
  todoBtn.addEventListener('click', () => {
    project.addTodo(new Todo(
      todoTitle.value,
      todoDescription.value,
      todoDueDate.value,
      todoPriority(),
      todoNote.value,
      todoComplete(),
    ));
    arr[index] = project;
    storeItem('projects', arr);
    clearElement('todo-wrap');
    displayTodoItems(project.todos, project, arr, index);
    formContainer.innerHTML = '';
  });
  listForm.appendChild(todoBtn);
};

const showFormBtn = (project, arr, index) => {
  const showBtn = document.createElement('button');
  showBtn.type = 'button';
  showBtn.textContent = 'Create New ToDo';
  showBtn.addEventListener('click', () => {
    newList(project, arr, index);
  });
  bodyRight.appendChild(showBtn);
};


const displayProjects = (arr) => {
  const oldForm = document.getElementById('project-form-container');
  if (oldForm != null) {
    oldForm.remove();
  }
  const oldProjects = document.getElementById('project-wrap');
  if (oldProjects != null) {
    oldProjects.remove();
  }

  const projectWrap = document.createElement('div');
  projectWrap.classList.add('project-wrap');
  projectWrap.id = 'project-wrap';

  const projectItemMaker = (parent, project, index) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-items');
    projectItem.addEventListener('click', () => {
      showFormBtn(project, arr, index);
      displayTodoItems(project.todos, project, arr, index);
    });

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('todo-title');
    projectTitle.textContent = project.title;

    projectItem.appendChild(projectTitle);

    parent.appendChild(projectItem);
  };

  for (let i = 0; i < arr.length; i += 1) {
    const project = arr[i];
    projectItemMaker(projectWrap, project, i);
  }

  bodyLeft.appendChild(projectWrap);
};

const newProject = () => {
  const projectFormContainer = document.createElement('div');
  projectFormContainer.classList.add('project-form-container');
  projectFormContainer.id = 'project-form-container';
  bodyLeft.appendChild(projectFormContainer);


  const projectForm = document.createElement('form');
  projectForm.classList.add('project-form');
  projectFormContainer.appendChild(projectForm);

  const projectTitle = document.createElement('input');
  projectTitle.placeholder = 'Project Title';
  projectForm.appendChild(projectTitle);

  const addProjectBtn = document.createElement('button');
  addProjectBtn.innerHTML = 'Create Project';
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.type = 'button';
  projectForm.appendChild(addProjectBtn);

  addProjectBtn.addEventListener('click', () => {
    addItem('projects', new Project(projectTitle.value));
    displayProjects(fetchItem('projects'));
  });
};

const newProjectBtn = document.createElement('button');
newProjectBtn.classList.add('new-project-button');
newProjectBtn.innerHTML = 'New Project';
bodyLeft.appendChild(newProjectBtn);
newProjectBtn.addEventListener('click', () => {
  newProject();
});

export { newList, displayTodoItems, displayProjects };
