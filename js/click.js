
// живой поиск на js
// https://www.youtube.com/watch?v=vV4cUAZvEy4&t=54s&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE
// не сработал
// document.querySelector('.category-search__input').oninput = function () {
//   let val = this.value.trim();
//   let allItems = document.querySelectorAll('.parts-categories__list');

//   if (val != '') {
//     allItems.forEach(function (elem) {
//       if (elem.innerText.search(val) == -1) {
//         elem.classList.add('hidden');
//         elem.innerHTML = elem.innerText;
//       }
//       else {
//         elem.classList.remove('hidden');
//         let str = elem.innerText;
//         elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//       }
//     });
//   }
//   else {
//     allItems.forEach(function (elem) {
//       elem.classList.remove('hidden');
//       elem.innerHTML = elem.innerText;
//     });
//   }
// }

// function insertMark(str, pos, len) {
//   return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len);
// }

let formAuto = document.forms[0];
console.log('Form "Поиск по марке автомобиля":', formAuto);

let formCategory = document.forms[1];
console.log('Form "Поиск по категории запчастей":', formCategory)



// обнуление символов в input кликом во всей секции - ! но не возвращает изначальное состояние секции   start 
let clearFormAuto = document.querySelector('.master-catalog-section');
clearFormAuto.addEventListener('click', function () {
  formAuto.reset();
});


let clearFormCategory = document.querySelector('.catalog-section');
clearFormCategory.addEventListener('click', function () {
  formCategory.reset();
});
// обнуление символов в input кликом во всей секции - ! но не возвращает изначальное состояние секции   end



