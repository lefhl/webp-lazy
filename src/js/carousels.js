import "slick-carousel";
(function ($) {
  "use strict";
  $(function () {
    // if (window.navigator.userAgent.match(/(MSIE|Trident)/)) {
    //   $("[data-lazy][data-ie]").each(function () {
    //     const $img = $(this);
    //     $img.attr("data-lazy", $img.attr("data-ie"));
    //   });
    // }

    $(".js-slider").slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      autoplayHoverPause: true,
      fade: true,
      swipeToSlide: true,
      prevArrow:
        '<span><svg class="svg-inline--fa fa-angle-left fa-w-8 slick-prev fa-4x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></span>',
      nextArrow:
        '<span><svg class="svg-inline--fa fa-angle-right fa-w-8 slick-next fa-4x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span>',
      responsive: [
        {
          breakpoint: 640,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  });
})(jQuery);
