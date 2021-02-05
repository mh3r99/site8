$(function () {
  // FIXED HEADER
  let header = $("#header"),
    intro = $("#intro"),
    introH = intro.innerHeight();
  let nav = $("#nav");
  scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  //   SMOOTH SCROLL
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;
    nav.removeClass("show");
    $("html, body").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  //   NAV TOGGLE
  $("#navToggle").on("click", function (e) {
    e.preventDefault();

    nav.toggleClass("show");
  });

  // REVIEWS

  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
});
