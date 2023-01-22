$(document).ready(function () {
  // Плавная прокрутка вниз
  $('nav a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.menu__mobile .menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
  });
  // Раскрытие и сворачивание меню
  $('.menu__burger').click(function () {
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
  });

  // Ресайз
  $(window).resize(function () {
    if (window.matchMedia('(min-width: 540px)').matches) {
      if ($('.menu__burger').hasClass('close')) {
        $('.menu__burger').removeClass('close');
        $('.menu__mobile .menu').slideUp();
      }
    }
  });
}); // end ready