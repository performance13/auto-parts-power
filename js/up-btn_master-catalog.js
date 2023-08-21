// back-to-top start
function backToTop() {
  // доступ к кнопке
  let button = $('.up-btn');
  // на объкт window навешиваем событие scroll
  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 2200) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  
  // вешаем на кнопку событие click
  button.on('click', (e) => {
    // при нажатии отменяем действие по умолчанию
    e.preventDefault();
    // получение элемента html и анимировано за 1 сек изменим свойство scrollTop на 0
    $('html').animate({ scrollTop: 0 }, 1000);
  })
}

backToTop();
// back-to-top end