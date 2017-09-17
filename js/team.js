$(document).ready(function(){

	icePulse();

	$(".nav-profile-picture-container img").on("click", function () {
		href = "#"+$(this).data("href");
		$('html,body').animate({
	    scrollTop: $(href).offset().top
		}, 'slow');
	});

});

function icePulse(){

  $(".ice-background").fadeTo(4000, 0.3, function(){
  	  $(".ice-background").fadeTo(4000, 0.1, icePulse());
  });
}
