class Bubble {
  
     constructor(domReference, link, className, width, left, top, defaultLeft, defaultTop) {
       console.log("Created new bubble: "+link);
  
       this.leaveIntervalId;
       this.atCenter = false;
       this.goingToCenter = false;
       this.isAnimating = false;
  
       this.domReference = domReference
       this.hyperlink = link
       this.className = className;
       this.width = width;
       this.left = left
       this.top = top
       this.defaultLeft = defaultLeft;
       this.defaultTop = defaultTop;
  
       this.domReference.css({"width":this.width+"%"});
       this.moveBubbleBack();
     }
  
     moveBubbleBack() {
       var scope = this;
       this.isAnimating = true;
       this.atCenter = false;
       this.domReference.animate({
         top: this.top+"%",
         left: this.left+"%",
         width: this.width+"%",
         zIndex: 1
       }, 1000, function() {
         scope.isAnimating = false;
         scope.domReference.css({"z-index":1});
         scope.idleAnimation();
       });
     }
  
     // Move the bubble to the center of the viewport
     moveBubbleToCenter() {
       var scope = this;
       this.isAnimating = true;
       this.goingToCenter = true;
       this.domReference.clearQueue();
       this.domReference.css({"z-index":5});
       this.domReference.animate({
         top: this.defaultTop+"%",
         left: this.defaultLeft+"%",
         width: "30%",
       }, 1000, function() {
         scope.isAnimating = false;
         scope.goingToCenter = false;
         scope.atCenter = true;
       });
     };
  
     handleMouseEnter() {
      this.moveBubbleToCenter();
     }
  
     handleMouseLeave() {
      if(this.atCenter) {
        console.log("Mouseout: "+this.className);
        this.moveBubbleBack();
      }
     }
  
     queueMouseLeave() {
       console.log("Leaving "+this.className);
      if(this.goingToCenter && this.leaveIntervalId == null) {
        var scope = this;
        this.leaveIntervalId = setInterval(function() { scope.queueMouseLeave() }, 100);
      } else if(this.atCenter) {
        clearInterval(this.leaveIntervalId);
        this.leaveIntervalId = null;
  
        console.log("Mouseout: "+this.className);
        this.moveBubbleBack();
      } else {  
        console.log("Mouseout busy: "+this.className);
      }
     }
  
      idleAnimation() {
        if(!this.isAnimating) {
          var scope = this;
          this.domReference.animate({
            top: (this.top-1)+"%",
            left: (this.left-0.5)+"%",
            width: (this.width+1)+"%",
          }, 1000).animate({
            top: this.top+"%",
            left: this.left+"%",
            width: this.width+"%",
          }, 1000, function() {
            if(!scope.isAnimating){
              scope.idleAnimation();
            }
          });
        }
      }
  }
  