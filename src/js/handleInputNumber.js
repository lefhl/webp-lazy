(function ($) {
  "use strict";
  $(function () {
    /** .quant input activity */
    $(".quant").each(function () {
      const $input = $(this).find(".quant__input");
      $input.keypress(function (evt) {
        let key;
        if (evt.type === "paste") {
          key = evt.clipboardData.getData("text/plain");
        } else {
          key = evt.keyCode || evt.which;
          key = String.fromCharCode(key);
        }
        let regex = /[0-9]|\./;
        if (!regex.test(key)) {
          evt.returnValue = false;
          if (evt.preventDefault) evt.preventDefault();
        }
      });

      $(this)
        .find(".quant__plus")
        .on("click", function () {
          let currentNum = Math.max(+$input.val(), 0);

          $input.val(++currentNum);
        });

      $(this)
        .find(".quant__minus")
        .on("click", function () {
          let currentNum = Math.max(+$input.val(), 0);
          if (currentNum >= 2) {
            $input.val(--currentNum);
          }
        });
    });
  });
})(jQuery);
