const baseUrl = "https://crudcrud.com/api/";
const apiKey = "89a41bab89444e5f9b8c86e72b1f5ab7";
const url = baseUrl + apiKey;

let todos = [];

loadTodos();

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (!inputValue) {
    alert("Todo tidak boleh kosong!");
    return;
  }

  const todo = {
    title: inputValue,
    checked: false,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((todo) => {
      createList(todo);
    });
}

function createList(todo) {
  const li = document.createElement("Li");
  li.dataset.id = todo._id;
  li.innerText = todo.title;
  li.onclick = checkTodo;
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = closeTodo;
  span.appendChild(txt);

  if (todo.checked) {
    li.classList.toggle("checked");
  }
  li.appendChild(span);
  document.getElementById("myUL").appendChild(li);
}

function closeTodo(e) {
  e.stopPropagation();
  const id = this.parentElement.dataset.id;
  let confirmed = confirm("Apakah anda yakin ingin menghapus todo ini?");
  if (confirmed) {
    if (todos !== null) {
      fetch(url + "/" + id, {
        method: "DELETE",
      }).then((response) => {
        const index = todos.findIndex((todo) => todo._id === id);
        todos.splice(index, 1);
        this.parentElement.remove();
      });
    }
  }
}

function checkTodo() {
  const id = this.dataset.id;
  if (todos !== null) {
    const index = todos.findIndex((todo) => todo._id === id);
    const todo = todos[index];
    console.log(todo);
    if (todo) {
      todo.checked = !todo.checked;

      fetch(url + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
          checked: todo.checked,
        }),
      })
        .then((response) => response.json())
        .then((todo) => {
                todos[index] = todo;
            })
        }
    }
    this.classList.toggle("checked");
}

function loadTodos() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            todos = data;
            todos.forEach((todo) => {
                createList(todo);
            });
        });
}
