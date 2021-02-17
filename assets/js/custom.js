
AOS.init({
	disable: 'mobile',
	offset: 1000,
	duration: 1500
});

function calculateCountdown(countDownDate) {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");

	$("#days").html(days.replace(/(\d)/g, '<span class="digit">$1</span>'));
	$("#hours").html(hours.replace(/(\d)/g, '<span class="digit">$1</span>'));
	$("#minutes").html(minutes.replace(/(\d)/g, '<span class="digit">$1</span>'));
	if (distance < 0) {
		// clearInterval(x);
		document.getElementById("days").innerHTML = "00";
		document.getElementById("houes").innerHTML = "00";
		document.getElementById("minutes").innerHTML = "00";
		// document.getElementById("demo").innerHTML = "EXPIRED";
	}
}

// Custom JavaScript
$(document).ready(function() {
    "use strict";

	$(".owl-carousel").owlCarousel(
		{
			loop:true,
			margin:10,
			responsiveClass:true,
			items:2,


			responsive:{
				0:{
					items:2,
				},
				600:{
					items:3,
				},
				1000:{
					items:4,
				}
			}
		}
	);

	$('.number').html(function(i, v){
		return v.replace(/(\d)/g, '<span class="digit">$1</span>');
	});

	// Set the date we're counting down to
	var countDownDate = new Date("Mar 20, 2021 20:00:00").getTime();
	calculateCountdown(countDownDate);
// Update the count down every 1 second
	var x = setInterval(function() {
		calculateCountdown(countDownDate);
	}, 1000);




	// sticcky header
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);

	// main menu
	$('.main-navigation .sf-menu').superfish({
		delay: 100,
		animation: { opacity: 'show', height: 'show' },
		speed: 300,
	});

	// menudropdown auto align
	var wapoMainWindowWidth = $(window).width();
	$('.sf-menu ul li').mouseover(function(){
		// checks if third level menu exist
		var subMenuExist = $(this).find('.sub-menu').length;
		if( subMenuExist > 0){
			var subMenuWidth = $(this).find('.sub-menu').width();
			var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

			// if sub menu is off screen, give new position
			if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){
				var newSubMenuPosition = subMenuWidth;
				$(this).find('.sub-menu').css({
					left: -newSubMenuPosition,
					top: '0',
				});
			}
		}
	 }); // menu ends

	// scrollspy
	$('body').scrollspy({
		offset:	170,
		target:	'.dtr-scrollspy'
	});

	// nav scroll
	if($('#dtr-header-global').length){
		var navoffset = $('#dtr-header-global').height();
		$('.dtr-nav a[href^="#"], .dtr-scroll-link').on("click", function(e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 37
			}, "slow","easeInSine");
		});
	} else {
		$('.dtr-scroll-link').on("click", function(e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow","easeInSine");
		});
	}

	// responsive header nav scroll
	var mnavoffset = $('.dtr-responsive-header').height();
	var scroll = new SmoothScroll('.dtr-responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 15
	});

	// responsive menu
	$('.main-navigation .dtr-nav').slicknav({
		label:"",
		prependTo: '.dtr-responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks:"true",
		menuButton: '#dtr-menu-button',
		closeOnClick:true
	});
	// responsive scrollspy
	$('.slicknav_nav').addClass("dtr-scrollspy")

	// responsive menu button
	$("#dtr-menu-button").on("click", function(e) {
		$(".slicknav_nav").slideToggle();
	});

	// responsive menu hamburger
	var $hamburger = $("#dtr-menu-button");
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
	});

	// sectionAnchor
	function sectionAnchor() {
	var navoffset = $('#dtr-header-global').height();
		var hash = window.location.hash;
		if (hash != '') {
			setTimeout(function() {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - navoffset - 37
				}, 800, 'easeInSine');
				history.pushState('', document.title, window.location.pathname);
			}, 500);
		}
	} sectionAnchor();

	// responsiveAnchor
	var windowWidth=$(window).width();
	if(windowWidth<992){
		function responsiveAnchor() {
		var mnavoffset = $('.dtr-responsive-header').height();
			var hash = window.location.hash;
			if (hash != '') {
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: $(hash).offset().top - mnavoffset - 15
					}, 800, 'easeInSine');
					history.pushState('', document.title, window.location.pathname);
				}, 500);
			}
		} responsiveAnchor();
	}

	// sticky tabs
	if ($(".dtr-sticky-tabs-wrapper").length > 0) {
		var tabs_container = $(".dtr-sticky-tabs-wrapper");
		var tabs_nav = $(".dtr-sticky-tabs-nav");
		var offset = tabs_container.offset().top;
		$(window).scroll(function(event) {
			var scroll = $(window).scrollTop();
			var total = tabs_container.height() + offset - 200;
			if (scroll > total) {
				tabs_nav.addClass('dtr-sticky-tabs-hide')
			}
			if (scroll < total) {
				tabs_nav.removeClass('dtr-sticky-tabs-hide')
			}
		});
	}

	// sticky tabs scroll
	var taboffset = $('#dtr-header-global').height();
	var taboffset2 = $('.dtr-sticky-tabs-nav').height();

	$('.dtr-sticky-tabs li a').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - taboffset - taboffset2
		}, "slow","easeInSine");
	});

	// testimonial
	$('.dtr-testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});

	// img slider 3col
	$('.dtr-img-slider-3col').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});

	// img slider 2col
	$('.dtr-img-slider-2col').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});

	// img slider 1col
	$('.dtr-img-slider-1col').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite:true,
		autoplay: true,
		fade: true,
		speed: 1500,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
	  ]
	});

	// wow animations
	if( $(window).outerWidth() >= 767 ) {
		new WOW().init({
			mobile: false,
		});
	}

	// parallax
	if( $(window).outerWidth() >= 767 ) {
		$(".parallax").parallaxie({
			speed: 0.60,
			size: 'auto',
		});
		$(".parallax.parallax-slow").parallaxie({
			speed: 0.30,
		});
	}

	// video popup
	$('.dtr-video-popup').venobox();

	// Popup video
	$(".popup-video").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		preloader: false,
		fixedContentPos: false
	});

	// Popup image
	$('.popup-image').magnificPopup({
		type: 'image',
	});

	// Popup gallery
	$('.popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		gallery: {
			enabled: true
		},
	});

	// counter
	$(".dtr-counter").appear(function () {
    	$(".counting-number").countTo();
    });

	//Contact form
	// $(function () {
	// 	var v = $("#contactform").validate({
	// 		submitHandler: function (form) {
	// 			$(form).ajaxSubmit({
	// 				target: "#result",
	// 				clearForm: true
	// 			});
	// 		}
	// 	});
	// });
  var frm = $('#contactform');

  frm.submit(function (e) {

    e.preventDefault();

	gtag('event', 'Formlead', { 'event_category': 'contacto', 'event_label': 'solicitar_informacion_formulario', 'value': '40'});

    $.ajax({
      type: frm.attr('method'),
      url: frm.attr('action'),
      data: frm.serialize(),
      success: function (data) {
        console.log('Submission was successful.');
        $("#result").html("<p> En breve nos pondremos en contacto contigo <br> ¡Esperamos que entres a formar parte de la familia WOMAN CODE, curso de programación!</p>");
        frm.each(function(){
          this.reset();
        });
      },
      error: function (data) {
        console.log('An error occurred.');
        $("#result").html("<p> Error en el envío <br> Inténtlo más tarde!</p>");
        console.log(data);
      },
    });
  });

  //To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#contactform #message').val('');

}); // document ready

// on load
$(window).on('load', function(){
	// preloader
	//$('.dtr-preloader').delay(400).fadeOut(500);
}); // close on load
