$(document).ready(function(){
    
    /************** Sticky Nav *****************/
    
    $('.jq--section-oferta').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
     }, {
      offset: '6'
    });
  
    /************** Sticky Nav *****************/
    $('.jq--enter').click(function (){
        $('html, body').animate({scrollTop: $('.jq--section-oferta').offset().top}, 1000);
    });
    
    /************** Nav links *****************/
 
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
    
    /************* Scroll animations ****************/
    
    $('.jq--wp-1').waypoint(function(direction){
        $('.jq--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.jq--wp-2').waypoint(function(direction){
        $('.jq--wp-2').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    $('.jq--wp-3').waypoint(function(direction){
        $('.jq--wp-3').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    
     $('.jq--wp-4').waypoint(function(direction){
        $('.jq--wp-4').addClass('animated pulse');
    }, {
        offset: '100%'
    });
    
});


/* Nawigacja mobilna */

$('.jq--nav--icon').click(function(){
    var naw = $('.jq--main--nav');
    var icon =$('.jq--nav--icon i');
    naw.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});






                             
                             