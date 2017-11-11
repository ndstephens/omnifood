$(document).ready(function() {
  //? ----- STICKY NAVIGATION -----
  //* using the Waypoint plugin library, just for the hell of it, kind of pointless
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

  //* my method, using 'scrollIntoView' which isn't fully supported yet
  // $('a[href*="#"]')
  //   .not('[href="#"]')
  //   .click(function(e) {
  //     e.preventDefault(); //* need to prevent typical #-linking behavior (causes jumps, prevents scrolling)
  //     document.querySelector(this.hash).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });

  //* my other option, simplifying the script I found (but less error checking)
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
});