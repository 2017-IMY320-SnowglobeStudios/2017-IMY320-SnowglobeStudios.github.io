$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();
	var controller3 = new ScrollMagic.Controller();
	var scene1 = new ScrollMagic.Scene().setPin(".backgroundImage").addTo(controller);
	var movement1= TweenMax.from("#secOne", 3, {delay:2, top:"120%",opacity:0, ease:Power1.easeInOut });
	var movement2= TweenMax.from(".textPosition3", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement3= TweenMax.from(".GamePosition", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement4= TweenMax.to("#secOne", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement5= TweenMax.to(".textPosition3", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement6= TweenMax.to(".GamePosition", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var scene3 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement1).triggerElement(".firstSection").addTo(controller3);
	var scene4 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement2).triggerElement(".firstSection").addTo(controller3);
	var scene5 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement3).triggerElement(".firstSection").addTo(controller3);
	var scene6 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement4).triggerElement(".firstSection").addTo(controller3);
	var scene7 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement5).triggerElement(".firstSection").addTo(controller3);
	var scene8 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement6).triggerElement(".firstSection").addTo(controller3);

	var $title = $("#TheAboutTitle");
	var $firstSectionButton = $("#SectionButton1");
	var $secondSectionButton = $("#SectionButton2");
	var $thirdSectionButton = $("#SectionButton3");
	var $SectionButtonTitle = $("#SectionButtonTitle1");
	var $SectionButtonTitle2 = $("#SectionButtonTitle2");
	var $SectionButtonTitle3 = $("#SectionButtonTitle3");

	var removeCard1 = TweenMax.to(".removeA", .25, {opacity:0 , ease:Power1.easeOut });
	var scene2 = new ScrollMagic.Scene({duration:"50%"}).setTween(removeCard1).triggerElement(".disappearPoint").addTo(controller2);
	



	var anim = TweenMax.from($title, 0.5, {delay:0.5, top:"-100%"});
	var anim1 = TweenMax.from($firstSectionButton, 0.7, {delay:1, top:"-100%", rotation:360});
	var anim2 = TweenMax.from($secondSectionButton, 0.7, {delay:2, top:"-100%", rotation:360});
	var anim3 = TweenMax.from($thirdSectionButton, 0.7, {delay:3, top:"-100%", rotation:360});
	var anim4 = TweenMax.from($SectionButtonTitle, 1, {delay:4, opacity:0 , ease:Power1.easeInOut });
	var anim5 = TweenMax.from($SectionButtonTitle2, 1, {delay:4, opacity:0 , ease:Power1.easeInOut });
	var anim6 = TweenMax.from($SectionButtonTitle3, 1, {delay:4, opacity:0 , ease:Power1.easeInOut });


	anim1.play();
	//anim2.play();
	//anim3.play();
	//


	$("#linkOne").click(function() {
    $('html,body').animate({
        scrollTop: $(".firstSection").offset().top},
        'slow');
	});

	$("#linkTwo").click(function() {
    $('html,body').animate({
        scrollTop: $(".secondSection").offset().top},
        'slow');
	});

	$("#linkThree").click(function() {
    $('html,body').animate({
        scrollTop: $(".thirdSection").offset().top},
        'slow');
	});

	var controller4 = new ScrollMagic.Controller();

	var movement7= TweenMax.from("#secTwo", 3, {delay:2, top:"120%",opacity:0, ease:Power1.easeInOut });
	var movement8= TweenMax.from(".textPosition", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement9= TweenMax.from(".girlPosition", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement20= TweenMax.from(".rightArrowPosition", 3, {delay:2, y:"280%", opacity:0, ease:Power1.easeInOut });
	var movement10= TweenMax.to("#secTwo", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement11= TweenMax.to(".textPosition", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement12= TweenMax.to(".girlPosition", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement19= TweenMax.to(".rightArrowPosition", 4, {delay:2, y:"-380%", opacity:0, ease:Power1.easeOut });
	var scene9 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement7).triggerElement(".secondSection").addTo(controller4);
	var scene10 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement8).triggerElement(".secondSection").addTo(controller4);
	var scene11 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement9).triggerElement(".secondSection").addTo(controller4);
	var scene22 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement20).triggerElement(".secondSection").addTo(controller4);
	var scene12 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement10).triggerElement(".secondSection").addTo(controller4);
	var scene13 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement11).triggerElement(".secondSection").addTo(controller4);
	var scene14 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement12).triggerElement(".secondSection").addTo(controller4);
	var scene21 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement19).triggerElement(".secondSection").addTo(controller4);


	var controller5 = new ScrollMagic.Controller();

	var movement13= TweenMax.from("#secThree", 3, {delay:2, top:"120%",opacity:0, ease:Power1.easeInOut });
	var movement14= TweenMax.from(".textPosition2", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement15= TweenMax.from(".skillTreePosition", 3, {delay:2, top:"80%", opacity:0, ease:Power1.easeInOut });
	var movement16= TweenMax.to("#secThree", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement17= TweenMax.to(".textPosition2", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	var movement18= TweenMax.to(".skillTreePosition", 4, {delay:2, top:"-80%", opacity:0, ease:Power1.easeOut });
	
	var scene15 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement13).triggerElement(".thirdSection").addTo(controller5);
	var scene16 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement14).triggerElement(".thirdSection").addTo(controller5);
	var scene17 = new ScrollMagic.Scene({duration:"50%"}).setTween(movement15).triggerElement(".thirdSection").addTo(controller5);
	var scene18 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement16).triggerElement(".thirdSection").addTo(controller5);
	var scene19 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement17).triggerElement(".thirdSection").addTo(controller5);
	var scene20 = new ScrollMagic.Scene({duration:"50%", triggerHook:"onLeave"}).setTween(movement18).triggerElement(".thirdSection").addTo(controller5);
	

	/*var controller6 = new ScrollMagic.Controller();

	var slide = new TimelineMax().to("#sliderContainer",0.5, {x:"-10%"}).to("#sliderContainer", 0.5, {x:"-20%"});
	var scene21 = new ScrollMagic.Scene({triggerElement: ".charImg", triggerHook:"onLeave",duration:"400%"}).setPin(".charImg").setTween(slide).addTo(controller5);*/


	
	$attr1 = "assets/images/monster1.png";
	$attr2 =  "assets/images/girl1.png";

	$(".leftArrow").click(function()
	{
		
		var anim4 = TweenMax.fromTo(".leftArrowClick", 1, {css: {left:"30%", opacity:1}}, {css:{left:"0%", opacity:0}}).delay(0.25).paused(true);
		anim4.play();
		setTimeout(function(){

			$attr = $(".girlPosition").attr("src");

			if($attr == $attr1)
			{
				$attr = $attr2;
			}
			else
			{
				$attr = $attr1;
			}
			$(".girlPosition").attr("src", $attr);
			var anim5 = TweenMax.fromTo(".leftArrowClick", 4, {css: {left: "0%", opacity:0}}, {css:{left:"30%", opacity:1}}).delay(1.5).paused(true);
			anim5.play();
		}, 1200);
		
	});

	var clicked = false;

	var moveForMenu = TweenMax.to(".container", 1, {left:"100%", opacity:0, ease:Power1.easeOut, paused:true } );
	var moveForMenu2 = TweenMax.to(".titles", 1, {left: "100%" , opacity:0, ease:Power1.easeOut, paused:true } );
	var moveForMenu3 = TweenMax.to(".hamburgerMenu", 1, {delay: 1, left: "90%" , paused:true } );
	var moveForMenu7 = TweenMax.to("#menu", 1, {left: "0%" , opacity:100, ease:Power1.easeInOut, paused:true } );
	var moveForMenu4 = TweenMax.to(".container", 3, {delay:3, left:"0%", opacity:100, paused:true } );
	var moveForMenu5 = TweenMax.to(".titles", 3, {delay:3, left: "0%" , opacity:100, paused:true } );
	var moveForMenu6 = TweenMax.to(".hamburgerMenu", 1, {left: "0%" , paused:true } );

	$(".hamburgerMenu").click(function(){

		change();
	});


	function change(){

		if(clicked == false)
		{
			moveForMenu.play(0);
			moveForMenu2.play(0);
			moveForMenu3.play(0);
			setTimeout(change11, 1000);
			moveForMenu7.play(0);

			$("#main2").css("overflow", "hidden");
			clicked = true;
		}
		else
		{
			setTimeout(change11, 1000);
			moveForMenu.reverse();
			moveForMenu2.reverse();
			moveForMenu6.play(0);
			moveForMenu7.reverse();
			$("#main2").css("overflow", "visible");
			clicked = false;
		}
		
	}


	// $(".navigation-sandwich").on('click', function () {
  
   
 // });

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

  });

});



function change11(){
		  $(".navigation-sandwich").toggleClass('change');
	}


