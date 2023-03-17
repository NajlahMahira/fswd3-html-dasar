const notificationContainer = document.querySelector(".notification-container");
const listContainer = document.querySelector(".list-container");
const input = document.querySelector(".input-list");
const inputSubmit = document.querySelector(".button-input-submit");

const KEY = "TODOLIST";
let storeData = [];

inputSubmit.addEventListener("click", () => {
  storeData.push({
    id: Date.now(),
    text: input.value,
    finish: false
  });
  input.value = "";
  saveData();
  render();
});

function render() {
  removeListElement();
  storeData.forEach((data) => {
    const listitem = document.createElement("div");
    const text = document.createElement("div");
    const icon = document.createElement("i");

    icon.onclick = () => deleteList(data.id);

    listitem.className = "list-item";
    text.className = "list-text";
    text.innerHTML = data.text;
    icon.className = "fas fa-trash-alt delete-list";

    if(data.finish){
      listitem.style.background = "var(--primary)";
      icon.style.color = "white";
      text.style.color = "white";
    }

    listitem.appendChild(text);
    listitem.appendChild(icon);
    listContainer.appendChild(listitem);

    listitem.onclick = () => {
      if(data.finish === false){
        data.finish = true;
        listitem.style.background = "var(--primary)";
        icon.style.color = "white";
        text.style.color = "white";
      }
      else {
        data.finish = false;
        listitem.style.background = "white";
        icon.style.color = "var(--primary)";
        text.style.color = "gray";
      }

      saveData();

    }
  });
}

function removeListElement() {
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}

function deleteList(id) {
  storeData = storeData.filter(data => data.id !== id);
  saveData();
  render();
}

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(storeData));
  getData();
  render();
}

function getData() {
  storeData = JSON.parse(localStorage.getItem(KEY)) || [];
}

getData();
render();
