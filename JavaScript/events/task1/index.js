'use strict';

const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  console.log('render');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);
// 1.add event to the element
// 2.create event handlers

const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');
// input: event(obj)
// output:undefined
// algo
// 1.get data
// 2.create task obj, add to array
// 3.re-render

function onCreateTask(event) {
  console.log(event);

  console.dir(inputElem);

  const value = inputElem.value;

  console.log(value);

  tasks.push({
    text: value,
    done: false,
  });

  renderTasks(tasks);
}

// WEB FLOW
// 1.get data
// 2.render
// 3.update data, don't update DOM !!!!!
// 4.re-render

// input: string, callback
// output:undefined
createBtnElem.addEventListener('click', onCreateTask);

// algo
// 1.check if click checkbox
// 2.find task where clicked
// 3.update task
// 4.re-render

function onUpdateTask(event) {
  console.dir(event.target);
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  console.log('checkbox is click');
  console.log(event.target.dataset.id);
}

listElem.addEventListener('click', onUpdateTask);
