head.ready(function() {
	$('.js-open-menu').click(function(e) {
		e.preventDefault();
		$(this).parent().find('.js-menu').addClass('is-active');
	});

	$('.js-close').click(function(e) {
		$(this).parent().removeClass('is-active');
	});

	$(window).scroll(function() {
		fixedMenu();
	});

	function fixedMenu() {
		if ($(window).scrollTop() > 0) {
			$('.js-fix').addClass('is-fixed');
		} else {
			$('.js-fix').removeClass('is-fixed');
		}
	}

	fixedMenu();

});