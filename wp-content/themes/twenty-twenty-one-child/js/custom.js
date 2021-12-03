jQuery(document).ready(function($){
    //alert('Hi');

// 
// On hover add class in nav
// $(".header-container").hover(function () {
// 	$(this).toggleClass("open");
// });
// On click add class in nav
jQuery(".to-icon").click(function () {
	jQuery(".header-container").toggleClass("open-nav");
});

// On hover display Tabs
$('.nav-tabs > li > a').hover(function() {
	$(this).tab('show');
});
	
// var className = $(".header-container").attr("class");
// if (className === "open-nav") {
//   $(".header-container").hover(function () {
// 	$(this).toggleClass("open");
// });
// }
	
	    var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
			autoplay: {
             delay: 2800,
             disableOnInteraction: false,
           },
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 400,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
			navigation: {
			  nextEl: ".swiper-button-nex",
			  prevEl: ".swiper-button-pre",
             },
			breakpoints: {
			500: {
            slidesPerView: "auto",
          },
          0: {
            slidesPerView: 1,
          },
        },
        });
	
// Owl Carousel homepage-slider

// var owl = $('.owl-carousel.home-tour');
// 			owl.owlCarousel({
// 				items: 3.2,
// 				loop: true,
// 				margin: 15,
// 				dots:false,
// 				nav: true,
// 				navText: ["<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-left.png'>","<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-right.png'>"],
// 				responsiveClass: true,
// 				responsive: {
// 					768:{
// 					  items: 3.2
// 					},
// 					0:{
// 					  items: 2
// 					}
// 				}
// 			});
// 	owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });
// Owl Carousel ultggpage--slider

var owl = $('.owl-carousel.ult-tour');
			owl.owlCarousel({
				items: 1.2,
				loop: true,
				margin: 20,
				dots: false,
				nav: true,
				navText: ["<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-left.png'>","<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-right.png'>"],
				responsiveClass: true,
				responsive: {
					768:{
					  items: 1.2
					},
					0:{
					  items: 1.7
					}
				}
			});
	var owl = $('.owl-carousel.f-game-slider');
			owl.owlCarousel({
				items: 1,
				loop: true,
				margin: 20,
				autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
				dots: true,
				nav: true,
				navText: ["<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-left.png'>","<img src='http://cp-ht-9.hostgator.tempwebhost.net/~wadcoaj3/projects/ultimogg/wp-content/themes/twenty-twenty-one-child/images/slider-arrow-right.png'>"]
			});
	owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
	// Owl Carousel ultggpage--slider

// var owl = $('.tournaments_filter_list');
// 			owl.owlCarousel({
// 				items: 10,
// 				loop: true,
// 				margin: 20,
// 				dots: false,
// 				nav: false,
// 				autoplay: false,
// 				responsiveClass: true,
// 				responsive: {
// 					1025:{
// 					  items: 10
// 					},
// 					0:{
// 					  items: 6,
// 					  margin: 10
// 					}
// 				}
// 			});
// 			$('.play').on('click', function() {
// 				owl.trigger('play.owl.autoplay', [1000])
// 			})
// 			$('.stop').on('click', function() {
// 				owl.trigger('stop.owl.autoplay')
// 			})	
// 			
// 	News-page-Tab		
	$('.tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });
	
// 	News-page-Tab		
// 	
	$('.tab-st a').click(function() {

    // Check for active
    $('.tab-st li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tb-stcon > div').hide();
    $(currentTab).show();

    return false;
  });
	
	
	// 	News-page-Tab		
// 	
	$('.tb-nav a').click(function() {

    // Check for active
    $('.tb-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tb-conten > div').hide();
    $(currentTab).show();

    return false;
  });
	
	// 	ACCORDIAN
	jQuery('.accTrigger').click(function(e) {
    e.preventDefault();
    var $this = jQuery(this);
    jQuery(this).toggleClass("open");
    jQuery(this).parent('li').prevAll('li').children('.accTrigger').removeClass("open");
    jQuery(this).parent('li').nextAll('li').children('.accTrigger').removeClass("open");
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });
	
	 //update-cart-button

    $('.woocommerce-cart').find('button[name="update_cart"]').prop('disabled', false);

    $('body').on('updated_cart_totals', function() {
        $('.woocommerce-cart').find('button[name="update_cart"]').prop('disabled', false);

    });
	
	//update-plus-minus-icon
     $(document).on('click','button.plus, button.minus',function(e){
 
   var qty = $( this ).parent( '.quantity' ).find( '.qty' );
   var val = parseFloat(qty.val());
   var max = parseFloat(qty.attr( 'max' ));
   var min = parseFloat(qty.attr( 'min' ));
   var step = parseFloat(qty.attr( 'step' ));
    
   $('.woocommerce .actions button.button').prop('disabled', false);
 
   if ( $( this ).is( '.plus' ) ) {
      if ( max && ( max <= val ) ) {
         qty.val( max );
      } else {
         qty.val( val + step );
      }
   } else {
      if ( min && ( min >= val ) ) {
         qty.val( min );
      } else if ( val > 1 ) {
         qty.val( val - step );
      }
   }
});
	
	// 	SMOOTH-SCROLL
// 	$('a[href^="#"]').on('click',function (e) {
// 	    e.preventDefault();
// 	    var target = this.hash;
// 	    var $target = $(target);
// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 1300, 'swing', function () {
// 	        // window.location.hash = target;
// 	    });
// 	});
	
// 	Scroll Stop
	$('.woocommerce-tabs ul li a').click(function (e) {
    var x = window.pageXOffset,
        y = window.pageYOffset;
    $(window).one('scroll', function () {
        window.scrollTo(x, y);
    })
});
// 	$('.tb-nav li a').click(function (e) {
//     var x = window.pageXOffset,
//         y = window.pageYOffset;
//     $(window).one('scroll', function () {
//         window.scrollTo(x, y);
//     })
// });
	
}); // End of Document Ready

