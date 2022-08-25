$(window).on("load", function () {
  $(".prelader").fadeOut("500", function () {
    $(this).remove();
    sal({
      once: true,
    });
    $("body").removeClass("overflow");
  });

  if ($(window).width() <= 991) {
    $("*").removeAttr("data-sal");
  }
});
$(document).ready(function () {
  /***** Navbar *****/
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });
  $(".animated-scroll").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    }
  });

  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /***** Header *****/
  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });

  /***** testimonials slider *****/
  var testimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
    loop: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-slider .swiper-btn-next",
      prevEl: ".testimonials-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  /***** Arrow *****/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".scroll-up").fadeIn(500)
      : $(".scroll-up").fadeOut(500);
  });
  $(".scroll-up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
