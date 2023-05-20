// https://www.youtube.com/watch?v=sT6TCWt1YP8&ab_channel=DearProgrammer
// второй input в master-catalog.html (Выбор запчастей по категориям) (взаимодействие с картинками)

document.querySelector('#autocomplete').addEventListener('input', filterList)

function filterList() {
  const searchPageInput = document.querySelector('#autocomplete');
  const filter = searchPageInput.value.toLowerCase();
  const brandItems = document.querySelectorAll('.parts-categories__item');

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

