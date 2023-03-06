// 1 вариант

// jQuery(document).ready(function($){
// $('#visibility-chat-btn').fadeOut(); //скрываем кнопку
// $(window).scroll(function () {
// if ($(this).scrollTop() > 700) { // при прокрутке страницы на 700 пикселей вниз
// $('#visibility-chat-btn').fadeIn();   // отображаем кнопку
// } else {
// $('#visibility-chat-btn').fadeOut(); // в противном случае скрываем
// }
// });
// });

// 2 вариант

// jQuery(function(f){
//     var element = f('#visibility-chat-btn');
//     f(window).scroll(function(){
//         element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](100);
//     });
// });

// 3 вариант

// $(function () {
// var element = $("#visibility-chat-btn"), display;
// $(window).scroll(function () {
// display = $(this).scrollTop() >= 700;
// if(display){
// element.show();
// }else{
// element.hide()  && display <= 1000;
// }
// });
// });

// 4 вариант

$(function () {
$(window).scroll(function(){ 
 
    if ($(this).scrollTop() < 5000 && $(this).scrollTop() > 700) {
           $('#visibility-chat-btn').fadeIn()
        }
    else{
    $('#visibility-chat-btn').fadeOut(); 
        }
    });
           
 });