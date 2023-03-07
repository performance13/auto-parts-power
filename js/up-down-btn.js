// 1 вариант

// var go_down = jQuery('body');
// jQuery(function() {
//   $("#Go_Top").hide().removeAttr("href");
//   if ($(window).scrollTop() >= "700") $("#Go_Top").fadeIn("slow")
//   var scrollDiv = $("#Go_Top");
//   $(window).scroll(function() {
//    if ($(window).scrollTop() <= "700") $(scrollDiv).fadeOut("slow")
//    else $(scrollDiv).fadeIn("slow")
//   });
//   $("#Go_Bottom").hide().removeAttr("href");
//   if ($(window).scrollTop() <= go_down.height()-"999") $("#Go_Bottom").fadeIn("slow")
//   var scrollDiv_2 = $("#Go_Bottom");
//   $(window).scroll(function() {
//    if ($(window).scrollTop() >= go_down.height()-"999") $(scrollDiv_2).fadeOut("slow")
//    else $(scrollDiv_2).fadeIn("slow")
//   });
//   $("#Go_Top").click(function() {
//    $("html, body").animate({scrollTop: 0}, "slow")
//   })
//   $("#Go_Bottom").click(function() {
//    $("html, body").animate({scrollTop: go_down.height()}, "slow")
//   })
// });

// html:
      // <a class="go-btn-link" href='#' id='Go_Top'>
      //  <svg class="go-btn" width="30">
      // <use href="./images/symbol-defs.svg#icon-pointer-top"></use>
      // </svg>
      // </a>
      // <a class="go-btn-link" href='#' id='Go_Bottom'>
      // <svg class="go-btn" width="30">
      // <use href="./images/symbol-defs.svg#icon-pointer-down"></use>
      // </svg>
      // </a>

      
// 2 вариант

/* up-down-btn start  */
(function() {
  'use strict';

  var upDownBtn = document.querySelector('.up-down-btn');
  var check;

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      upDownBtn.classList.add('up-down-btn-show');
      upDownBtn.innerHTML = '&#8679;';
      upDownBtn.setAttribute('title', 'Наверх');
      check = false;
    }
    if (scrolled === 0) {
      upDownBtn.innerHTML = '&#8681;';
      upDownBtn.setAttribute('title', 'Вниз');
      check = true;
    }
  }

  function backToTop() {
    upDownBtn.classList.add('up-down-btn-disabled');
    if (!check) {
      (function goTop() {

        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -100);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove('up-down-btn-disabled');
        }

      })();
      return;

    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 100);
          setTimeout(goBottom, 0);
        } else {
          upDownBtn.classList.remove('up-down-btn-disabled');
        }

      })();
      return;
    }

  }

  window.addEventListener('scroll', trackScroll);
  upDownBtn.addEventListener('click', backToTop);
})();
/* up-down-btn end  */


/* visibility-up-down-btn start  */
$(function () {
$(window).scroll(function(){ 
 
    if ($(this).scrollTop() < 5500 && $(this).scrollTop() > 100) {
           $('#visibility-up-down-btn').fadeIn()
        }
    else{
    $('#visibility-up-down-btn').fadeOut(); 
    }
  });
           
});

/* visibility-up-down-btn end  */