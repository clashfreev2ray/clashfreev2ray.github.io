/*============================================================
 # Template Name: Loxicat - Business Consulting HTML5 Template
 # Template URI: https://webextheme.com/html/loxicat-html/
 # Description: Business Consulting HTML5 Template
 # Author: Loxicat
 # Author URI: https://themeforest.net/user/webextheme
 # Version: 1.0
/*============================================================

/*========================================
---------- [JS_INDEXING_START] -----------
==========================================
## [_Prealoder_Default]
## [_Sticky_Header]
## [_Side_Panel_Start]
## [_Mobile_Menu_Start]
## [_Progress_Bar]
## [_Toggle_Search_Box]
## [_Back_To_Top]
## [_Accordion]
## [_Owl_Carousel]
	## [_home_carousel]
	## [_testimonial_items_1col]
	## [_Testimonial_Items_2col]
	## [_Testimonial_Items_3col]
	## [_Team_Items_5col]
	## [_Team_Items_3col]
	## [_Project_Items_5col]
	## [_Client_Items]
## [_Language_Button]
## [_Inline_Data_Attribute]
## [_MagnificPopUp]
## [_Portfolio_Filter]
## [_CounterUp]
## [_Wow]
==========================================
--------- [JS_INDEXING_END] --------------
==========================================
*/

