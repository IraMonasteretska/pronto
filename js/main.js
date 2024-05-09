
$(document).ready(function () {

  // CHANGE HEADER WITH SCROLL ----------- //

  $(window).on('scroll load', function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('change-bg');
    } else {
      $('.header').removeClass('change-bg');
    }
  });

  // MOBILE MENU ------------------- //
  $('.burger').click(function () {
    $(this).toggleClass('open');
    $('.header__nav').toggleClass('open');
    $('.header').toggleClass('menu-bg');
    $('body').toggleClass('hidden');
  });


  // HEROSLISER ------ //

  var swiper = new Swiper(".heroslider", {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1600,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        var increment = 5;
        var width = (10 - index) * increment + 15;
        return '<span class="' + className + '"' + 'style="width:' + width + 'px;">' + '0' + (index + 1) + "</span>";
      },
    },
  });

  // LOCSECT SLIDER ------ //

  // var swiper = new Swiper(".locsect__slider", {
  //   spaceBetween: 10,
  //   loop: true,
  //   speed: 1200,
  //   autoplay: {
  //     delay: 1600,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });

  // animate
  AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-in-out',
    // disable: 'mobile',
  });


});


