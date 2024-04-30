
$(document).ready(function () {

  // CHANGE HEADER WITH SCROLL ----------- //

  $(window).on('scroll load', function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('change-bg');
    } else {
      $('.header').removeClass('change-bg');
    }
  });


  // HEROSLISER ------ //

  var swiper = new Swiper(".heroslider", {
    effect: "fade",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
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
});