head.ready(function() {
	// fixed nav button for 768px and 320px
	function fixedTapButton() {
		var winWidth	  = $(window).width();
		var	scroll		  = $(window).scrollTop();
		var	topareaHeight = $('.toparea').outerHeight();

		if ( scroll > topareaHeight && winWidth < 769 ) {
			$('.js-tap').addClass('is-visible');
		} else {
			$('.js-tap').removeClass('is-visible');
		}
	}

	fixedTapButton();

	// tap button call menu
	$('.js-tap').click(function() {
		$('.js-menu').addClass('is-active');
	});

	// slider constructor
	var Slider = (function() {
		var defaults = {
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
				{
					breakpoint: 750,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false
					}
				}
			]
		};

		function Slider(selector, options) {
			this.props = $.extend({}, defaults, options || {});
			this.el =  $(selector);
			this.active = false;
		}

		Slider.prototype.activate = function() {
			if (!this.active) {
				this.init();
				this.active = true;
			}
		};

		Slider.prototype.init = function() {
			this.el.slick(this.props);
		};

		Slider.prototype.destroy = function() {
			if (!this.active) return;
			this.el.slick('unslick');
			this.active = false;
		};

		return Slider;

	})();

	// slider build
	var slider = new Slider('.js-slider');

	var sliderActivateDebounce = $.debounce(1000, function() {
		slider.activate();
	});

	var sliderDestroyDebounce = $.debounce(1000, function() {
		slider.destroy();
	});

	$(window).scroll(function() {
		fixedTapButton();
	});

	$(window).resize(function() {
		fixedTapButton();

		// check on resize to activate/deactivate slider
		if ( $(window).width() < 768 ) {
			sliderActivateDebounce();
		} else {
			sliderDestroyDebounce();
		}
	});

	// check onload to activate/deactivate slider
	if ( $(window).width() < 768 ) {
		slider.activate();
	} else {
		slider.destroy();
	}

	$('.js-open-menu').click(function(e) {
		e.preventDefault();
		$(this).parent().find('.js-menu').addClass('is-active');
	});

	$('.js-close').click(function(e) {
		$(this).parent().removeClass('is-active');
	});

	// detect the highest block in row
	function detectHeight() {
		var arrForHeight = [];

		$('.pricing__bl').each(function() {
			var priceBlockHeight = $(this).outerHeight();
			arrForHeight.push(priceBlockHeight);
		});

		var max = Math.max.apply(null, arrForHeight);
		$('.pricing__bl > .pricing__in').css({'height': max});
	}

	detectHeight();

	// appear blocks slowly onload after max-height detected
	$('.pricing__wrap').addClass('is-active');

});

