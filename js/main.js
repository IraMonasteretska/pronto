
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

  // ACCORDION ----------- //
  $('.accordeon__head').click(function () {
    var $this = $(this).closest('.accordeon__row');
    $('.accordeon__row').not($this).removeClass('active');
    $this.toggleClass('active');
    $('.accordeon__body').not($this.find(('.accordeon__body'))).slideUp();
    $this.find('.accordeon__body').slideToggle();
  });






  // SERVICE PAGE
  var swiper = new Swiper(".galslider", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
    },
  });

  // area slider


  var swiper = new Swiper(".areaslider", {
    spaceBetween: 10,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

});




