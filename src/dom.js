import Todo from './newTodo';

const body = document.getElementById('content');

const newList = (arr) => {
  const formContainer = document.createElement('div');
  body.appendChild(formContainer);
  formContainer.classList.add('form-container');

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
  todoBtn.textContent = 'add';
  todoBtn.addEventListener('click', () => {
    arr.push(new Todo(
      todoTitle.value,
      todoDescription.value,
      todoDueDate.value,
      todoPriority(),
      todoNote.value,
      todoComplete(),
    ));
  });
  listForm.appendChild(todoBtn);
};

export default newList;
