$(function() {
	$('.slider1__container').owlCarousel({
		center: true,
		loop: true,
		nav:true,
		items:5,
		responsive : {
    		// breakpoint from 0 up
		    0 : {
		    	items:3
		    },
		    // breakpoint from 480 up
		    576 : {
		    	items:3
		    },
		    // breakpoint from 768 up
		    768 : {
		    	items:4
		    },
		    992 : {
		    	items:5
		    },
		    1200 : {
		    	items:5
		    }
		}
	});
	// $(".slider1__container").slick({
	// 	centerMode: true,
	// 	centerPadding: '60px',
	// 	slidesToShow: 1,
	// 	infinite:false,

 //  responsive: [
 //    {
 //      breakpoint: 992,
	// centerMode: true,
 //      settings: {
 //        slidesToShow: 2,
 //        slidesToScroll: 2
 //      }
 //    },
 //    {
 //      breakpoint: 768,
	// centerMode: true,
 //      settings: {
 //        slidesToShow: 2,
 //        slidesToScroll: 2
 //      }
 //    }
 //    // You can unslick at a given breakpoint now by adding:
 //    // settings: "unslick"
 //    // instead of a settings object
 //  ]
	// });
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
            breakpoint: 9999,
            settings: "unslick"
       		 },
		  
        {
            breakpoint: 992,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
        }
		    ]
	});
});
