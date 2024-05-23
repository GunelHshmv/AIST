const done_btn = document.getElementById('done_btn');
const add_btn = document.getElementById('add_btn');
const todo = document.getElementById('todo');
const message = document.getElementById('message');
const task_Inp = document.getElementById('task_Inp');

const remove = (e) => {
  if (e.target.textContent === "Remove") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    updateLocalStorage();
  }
  message.style.display = 'block';
};

const createTask = (taskText, isChecked) => {
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo_item';
  todoDiv.id = new Date().getTime();

  const leftDiv = document.createElement('div');
  leftDiv.className = 'left';

  const checkbox_Inp = document.createElement('input');
  checkbox_Inp.className = 'checkbox_Inp';
  checkbox_Inp.id = 'checkbox_Inp';
  checkbox_Inp.checked = isChecked;
  checkbox_Inp.type = 'checkbox';
  checkbox_Inp.addEventListener('click', () => {
    if (checkbox_Inp.checked) {
      done_btn.textContent = 'Done';
      console.log(checkbox_Inp.checked);
    } else {
      done_btn.textContent = 'Waiting';
      console.log(checkbox_Inp.checked);
    }
    updateLocalStorage();
  });

  const text = document.createElement('p');
  text.textContent = taskText;
  leftDiv.append(checkbox_Inp, text);

  const rightDiv = document.createElement('div');
  rightDiv.className = 'right';
  const done_btn = document.createElement('button');
  done_btn.className = 'done_btn';
  done_btn.textContent = isChecked ? 'Done' : 'Waiting';

  const remove_btn = document.createElement('button');
  remove_btn.className = 'remove_btn';
  remove_btn.textContent = 'Remove';
  remove_btn.addEventListener('click', remove);
  rightDiv.append(done_btn, remove_btn);

  todoDiv.append(leftDiv, rightDiv);
  todo.appendChild(todoDiv);
};

const updateLocalStorage = () => {
  const tasks = [];
  const todoItems = document.querySelectorAll('.todo_item');
  todoItems.forEach(item => {
    const text = item.querySelector('p').textContent;
    const isChecked = item.querySelector('.checkbox_Inp').checked;
    tasks.push({ text, isChecked });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    createTask(task.text, task.isChecked);
  });
};

add_btn.addEventListener('click', () => {
  if (task_Inp.value !== '') {
    message.style.display = 'none';
    createTask(task_Inp.value, false);
    updateLocalStorage();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
});
