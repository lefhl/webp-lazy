(function ($) {
  "use strict";
  $(function () {
    const pathToJson = "./json/ajax.json";
    /* links */
    const $container = $("#cities-main-window-list");
    const staticCities = $container.html();
    const $searchCities = $("#searchCities");
    $container.on("click", "a", function (e) {
      e.preventDefault();

      const link = $(this).attr("href");

      $.ajax({
        method: "GET",
        url: pathToJson,
        data: {
          action: "setCity",
          link: link,
        },
        success: function (response) {
          let res;
          typeof response === "string"
            ? (res = $.parseJSON(response))
            : (res = response);
          if (res.success) {
            document.location = link;
          }
        },
      });
    });

    $searchCities.on("keyup", function () {
      const data = $(this)[0].value;
      const name = $(this).attr("name");
      if (data !== "") {
        $.ajax({
          method: "GET",
          url: pathToJson,
          data: {
            action: name,
            data: data,
            count: 16,
          },
          success: function (response) {
            let res;
            typeof response === "string"
              ? (res = $.parseJSON(response))
              : (res = response);
            if (res.success) {
              $container.empty();
              for (let i = 0; i < res.rows.length; i++) {
                $container.append(
                  "<a href=" +
                    res.rows[i].link +
                    " class='cities-main-window-list-link'>" +
                    res.rows[i].name +
                    "</a>"
                );
              }
            } else {
              $container.empty();
              $container.append(
                "<p class='callout warning cities-message'>Ничего не найдено</p>"
              );
            }
          },
        });
      } else {
        $container.empty();
        $container.append(staticCities);
      }
    });
    /* popup of the region */
    const modalRegion = $("#cities-container-region");
    const overlay = $(".overlay");
    /* Ajax region window  */
    $.ajax({
      method: "GET",
      url: pathToJson,
      data: {
        action: "checkIp",
      },
      success: function (response) {
        let res;
        typeof response === "string"
          ? (res = $.parseJSON(response))
          : (res = response);
        if (res.success) {
          overlay.addClass("body-overlay");
          modalRegion.fadeIn();

          setTimeout(function () {
            $("html, body").animate(
              {
                scrollTop: 0,
              },
              "fast"
            );
          }, 100);
        }
      },
    });

    const modalCities = $("#cities-container");

    /* choose buttons */
    $("#button-ok").on("click", function (e) {
      e.preventDefault();
      $.ajax({
        method: "GET",
        url: pathToJson,
        data: {
          action: "saveCity",
        },
        success: function (response) {
          let res;
          typeof response === "string"
            ? (res = $.parseJSON(response))
            : (res = response);
          if (res.success) {
            modalRegion.fadeOut();
            overlay.removeClass("body-overlay");
          }
        },
      });
    });
    $("#button-another").on("click", function (e) {
      e.preventDefault();
      modalRegion.fadeOut();
      modalCities.fadeIn();
      $searchCities.focus();
    });

    $("#main-window-close").on("click", function () {
      modalCities.fadeOut();
      overlay.removeClass("body-overlay");
    });

    $("#cities-select").on("click", function () {
      modalCities.fadeIn();
      $searchCities.focus();
    });

    $(document).on("keyup", function (e) {
      if (e.keyCode === 27 && modalCities.is(":visible")) {
        modalCities.fadeOut();
        overlay.removeClass("body-overlay");
      }
    });
  });
})(jQuery);
