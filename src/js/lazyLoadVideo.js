(function () {
  let youtube = document.querySelectorAll(".youtube__main");

  for (let i = 0; i < youtube.length; i++) {
    let source =
      "https://img.youtube.com/vi/" +
      youtube[i].dataset.embed +
      "/sddefault.jpg";

    let image = new Image();
    image.src = source;
    image.className = "youtube__img";
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );

    youtube[i].addEventListener("click", function () {
      let iframe = document.createElement("iframe");
      iframe.className = "youtube__iframe";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();
