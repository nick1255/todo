const input = document.querySelector('.input');
const list = document.querySelector('.list');

function addTask(event) {
  event.preventDefault();

  const taskValue = input.value.trim();

  if (taskValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    list.appendChild(listItem);

    input.value = '';
  }
}

document.querySelector('.form').addEventListener('submit', addTask);