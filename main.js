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

let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
// console.log(inpAdd, btnAdd);
btnAdd.addEventListener("click", function () {
  let newTodo = {
    todo: inpAdd.value,
  };
  // console.log(newTodo);
  fetch(API, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
});
