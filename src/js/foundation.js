import "foundation-sites";
(function ($) {
  "use strict";
  $(function () {
    /** fix bug equalizer */
    $(document).foundation();

    function fixEqualizer() {
      const equalizerBlocks = $("[data-equalizer]");
      if (equalizerBlocks.length !== 0) {
        Foundation.reInit(equalizerBlocks);
      }
    }

    $(document).ready(function () {
      fixEqualizer();
    });
    $(window).resize(function () {
      fixEqualizer();
    });
    /** close .dd when click outside, when using Foundation Toggler */
    $(document).on("mouseup", function (e) {
      const $popup = $(".dd_show[data-toggler]");
      if ($popup.length === 0) {
        return;
      }
      const $button = $('[data-toggle="' + $popup.prop("id") + '"]');
      if (
        !$popup.is(e.target) &&
        $popup.has(e.target).length === 0 &&
        !$button.is(e.target) &&
        $button.has(e.target).length === 0
      ) {
        $popup.removeClass("dd_show");
      }
    });
    /** show any block when hover on another block */
    let toggleLeaveTimer;
    $("[data-toggle-hover-dd]").on("mouseenter mouseleave", function (e) {
      const $toggler = $("#" + $(this).data("toggle-hover-dd"));
      if ($toggler.length > 0) {
        const className = $toggler.data("toggler-hover-dd");
        if (e.type === "mouseenter" && !$toggler.hasClass(className)) {
          $toggler.addClass(className);
        }
        if (e.type === "mouseleave" && $toggler.hasClass(className)) {
          toggleLeaveTimer = setTimeout(() => {
            $toggler.removeClass(className);
          }, 300);
        }
      }
    });
    $("[data-toggler-hover-dd]")
      .on("mouseenter", function () {
        clearTimeout(toggleLeaveTimer);
      })
      .on("mouseleave", function () {
        const $toggler = $(this);
        const className = $toggler.data("toggler-hover-dd");
        if ($toggler.hasClass(className)) {
          toggleLeaveTimer = setTimeout(() => {
            $toggler.removeClass(className);
          }, 300);
        }
      });
  });
})(jQuery);
