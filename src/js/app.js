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
      $("[data-src], [data-background-image]").each(function () {
        const $img = $(this);
        if ($img.attr("data-src")) {
          if ($img.closest(".slick-slider")) {
            $img.attr("src", $img.attr("data-ie"));
          } else {
            $img.attr("data-src", $img.attr("data-ie"));
          }
        } else {
          $img.attr("data-background-image", $img.attr("data-ie"));
        }
      });
    } else {
      $(".slick-slider")
        .find("[data-src]")
        .each(function () {
          const $img = $(this);
          $img.attr("src", $img.attr("data-src"));
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
