(function ($) {
  "use strict";
  $(function () {

    function setImage() {
      let $blockWithBackground = $("[data-interchange]");
      $blockWithBackground.each(function () {
        let thisEnv = $(this);
        let string = thisEnv.data("interchange");
        let arr = string.split(";");

        arr.forEach(function (item) {
          let [srcOfImg, breakpoint] = item.split(",");

          if (window.matchMedia(`(min-width:${breakpoint}px)`).matches) {
            thisEnv.prop("style", `background-image:url(${srcOfImg});`);
          }
        });
      });



      let $blockImg = $("[data-interchange-img]");
      $blockImg.each(function () {
        let thisEnv = $(this);
        let string = thisEnv.data("interchange-img");
        let arr = string.split(";");

        arr.forEach(function (item) {
          let [srcOfImg, breakpoint] = item.split(",");

          if (window.matchMedia(`(min-width:${breakpoint}px)`).matches) {
            thisEnv.prop("src", srcOfImg);
          }
        });
      });


      let $sourceImg = $("[data-interchange-source]");
      $sourceImg.each(function () {
        let thisEnv = $(this);
        let string = thisEnv.data("interchange-source");
        let arr = string.split(";");

        arr.forEach(function (item) {
          let [srcOfImg, breakpoint] = item.split(",");

          if (window.matchMedia(`(min-width:${breakpoint}px)`).matches) {
            thisEnv.prop("srcset", srcOfImg);
          }
        });
      });
    }

    setImage();
    $(window).resize(function () {
      setImage();
    });
  });
})(jQuery);
