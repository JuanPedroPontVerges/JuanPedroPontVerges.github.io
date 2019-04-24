var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };


$(document).ready(function () {
    $('.carousel').carousel('next');
    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });


    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#miBarra',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#miBarra").offset().top > 50) {

            $("#miBarra").addClass("navbar-shrink");

            $("#miBarra").addClass("navbarColor2");
            $("#miBarra").removeClass("navbarColor1");

            //$("#milogo").removeClass("brandlogoSacar");
            //$("#milogo").addClass("brandlogoMostrar");
            //$("#milogo").addClass("brandlogoMovil");

        } else {
            $("#miBarra").removeClass("navbar-shrink");

            $("#miBarra").addClass("navbarColor1");
            $("#miBarra").removeClass("navbarColor2");

            //$("#milogo").addClass("brandlogoSacar");
            //$("#milogo").removeClass("brandlogoMostrar");
            //$("#milogo").addClass("brandlogoMovil");
        }


    };



    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
        $(".navbar").removeClass("d-none");
    })

})
