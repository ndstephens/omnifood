$(document).ready(function() {
  //? ----- STICKY NAVIGATION -----
  //* using the Waypoint plugin library
  $('.section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px'
    }
  );

  //? ----- MOBILE NAVIGATION -----
  $('.js--nav-icon').click(function(e) {
    e.preventDefault();
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });

  //? ----- HERO BUTTONS -----
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.section-plans').offset().top
      },
      1000
    );
  });
  $('.js--scroll-to-start').click(function() {
    $('html, body').animate(
      {
        scrollTop: $('.section-features').offset().top
      },
      1000
    );
  });

  //? ----- MAIN NAV SCROLL -----
  //* initial use of a script found on css-tricks
  // $('a[href*="#"]')
  //   .not('[href="#"]')
  //   .click(function() {
  //     if (
  //       location.pathname.replace(/^\//, '') ==
  //         this.pathname.replace(/^\//, '') ||
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length
  //         ? target
  //         : $('[name=' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html,body').animate(
  //           {
  //             scrollTop: target.offset().top
  //           },
  //           1000
  //         );
  //         return false;
  //       }
  //     }
  //   });

  //* my method using 'scrollIntoView', which isn't fully supported yet
  // $('a[href*="#"]')
  //   .not('[href="#"]')
  //   .click(function(e) {
  //     e.preventDefault(); //* prevent typical #-linking behavior (causes jumps, prevents smooth scrolling)
  //     $(this.hash).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });

  //* my other option, simplifying the script I found (with less error checking)
  $('a[href*="#"]')
    .not('[href="#"]')
    .click(function() {
      var self = this;
      $('html, body').animate(
        {
          //* use the clicked element's hash ('#foo') as the id from which to search by
          //* '- 60' subtracts the height of the sticky nav (shouldn't be hard-coded)
          scrollTop: $(self.hash)[0].offsetTop - 60
        },
        1000
      );
    });

  //? ----- SCROLLING ANIMATIONS -----
  //* using the Animated.CSS library for the effects, Waypoint for scroll event triggering
  $('.js--scroll-features').waypoint(
    function() {
      $('.js--scroll-features').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );
  $('.js--scroll-app-screen').waypoint(
    function() {
      $('.js--scroll-app-screen').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );
  $('.js--scroll-cities').waypoint(
    function() {
      $('.js--scroll-cities').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );
  $('.js--scroll-plan').waypoint(
    function() {
      $('.js--scroll-plan').addClass('animated pulse');
    },
    {
      offset: '50%'
    }
  );
});

//? ----- MAP -----
//* using gmaps.js to include a map in the contact area
var map = new GMaps({
  div: '.map',
  lat: 40.9861531,
  lng: -75.15,
  zoom: 12
});
map.addMarker({
  lat: 40.9861531,
  lng: -75.2149875
});
