// 1 вариант - работает только на первую карточку

// // найти элементы на сранице по data-атрибуту для взаимодействия
// const btnMines = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

// // отслеживаем click на кнопке btnMines
// btnMines.addEventListener('click', function () {
//   // проверяем чтобы счетчик был больше 1
//   if (parseInt(counter.innerText) > 1) {
//   // если счетчик больше чем 1 то тогда изменяем текст в счетчике уменьшая его на 1
//   counter.innerText = --counter.innerText;
//   }
// });

// // отслеживаем click на кнопке btnPlus
// btnPlus.addEventListener('click', function () {
//   // изменяем текст в счетчике увеличивая его на 1
//   counter.innerText = ++counter.innerText;
// });



// 2 вариант
// отслеживаем любой клик на странице и далее проверяем где этот клик произошел. Если этот клик произошел по кнопке минус либо плюс мы будем это проверять и будем опредилять был ли клик сделан по кнопке минус или по кнопке плюс или нет. Если клик сделан по одной из этих кнопок то тогда делаем определенные действия. А именно мы найдем родителя в котором лежит даная кнопка. Далее от найденого родителя найдем элемент data-counter и изменим именно его (важно изменять именно тот счетчик который находится в группе кнопок по который сделан клик).

// добавляем прослушку на всем окне
    // отловили клик по окну 
window.addEventListener('click', function (event) {
  // console.log('click window');

      // теперь нужно отделить только клики, которые нас интересуют. Для этого проверяем тот элемент по которому мы кликнули. В момент когда происходит событие (событие click) мы можем определить параметр event. И этот параметр будет содержать в себе данные сведения свойства того события, которое произошло (click), и мы сможем получить значение того элемента по которому мы кликнули - мы можем понять где же именно был совершен клик.
  
  // console.dir(event.target);
  // console.log(event.target.dataset.action);

  // переменная counter для всей ф-и/ Объявляем переменную в глобальной области видимости
  let counter; 

  // перед тем как начать искать обертку счетчика нам стоит проверить действительно ли мы кликнули внутри счетчика. Здесь пишем проверку : действительно ли мы кликнули по кнопке минус либо кнопке плюс,- и только тогда будем искать  ее родителя.
  // проверяем клик строго по кнопкам Плюс либо Минус

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // console.log(true);
    
        // находим обертку счетчика
        // нужно определить тот конкретный счетчик, который нужен в данный момент. Если кликаем на минус,- поднимаемся до его родителя с классом counter-wrapper и от родителя внутри находим элемент с атрибутом data-counter.
    const counterWrapper = event.target.closest('.counter-wrapper');
    // console.log(counterWrapper);

        // находим див с числом счетчика
     counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter);
  }

  // проверяем является ли элемент по которому совершен клик кнопкой Плюс
  if (event.target.dataset.action === 'plus') {
    // console.log('PLUS')
    counter.innerText = ++counter.innerText;
  }

    // проверяем является ли элемент по которому совершен клик кнопкой Минус
    if (event.target.dataset.action === 'minus') {
      // console.log('MINUS')
      // const counterWrapper = event.target.closest('.counter-wrapper');
      // console.log(counterWrapper);
      // const counter = counterWrapper.querySelector('[data-counter]');
      // console.log(counter);

      if (parseInt(counter.innerText) > 1) {
        // изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
      }
  }
});



