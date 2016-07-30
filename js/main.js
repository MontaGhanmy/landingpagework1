
///Fixed Sidebar
var headerheight = $('header').outerHeight();
var footerheight = $('footer').outerHeight();
$('.side-bar').css('height',headerheight);
$('.side-bar').affix({offset: {top: headerheight} }).on('affix.bs.affix', function () {
    $('.content-wrapper').addClass("col-md-offset-3");
}).on( 'affixed-top.bs.affix', function () {
    $('.content-wrapper').removeClass("col-md-offset-3");
});

/// Init wow.js
new WOW().init();
/// Scroll active section highlight
$(window).scroll(function() {

    var position = $(this).scrollTop();

    $('section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        
        if (position >= target-10) {
            $('.side-bar > ul > li').removeClass('active');
            $('.side-bar > ul > li > a[href="#' + id + '"]').parent().addClass('active');
        }
    });
});

/// Menu items Click event handlers
$('.duration').each(function(){
    $(this).css('width', $(this).attr('data'));
    $(this).addClass('duration-muted');
});
$('.faq-menu li a').on( "click", function(event) {
  $('.faq-menu li a').siblings('p').css('display','none');
  $('.faq-menu li a').children('i.fa-caret-down').toggleClass("fa-caret-right").toggleClass("fa-caret-down");
  $(event.target).children('i').toggleClass("fa-caret-right").toggleClass("fa-caret-down");
  $(this).siblings('p').slideToggle();
});

$('.sectionselector div a').on( "click", function(event) {
  $('.sectionselector div a').removeClass('active');
  $('.sectiondesc').css('display','none');
  $($(this).attr('target-section')).slideToggle();
  $(this).addClass('active');
});

$('.list-group-item').on( "click", function(event) {
  $('.list-group-item').removeClass('active');
  $('.list-sub-section').removeClass('active');
  $(".list-sub-section"+$(this).attr('data-list-target')).addClass('active');;
  $(this).addClass('active');
});

$('.syllabus-menu li a').on( "click", function(event) {
  $('div.collapse').css('display','none');
  $($(this).attr('col-target')).slideToggle();
});

/// Smooth scrolling
$(document).ready(function(){
    $(".panel-heading ul li a").on('click', function(event) {
         $(".panel-heading ul li a").parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.duration').each(function(){ $(this).addClass('duration-muted'); });
        var marginleft = 0;
        $($(this).attr('target')).removeClass('duration-muted').prevAll().each(function(){
            marginleft = marginleft + parseInt($(this).attr('data'));
        }).attr('margin-left',String(marginleft));
    });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});