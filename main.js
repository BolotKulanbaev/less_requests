/*
ВИДЫ ЗАПРОСОВ:
POST - ДОБАВЛЕНИЕ ДАННЫХ
PUT - ПОЛНАЯ ЗАМЕНА ДАННЫХ
PATCH - ЧАСТИЧНАЯ ЗАМЕНА ДАННЫХ
DELETE - УДАЛЕНИЕ
GET - ПОЛУЧЕНИЕ ДАННЫХ
*/

/*
КОМАНДА ДЛЯ ЗАПУСКА JSON-SERVER
JSON-SERVER -W DB.JSON -P 8000

*/

/*
CRUD - Create(post) Read(get) Update(put/patch) Delete(delete)
*/

const API = "http://localhost:8000/todos";

//Creat

let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
// console.log(inpAdd, btnAdd);
btnAdd.addEventListener("click", async function () {
  let newTodo = {
    todo: inpAdd.value,
  };
  // console.log(newTodo);
  if (newTodo.todo.trim() === "") {
    alert("idi na huy");
    return;
  }
  await fetch(API, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
  inpAdd.value = "";
  getTodos();
});

//read
let list = document.getElementById("list");
console.log(list);

async function getTodos() {
  let response = await fetch(API)
    .then(res => res.json())
    .catch(err => console.log(err));
  console.log(response);
  list.innerHTML = "";
  response.forEach(item => {
    let newElem = document.createElement("div");
    newElem.innerHTML = `<span>${item.todo}</span>`;
    list.append(newElem);
  });
}
getTodos();
