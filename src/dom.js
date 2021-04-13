const body = document.getElementById('content');

const newList = () => {
const formContainer = document.createElement('div');
body.appendChild(formContainer);
formContainer.classList.add('form-container');

const listForm = document.createElement('form');
listForm.classList.add('list-form');
formContainer.appendChild(listForm);

 const todoTitle = document.createElement('input');
 todoTitle.placeholder = "Enter Title";
 listForm.appendChild(todoTitle);

 const todoDescription = document.createElement('input');
 todoDescription.placeholder = "Enter Description";
 listForm.appendChild(todoDescription);

 const todoDueDate = document.createElement('input');
 todoDueDate.type = 'date';
 todoDueDate.placeholder = "Enter Description";
 listForm.appendChild(todoDueDate);



}

export default newList;