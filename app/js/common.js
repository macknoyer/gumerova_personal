$(function() {

	$(".slider1__container").slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 5,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	$(".slider2__container").slick({
		fade: true,
		speed: 700,
		adaptiveHeight: true,
		infinite: false
	});
	$(".days__container").slick({
		fade: true,
		speed: 700,
		infinite: false,
		adaptiveHeight: true,
	  	responsive: [
		    {
		      breakpoint: 1920,
		       settings: "unslick"
		    },
		    {
		      breakpoint: 992,
		       settings: "slick"
		    }
		    ]
	});
});
