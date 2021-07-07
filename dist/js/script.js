$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });

  const typed = new Typed(".typed", {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 2000,
    showCursor: false,
  });

  // Fancybox.bind("[data-fancybox]");

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});
