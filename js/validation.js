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

	$("#hover").hover(function(e) {
		$('#hide').html("Opportunities don't happen, you create them!");
		$(this).parent().addClass("show");
		$('#hide').fadeIn(2000);
		$('#hover').hide();
		$('#hide').delay(2000);
		$('#hide').fadeOut(500);

	});

	$("#btn").click(function(e) {
		var url = 'sandrajonesresume.pdf';
		e.preventDefault();
		window.location.href = url;

	});
});