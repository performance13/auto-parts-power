
//https://www.youtube.com/watch?v=sT6TCWt1YP8&ab_channel=DearProgrammer
// первый input в master-catalog.html (Поиск по марке автомобиля)

document.querySelector('#search-model__input').addEventListener('input', filterList)

function filterList() {
  const searchPageInput = document.querySelector('#search-model__input');
  const filter = searchPageInput.value.toLowerCase();
  const brandItems = document.querySelectorAll('.brand__item');

  brandItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLocaleLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    }
    else {
      item.style.display = 'none';
    }
  });
}

