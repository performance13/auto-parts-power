// переменная, называем btns (все кнопки). С помощью document.querySelectorAll находим все эти кнопки: любой тег с этим атрибутом: data-modal-btn, неважно с каким значением будет добавлен в HTML-колекцию
let btns = document.querySelectorAll("*[data-modal-btn]")

// проходим по списку кнопок let btns и добавляем обработчик событий для каждой кнопки,- тоесть каждая кнопка должна вызывать свое собственное модальное окно, тоесть data-modal-btn вызывает data-modal-window ( data-modal-btn1 вызывает data-modal-window2 и т.д.). Поэтому нужно проверить: Используем цикл for (лучшая совместимость со старыми браузерами), но можно использовать цикл for of. Проходим циклом по всем кнопкам которые хранятся в let btns
for (let i = 0; i < btns.length; i++){
  // чтобы обратится к каждой кнопке по отдельности мы будем использовать btns и в квадратных скобках указывать i [i], тоесть на каждой итерации цикла мы будем выбирать нужную нам кнопку. Далее с помощью .addEventListener мы добавляем обработчик событий: в круглых скобках указываем событие click и анонимную функцию function, которая будет обрабатывать данное событие
  btns[i].addEventListener('click', function () {
    //создаем переменную name и в нее записываем btns[i] (тоесть текущая кнопка) .getAttribute и передаем название атрибута этой кнопки ('data-modal-btn'). Тоесть в переменную name запишется значение modal-request. Тоесть ищем не по id или class, а просто проверяем чтобы оба значения совпадали
    let name = btns[i].getAttribute('data-modal-btn');
    // дальше находим модальное окно у которого будет точно такое же значение будет записано в атрибут data-modal-window. Создаем переменную let modal. В нее поместим нужное нам модальное окно data-modal-window. Так как мы знаем что к одной кнопке привязано одно окно мы используем document.querySelector и он находит самый первый элемент в древе, который удовлетворяет селектору указанному в круглых скобках, а именно ("[data-modal-window]")- в квадратных скобках указываем [data-modal-window] и нам нужно здесь указать значение равное переменной name. Тоесть найти модальное окно, у которого значение такое же как у кнопки (data-modal-window="modal-request >>> data-modal-btn="modal-request) для того чтобы организовать эту связь, тогда одна (конкретная кнопка) будет привязана к одному (конкретному) модальному окну и их можно сделать много. Значит добавляем переменную name в качестве значения с помощью шаблонных строк или конкатенацию
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    // после того как нашли модальное окно, берем его, указываем ему.style.display со значением block. После этого окно появляется по нажатии кнопки
    modal.style.display = "block";
    // создадим переменную close  и найдем в ней кнопку(крестик). Ищем именно в нужном modal. В этой переменной хранится модальное окно на текущей итерации цикла и с помощью .querySelector, так знаем что в одном модальном окне будет только один крестик. Указываем class .modal__close. В итоге в переменной let close хранится крестик от текущего окна. Находим крестик в текущем окне, а работаем в цикле for
    let close = modal.querySelector(".modal__close");
    //  теперь к переменной let close добавляем обработчик событий прямо внутри цикла событие click и анонимную ф-ю, которая будет делать - устанавливать display = "none" для текущего модального окна
    close.addEventListener('click', function () {
      modal.style.display = "none";
    })
  })
}
// вне цикла создаем функционал закрытия модального окна по нажатию на пустую область. В ф-ю передаем аргумент event, с помощь которого мы можем отследить разные элементы строаницы.
window.onclick = function (e) {
  // пишем if условие - это переменная е .target.hasAttribute - проверяем нажатый элемент на наличие атрибута с помощью .target указываем что это именно тот элемент на котором выполнен click (это и есть кнопка)- проверяем даный атрибут в  кнопке и указываем в кавычках данный атрибут ('data-modal-window')
  if (e.target.hasAttribute('data-modal-window')) {
    // в таком случае создаем переменную let modals (тоесть все наши модальные окна) с помощью document.querySelectorAll выбираем здесь все модальные окна ("*[data-modal-window]") и 
    let modals = document.querySelectorAll("*[data-modal-window]");
    // также с помощью цикла for перебираем
    for (let i = 0; i < modals.length; i++) {
      // и указываем окну на текущей итерации display = "none" . Скрываем окно/все окна
      modals[i].style.display = "none";
    }
  }
  
}



