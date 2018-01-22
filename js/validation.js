"use strict";

$(document).ready(function() {

	var scrollLink = $('.scroll');
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});

	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function() {
			var sectionoOffset = $(this.hash).offset().top - 20;

			if (sectionoOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});

	});

	
    $('.tlt').textillate({
      in: {effect: 'rollIn', delay:100},
      out:{ effect: 'rollOut', sync:true},
      loop: false

    });


   $('#hover').textillate({

      in: {
           shuffle: false,
           delay:4000,
           sync: true
       },
       out: {
       	     effect: 'fadeOutRightBig',
             shuffle: false,
             sync: true
       },
       loop: false

    });

    
	$("#btn").click(function(e) {
		var url = 'sandraDJonesResume.pdf';
		e.preventDefault();
		window.location.href = url;

	});
});