const listElem = document.querySelector(".list");

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderTasks = tasksList => {
  console.log("render");
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", index);
      checkbox.checked = done;

      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};


renderTasks(tasks)

// 1. event to the element
// 2. create event handlers

const createBtnElement = document.querySelector('.create-task-btn')
// при клике на кнопку вызывать функцию и навешать ее

// algo
// 1. получить данные с нпута. те данные что ввел юзер. get data
// 2. creat task obj, add to array
// 3. re-render

// input obj
// output undefined
function onCreateTask(event) {
  // console.log(event);
  const inputElement = document.querySelector('.task-input');
  // console.dir(inputElement);
  const { value } = inputElement;
  // console.log(value);

  tasks.push({
    text: value,
    done: false,
  })

  renderTasks(tasks)
}

// WEB FLOW
// 1. (get data) 
// достаешь какие-то данные, которые отрисовываешь на странице

// 2. (render) 
// сама отрисовка. достали данные -> отрисовали 

// 3. (update data) 
// из-за того, что страницы динамические, данные могут поменятся. часто надо обновлять данные !!! не обновлять и не трогать DOM !!! нужна отдельная ф-ция, которая занимается конкретно рендером

// 4. (re-render) 
// перерисовать страницу исходя из обновленных данных. внес-отрисовал-внес-отрисовал

// input: string callback
// output: undefined
createBtnElement.addEventListener('click', onCreateTask);

// algo
// 1. check if clicked on checkbox
// 2. по айди найти . find task whare clicked
// 3. undate task
// 4. re-rend


// при любом клике на чекбокс срабатывает эта ф-ция
function onUpdateTaskHandler(event) {
  // если type не checkbox(class), то не срабатывает
  console.log(event.target);
  console.log(event.target.classList);
  
  if (!event.targer.classList.contains('list__item-checkbox')) {
    return;
  }

  console.log('checkbox is clicked');
  console.log(event.target.dataset);
  // TODO
}


listElem.addEventListener("click", onUpdateTaskHandler);
