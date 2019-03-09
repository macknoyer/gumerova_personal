$(function() {

	$(".slider1__container").slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 5
	});
	$(".slider2__container").slick({
		fade: true,
		speed: 700,
		adaptiveHeight: true,
		infinite: false
	});
});
