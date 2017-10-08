$(function(){

    var bubbleArray = new Array();

    $(window).on("load", function() {
    
      $(".black-background").animate({opacity: "0"}, 1000, function() {
        setBubbles();
        setTitle();
      });
    
      function clearCenter(except) {
        console.log("Clearing center except "+except);
        for (var i = 0; i<bubbleArray.length; i++) {
          if((bubbleArray[i].goingToCenter || bubbleArray[i].atCenter) && i != except) {
            console.log(i+" != "+except+" "+bubbleArray[i].className);
            bubbleArray[i].queueMouseLeave();
          }
        }
      }
    
      function setTitle() {
        $(".title img").delay("1000").animate({
          marginTop: "0%",
          opacity: "1"
        }, 1000);
      }
    
      // Initalize bubbles
      function setBubbles() {
    
        bubbleArray.push(new Bubble($(".bubble-01"), "about.html", "bubble-01",   15, 5,  40, 10, 20));
        bubbleArray.push(new Bubble($(".bubble-02"), "team.html", "bubble-02",    25, 40, 50, 35, 30));
        bubbleArray.push(new Bubble($(".bubble-03"), "gallery.html", "bubble-03", 20, 80, 40, 60, 20));
    
        bubbleArray[0].domReference.on("mouseenter", function() {
          if(!bubbleArray[0].isAnimating && !bubbleArray[0].goingToCenter && !bubbleArray[0].atCenter) {
            clearCenter(0);
            bubbleArray[0].handleMouseEnter();
          }
        });
    
        bubbleArray[0].domReference.on("mouseleave", function() {
          bubbleArray[0].handleMouseLeave();
        });
    
        bubbleArray[0].domReference.on("click", function() {
          redirect(0);
        });
    
        bubbleArray[1].domReference.on("mouseenter", function() {
          if(!bubbleArray[1].isAnimating && !bubbleArray[1].goingToCenter && !bubbleArray[1].atCenter) {
            clearCenter(1);
            bubbleArray[1].handleMouseEnter();
          }
        });
    
        bubbleArray[1].domReference.on("mouseleave", function() {
          bubbleArray[1].handleMouseLeave();
        });
    
        bubbleArray[1].domReference.on("click", function() {
          redirect(1);
        });
    
        bubbleArray[2].domReference.on("mouseenter", function() {
          if(!bubbleArray[2].isAnimating && !bubbleArray[2].goingToCenter && !bubbleArray[2].atCenter) {
            clearCenter(2);
            bubbleArray[2].handleMouseEnter();
          }
        });
    
        bubbleArray[2].domReference.on("mouseleave", function() {
          bubbleArray[2].handleMouseLeave();
        });
    
        bubbleArray[2].domReference.on("click", function() {
          redirect(2);
        });
    
        function redirect(index) {
          $(".black-background").animate({
            opacity: 1
          }, 1000 );
          $(".container").animate({
            right: "100%",
          }, 1000, function() {
            window.location = bubbleArray[index].hyperlink;
          });
    
        }
      }

    });
  
  });
  