head.ready(function() {

	$('.js-toggle-menu').click(function (e) {
		e.preventDefault();

		$(this).closest('.js-parent').find('.js-menu').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});

});