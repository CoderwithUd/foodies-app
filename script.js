// home page last slider section 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
     autoplay:true,
      margin:30,
      loop:true,
      dots:true
//      nav:true,
//      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
  });
});

// About page silder use owl carousel

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	autoplay:true,
	nav:true,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:2
			},
			1000:{
					items:3
			}
	}
})

