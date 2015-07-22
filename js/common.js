head.ready(function() {

	$('.js-toggle-menu').click(function (e) {
		e.preventDefault();

		$(this).closest('.js-parent').find('.js-menu').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});

	// if($('.js-fixed').length > 0){

	// 	var wrapperTop = $('.js-fixed').offset().top;
	// 	var wrapperHeight = $('.js-fixed').height();

	// 	$(window).scroll(function(){
	// 		scrollHeader();
	// 	});
	// }

	// //fixed header
	// function scrollHeader(){

	// 	var width = $(window).width(),
	// 		scrollTop = $(window).scrollTop(),
	// 		fixed = $('.js-fixed');

	// 	if (scrollTop >= wrapperTop + wrapperHeight + 100) {
	// 	    fixed.addClass("is-fixed");
	// 	} else {
	// 	    fixed.removeClass("is-fixed");
	// 	}
	// }
	// scrollHeader();

});