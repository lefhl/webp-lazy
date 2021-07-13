(function ($) {
  "use strict";
  $(function () {
    let footerTop = 0,
      $footer = $(".footer");

    positionFooter();

    function positionFooter() {
      $footer.prop("style", "");
      footerTop = $(window).height() - $(document.body).height();

      if (footerTop > 0) {
        $footer.css({
          top: footerTop,
        });
      } else {
        $footer.prop("style", "");
      }
    }

    $(window).scroll(positionFooter).resize(positionFooter);
  });
})(jQuery);
