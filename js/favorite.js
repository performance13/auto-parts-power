let button = document.querySelectorAll('.wishlist-button');
button.addEventListener('click', () => {
  button.classList.toggle('active');

})

// $(document).on('click', '.favorites', function () {
// 	var fav= $(this).hasClass('simple');
//     if (!fav) {
//         $(this).addClass('simple');
//     } else {
//         $(this).removeClass('simple');
//     }
// });

// let fav = document.querySelector('.wishlist');

// fav.addEventListener('click', () => {
//   if (fav.classList.contains('no-active')) {
//     console.log(fav.classList.contains('no-active'))
//     fav.classList.add('active')
//     fav.classList.remove('no-active')
//   } else {
//     fav.classList.add('no-active')
//     fav.classList.remove('active')
//   }
// });

