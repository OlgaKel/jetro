$(function(){

    $('.slider__inner').slick({
    arrow: true,
    });

  $('.header__menu-btn').on('click',function(){
    $('.header__menu ul').slideToggle();
  });


});