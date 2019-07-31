$(".menu").on("click", function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("menu-open");
});

$(".nav-link").on("click", function() {
  $(".overlay").removeClass("menu-open");
  $(".menu").removeClass("active");
});
