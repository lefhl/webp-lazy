import "@fancyapps/fancybox";
import "./foundation.js";
import lozad from "lozad";
import "./fontAwesome.js";
import "./chooseCity.js";
import "./carousels.js";
import "./handleInputNumber.js";
import "./stickyFooter.js";
import "./replaceImgSvg.js";
import "./lazyLoadVideo.js";
import "./interchange";

import "../scss/style.scss";
(function ($) {
  "use strict";
  $(function () {
    if (window.navigator.userAgent.match(/(MSIE|Trident)/)) {
      $("[data-src]").each(function () {
        const $img = $(this);
        $img.attr("data-src", $img.attr("data-ie"));
      });

      $("[data-lazy][data-ie]").each(function () {
        const $img = $(this);
        $img.attr("data-lazy", $img.attr("data-ie"));
      });
    }

    lozad(".lozad", {
      rootMargin: "40px 0px",
      loaded: function (el) {
        el.classList.add("loaded");
      },
    }).observe();
  });
})(jQuery);
