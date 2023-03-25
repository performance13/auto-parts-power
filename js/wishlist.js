// 1 вариант

// let button = document.querySelectorAll('.wishlist-button');
// button.addEventListener('click', () => {
//   button.classList.toggle('active');
// });

// $(document).on('click', '.wishlist-button', function () {
// 	var fav= $(this).hasClass('simple');
//     if (!fav) {
//         $(this).addClass('simple');
//     } else {
//         $(this).removeClass('simple');
//     }
// });


// 2 вариант (работает только на одной карточке)

// let fav = document.querySelector('.wishlist-button');

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

// 3 вариант (работает на всех карточках)

function initFavs()
  {
    // Handle Favorites
    var items = document.getElementsByClassName('wishlist-button');
    for(var x = 0; x < items.length; x++)
    {
      var item = items[x];
      item.addEventListener('click', function(fn)
      {
        fn.target.closest('.wishlist-button').classList.toggle('active');
      });
    }
};
  
initFavs();