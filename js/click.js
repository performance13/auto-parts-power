let formAuto = document.forms[0];
console.log('Form "Поиск по марке автомобиля":', formAuto);

let formCategory = document.forms[1];
console.log('Form "Поиск по категории запчастей":', formCategory)



// обнуление символов в input кликом во всей секции - ! но не возвращает изначальное состояние секции start 
let clearFormAuto = document.querySelector('.master-catalog-section');

clearFormAuto.addEventListener('click', function () {
  formAuto.reset();
});


let clearFormCategory = document.querySelector('.catalog-section');

clearFormCategory.addEventListener('click', function () {
  formCategory.reset();
});
// обнуление символов в input кликом во всей секции - ! но не возвращает изначальное состояние секции end

// живой поиск на js
// получаем input
document.querySelector('.form-search__input').oninput = function () {
  let val = this.value.trim();
  let allItems = document.querySelectorAll('.brand__list li');
  if (val != '') {
    allItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hidden');
      }
      else {
        elem.classList.remove('hidden');
      }
    });
  }
}