(function($) {
	"use strict";

	var wind = $(window);
	var jQwind = jQuery(window);
	var jQdoc = jQuery(document);

	// ===Prealoder===
	function prealoader() {
		if ($('.preloader').length) {
			$('.preloader').delay(100).fadeOut(500);
		}
	}
	/*=============================================*/
	/*-------------- [_Sticky_Header] -------------*/
	/*=============================================*/
	wind.on('scroll', function() {
		var sticky_one_layer = $('.header-navigation-area.one-layer-header');
		var sticky_two_layers = $('.header-navigation-area.two-layers-header');
		var sticky_three_layers = $('.header-navigation-area.three-layers-header');
		var scroll = wind.scrollTop();
		if (scroll < 0) {
			sticky_one_layer.removeClass('fixed');
		} else {
			sticky_one_layer.addClass('fixed');
		}
		if (scroll < 36) {
			sticky_two_layers.removeClass('fixed');
		} else {
			sticky_two_layers.addClass('fixed');
		}
		if (scroll < 152) {
			sticky_three_layers.removeClass('fixed');
		} else {
			sticky_three_layers.addClass('fixed');
		}
	});

	jQuery(document).on('ready', function() {
		/*=============================================*/
		/*----------- [_Side_Panel_Start] -------------*/
		/*=============================================*/
		$('.side-panel-trigger').on('click', function() {
			$('.side-panel-content').addClass('side-panel-open');
		})

		$('.close-icon').on('click', function() {
			$('.side-panel-content').removeClass('side-panel-open');
		})
		/*=============================================*/
		/*---------- [_Mobile_Menu_Start] -------------*/
		/*=============================================*/
		var $mobile_menu = $('#mobile-menu');
		var $mobile_menu_right = $('#mobile-menu-right');
		$mobile_menu.meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "991",
			meanRevealPosition: "left",
		});
		$mobile_menu_right.meanmenu({
			meanMenuContainer: '.mobile-menu-right',
			meanScreenWidth: "991",
			meanRevealPosition: "right",
		});

		/*=============================================*/
		/*------------- [_Progress_Bar] ---------------*/
		/*=============================================*/
		if ($('.progress-line').length) {
			$('.progress-line').appear(function() {
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width', percent + '%');
			}, {
				accY: 0
			});
		}
		if ($('.count-box').length) {
			$('.count-box').appear(function() {
				var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
			}, {
				accY: 0
			});
		}
		/*=============================================*/
		/*----------- [_Toggle_Search_Box] ------------*/
		/*=============================================*/
		var $showsearchbox = $(".show-searchbox");
		var $togglesearchbox = $(".toggle-searchbox");
		$(document).on('click', function(e) {
			var clickID = e.target.id;
			if ((clickID !== 's')) {
				$togglesearchbox.removeClass('show');
			}
		});
		$showsearchbox.on('click', function(e) {
			event.stopPropagation();
		});
		$('.search-form').on('click', function(e) {
			event.stopPropagation();
		});
		$showsearchbox.on('click', function(e) {
			if (!$togglesearchbox.hasClass("show")) {
				$togglesearchbox.addClass('show');
				event.preventDefault();
			} else
			$togglesearchbox.removeClass('show');
			event.preventDefault();

			if (!$showsearchbox.hasClass("active"))
				$showsearchbox.addClass('active');
			else
				$showsearchbox.removeClass('active');
		});

		/*=============================================*/
		/*--------------- [_Back_To_Top] --------------*/
		/*=============================================*/
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});

		/*=============================================*/
		/*--------------- [_Accordion] ----------------*/
		/*=============================================*/
		$('.accordion').find('.accordion-header').on('click', function() {
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle(300, "swing");
			// Hide The Other Panels
			$('.accordion-body').not($(this).next()).slideUp(300, "swing");
			// Removes Active Class From Other Titles
			$('.accordion-header').not($(this)).removeClass('active');
		});

		/*=============================================*/
		/*------------- [_Owl_Carousel] ---------------*/
		/*=============================================*/

		/*------------- [_home_carousel] --------------*/
		function home_carousel() {
			var owl = $(".home-carousel");
			owl.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				dots: false,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				active: true,
				autoplay: false,
				smartSpeed: 1000,
				autoplayTimeout: 8000,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 1
					},
					1024: {
						items: 1
					},
					1440: {
						items: 1
					}
				}
			});
		}
		home_carousel();

		/*------------- [_testimonial_items_1col] ------*/
		function testimonial_items_1col() {
			var owl = $(".testimonial-items-1col");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: true,
				autoplayTimeout: 8000,
				nav: true,
				dots: true,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 1
					},
					1024: {
						items: 2
					},
					1440: {
						items: 1
					}
				}
			});
		}
		testimonial_items_1col();

		/*------------- [_Testimonial_Items_2col] ------*/
		function testimonial_items_2col() {
			var owl = $(".testimonial-items-2col");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: false,
				autoplayTimeout: 8000,
				nav: true,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 1
					},
					1024: {
						items: 2
					},
					1440: {
						items: 2
					}
				}
			});
		}
		testimonial_items_2col();

		/*------------- [_Testimonial_Items_3col] ------*/
		function testimonial_items_3col() {
			var owl = $(".testimonial-items-3col");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: false,
				autoplayTimeout: 8000,
				nav: true,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 2
					},
					1024: {
						items: 2
					},
					1440: {
						items: 3
					}
				}
			});
		}
		testimonial_items_3col();

		/*------------- [_Team_Items_3col] ------*/
		function team_items_3col() {
			var owl = $(".team-items-3col");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: true,
				autoplayTimeout: 8000,
				nav: true,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 2
					},
					1024: {
						items: 3
					},
					1440: {
						items: 3
					}
				}
			});
		}
		team_items_3col();

		/*------------- [_Team_Items_5col] ------*/
		function team_items_5col() {
			var owl = $(".team-items-5col");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: true,
				autoplayTimeout: 8000,
				nav: true,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 2
					},
					768: {
						items: 3
					},
					1024: {
						items: 4
					},
					1440: {
						items: 5
					}
				}
			});
		}
		team_items_5col();

		/*------------- [_Project_Items_5col] ------*/
		function project_items_4col() {
			var owl = $(".project-items-4col");
			owl.owlCarousel({
				loop: true,
				margin: 5,
				autoplay: false,
				autoplayTimeout: 8000,
				nav: true,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 1
					},
					768: {
						items: 2
					},
					1024: {
						items: 3
					},
					1440: {
						items: 4
					}
				}
			});
		}
		project_items_4col();

		/*------------- [_Client_Items] ------*/
		function client_items() {
			var owl = $(".client-items");
			owl.owlCarousel({
				loop: true,
				margin: 30,
				autoplay: true,
				autoplayTimeout: 8000,
				nav: false,
				dots: false,
				navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				responsive: {
					0: {
						items: 1
					},
					425: {
						items: 2
					},
					768: {
						items: 3
					},
					1024: {
						items: 4
					},
					1440: {
						items: 5
					}
				}
			});
		}
		client_items();

		/*=============================================*/
		/*------------ [_Language_Button] -------------*/
		/*=============================================*/
		$('.language-btn').on('click', function(event) {
			event.preventDefault();
			$(this).next('.language-dropdown').toggleClass('open');
		});

		/*=============================================*/
		/*---------- [_Inline_Data_Attribute] ---------*/
		/*=============================================*/
		var sectionBgImg = $(".bg-img, .footer, section, div");
		sectionBgImg.each(function(indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});

		/*=============================================*/
		/*--------------- [_MagnificPopUp] ------------*/
		/*=============================================*/
		$('.popup-load').magnificPopup({
			type: 'iframe',
			gallery: {
				enabled: true
			}
		});
		$('.img-popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		$('.popup-youtube, .popup-youtube-left, .popup-vimeo, .popup-gmaps').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		/*=============================================*/
		/*------------ [_Portfolio_Filter] ------------*/
		/*=============================================*/
		$("#container").imagesLoaded(function() {
			$(".project-filter").on("click", "li", function() {
				$('li').removeClass("active");
				$(this).addClass("active");
				var filterValue = $(this).attr("data-filter");
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $(".grid").isotope({
				itemSelector: ".grid-item",
				percentPosition: true,
				transitionDuration: ".6s"
			})
		});

		/*=============================================*/
		/*--------------- [_CounterUp] ----------------*/
		/*=============================================*/
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

		/*=============================================*/
		/*------------------ [_Wow] -------------------*/
		/*=============================================*/
		if ($('.wow').length) {
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: false,
				live: true
			});
			wow.init();
		}
	});

	// Window Load event
	jQuery(window).on('load', function() {
		(function($) {
			prealoader();
		})(jQuery);
	});


}(jQuery));