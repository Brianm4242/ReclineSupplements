(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// code for faq

		$(".set > a").on("click", function() {
			if ($(this).hasClass("active")) {
			  $(this).removeClass("active");
			  $(this)
				.siblings(".content")
				.slideUp(200);
			  $(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
			} else {
			  $(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
			  $(this)
				.find("i")
				.removeClass("fa-plus")
				.addClass("fa-minus");
			  $(".set > a").removeClass("active");
			  $(this).addClass("active");
			  $(".content").slideUp(200);
			  $(this)
				.siblings(".content")
				.slideDown(200);
			}
		  });

		//   code-for-sm-menu

		$('#toggle').click(function() {
			$(this).toggleClass('toggle-active');
			$('#overlay').toggleClass('nav-active');
			$('body').toggleClass('over');
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);