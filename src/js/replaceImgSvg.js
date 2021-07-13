(function ($) {
  "use strict";
  $(function () {
    $(".svg-inline").each(function () {
      let $img = $(this),
        imgURL = $img.attr("src"),
        imgID = $img.attr("id");

      $.get(
        imgURL,
        function (data) {
          // Get the SVG tag, ignore the rest
          let $svg = $(data).find("svg");

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("width") + " " + $svg.attr("height")
            );
          }

          $svg = $svg.removeAttr("xmlns:a");
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });
})(jQuery);
