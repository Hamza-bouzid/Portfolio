//// Navigation

// Show fixed Nav
$(function () {

  //Show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {
    //Show/hide nav on windows Scrool
    showHideNav();

  });

  function showHideNav() {
    if ($(window).scrollTop() > 750) {
      $("nav").addClass("nav-fixed");
    } else {
      $("nav").removeClass("nav-fixed");
    }
  }
});

// Smooth Scrolling
$(function() {
  $("a.smooth-scrool").click(function(e) {
    e.preventDefault();
    
    // Get section id
    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 60
    }, 1250, "easeInSine");
  });
});

//// Mobile menu

/*$(function () {

  // Show mobile nav
  $("#mobile_nav-open-btn").click(function() {
    
    $("#mobile-nav").css("height", "35rem");
    $(".mobile-nav-ul").css({ "display":"block"},"slow")
    $(this).css("display", "none");
    $("#mobile_nav-close-btn").css("display", "block");

  });

  // Show mobile nav
  $("#mobile_nav-close-btn").click(function() {
    
    $("#mobile-nav").css("height", "0");
    $(".mobile-nav-ul").css("display", "none");
    $(this).css("display", "none");
    $("#mobile_nav-open-btn").css("display", "block");

  });
});  */