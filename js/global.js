$(document).ready(function(){

  $(".black-background").animate({opacity: "0"}, 1000, function() {
    $("#main").animate({right: "0px"}, 1000);
  });

  $(".nav-link").click( function() {
    var href = $(this).data("href");
    $("#menu").animate({
      marginLeft: "-100%",
    }, 1000, function() {
      window.location = href;
    });
    $(".hamburgerMenu").animate({
      left: "-100%",
    }, 1000);
    $(".black-background").animate({
      opacity: "1"
    }, 1000);
  });

  $(".navigation-sandwich").on('click', function () {
    $(this).toggleClass('change');
    toggleMenu();
  });

});

clicked = false;

function toggleMenu() {

	if(clicked) {
		$("#main").animate({
			right: "0px",
		}, 1000);

		$("#menu").animate({
			left: "-100%",
		}, 1000);

		$(".hamburgerMenu").animate({
			left: "0%",
		}, 1000);

		clicked = false;
	} else {
		$("#main").animate({
			right: "-100%",
		}, 1000);

		$("#menu").animate({
			left: "0px",
		}, 1000);

		$(".hamburgerMenu").animate({
			left: "-8%",
		}, 1000);

		clicked = true;
	}

}
