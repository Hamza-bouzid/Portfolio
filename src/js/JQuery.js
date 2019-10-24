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

$(window).scroll(function () {
  if($(window).scrollTop() > 900) {
    $('.html').addClass("animationHtml");
    $('.css').addClass("animationCss");
    $('.sass').addClass("animationSass");
    $('.javascript').addClass("animationJs");
    $('.jquery').addClass("animationJq");
    $('.uidesign').addClass("animationUi");
    $('.illustrator').addClass("animationAi");
  
  } else if ($(window).scrollTop() < 600){
    $('.html').removeClass("animationHtml");
    $('.css').removeClass("animationCss");
    $('.sass').removeClass("animationSass");
    $('.javascript').removeClass("animationJs");
    $('.jquery').removeClass("animationJq");
    $('.uidesign').removeClass("animationUi");
    $('.illustrator').removeClass("animationAi");
  }
});

// Mobile Menu 
$(document).ready(function(){
  $('.menu').click(function(){
    $('.nav_content-ul').toggleClass('active');
  });

  $('.mobile-li').click(function(){
    $('.nav_content-ul').toggleClass('active');
  });

});