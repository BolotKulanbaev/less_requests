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

//получаем нужные для добавления элементы
let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
// console.log(inpAdd, btnAdd);
// навесили событие на кнопку "сохранить"
btnAdd.addEventListener("click", async function () {
  // собираем объект для добавления в дб.жсон
  let newTodo = {
    todo: inpAdd.value,
  };
  // console.log(newTodo);

  // проверка на заполненность инпута и осьтанавливаем код с помощью return, чтоб пост запрос не выполнился
  if (newTodo.todo.trim() === "") {
    alert("idi na huy");
    return;
  }
  //запарос для добавления
  await fetch(API, {
    method: "POST", //указывавем метод
    body: JSON.stringify(newTodo), // указываем что именно нужно запостить
    headers: {
      "Content-type": "application/json; charset=utf-8", // кодировка
    },
  });
  //очищаем инпут после добавления
  inpAdd.value = "";
  //чтоб добавленный таск сразу отобразился в листе вызываем функцию, которая выполнияет отображение
  getTodos();
});

//read
//получаем элеминет, чоб в нем отобразить все таски
let list = document.getElementById("list");
//проверяем в консоли, чтоб убедиться, что в переменной лист сейчас НЕ пусто
console.log(list);
//функция для получения всех тасков и отображения их в div#list

//async await нужен здесь, чтоб при отправке запроса мы сначала полусили данные и толлько пототм записали все в переменную response, иначе (если мы не дождемся) туда запишется pending( состояние промиса, который еще не выполнен)
async function getTodos() {
  let response = await fetch(API) //если не указать медот запроса, то по умолчанию это get запрос
    .then(res => res.json()) // переводим все в json формат
    .catch(err => console.log(err)); // отловили ошибку
  console.log(response);
  // очищаем div#list, чтоб список тасков корректно отображался и не хранил там предыдущие html-элементы со старыми данными
  list.innerHTML = "";
  //перебираем полученный из дб.жсон массив и для каждого объекта из этого массива создаем div и задаем ему содержимое через метод innerHTML, каждый созданынй элемент аппендим в div#list
  response.forEach(item => {
    let newElem = document.createElement("div");
    newElem.innerHTML = `<span>${item.todo}</span>`;
    list.append(newElem);
  });
}
// вызываем функцию, чтоб как только откроется страница что то было отображено
getTodos();
