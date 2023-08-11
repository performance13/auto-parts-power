function buttonClick() {
  const text = getInputText();
  addElement(text);
  clearText();
}


// доступ к input
function getInputText() {
  const input = document.querySelector(".search-txt1");
  // console.log(input);
  return input.value;
}

// доступ к ul .list
// создаем ф-ю которая добавляет элемент в ul .list через текст, который вводим в input
function addElement(text) {
  // создаем этот элемент, который нам нужен
  // то есть, создали переменную в которую поместили создание li
  const listItem = document.createElement("li");
  // теперь нужно указать где же будем создавать li - в ul
  // создаем переменную посредством innerHTML
  listItem.innerHTML = text;
  // нужно указать доступ к ul
  const list = document.querySelector(".list")
  // в переменную list необходимо вставить переменную создания элемента - добавлением li
  list.append(listItem);
}

// ф-я которая после ввода очищает поле input
function clearText() {
  // получаем доступ к input
  const input = document.querySelector(".search-txt1");
  // указываем пустую строку
  input.value = "";
}