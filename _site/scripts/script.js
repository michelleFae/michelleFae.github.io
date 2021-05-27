/* bubbles */
var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("main"));

/* keeps track of all existing bubbles on screen */
bubbles = [];

/* bubble variables to determine bubble interaction pyhsics." */
const d = 5000;
const o = 0.7; 
const r = 0.001;
const f = 0.0025;
const p = 0.00000001;
/* radius of smallest bubble. */ 
const minbub = 10;
/* radius of biggest bubble. */ 
const maxbub = 50;
/* offset of bubble from cursor. */ 
const cursorXOffset = 5;
const cursorYOffset = -800;

/* generates a new bubble at coordinate (X,Y), of size SIZE, of color COLOR." */
function newBubble(x, y, size, color)
{
	var bubble = document.createElement("DIV");
	bubble.setAttribute('class', 'bubble');
	bubble.style = "background-color : " + color + ";";
	bubble.bubbleSize = size;
	bubble.style.height = bubble.bubbleSize * 2 + "px";
	bubble.style.width = bubble.bubbleSize * 2 + "px";
	bubble.time = d;
	bubble.velocity = [];
	bubble.velocity.x = 0;
	bubble.velocity.y = 0;
	bubble.position = [];
	bubble.position.x = x;
	bubble.position.y = y;
	bubble.style.left = bubble.position.x - bubble.bubbleSize + 'px';
	bubble.style.top = bubble.position.y - bubble.bubbleSize + 'px';				
	
	// attach the bubble to the div so it is seen
	brd.appendChild(bubble);
	bubbles.push(bubble);
	return bubble;
}

var msedwn = false;

document.onmousedown = function(e) {
	msedwn = true;
}

document.onmouseup = function(e) {
	msedwn = false;
}

document.onmousemove = function(e) {
	if(msedwn)
		generateBubbles(e.pageX - brd.offsetLeft + cursorXOffset, e.pageY - brd.offsetTop + cursorYOffset);
}

document.ontouchmove = function(e) {
	generateBubbles(e.touches[0].pageX, e.touches[0].pageY);
}

/* chooses bubble color and size  randomly */
function generateBubbles(x, y)
{

	var size = Math.random() * (maxbub - minbub ) + minbub;

	var size = minbub + (maxbub - minbub) * Math.random();

	var digits = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 4; i++) {
		color += digits[Math.floor(Math.random() * 16)];
	}
	color += 'FF'

	newBubble(x, y + 900, size, color);
}

function bubblePushAround(deltaTime)
{
	for(i = 0; i < bubbles.length; i++)
	{
		for(j = i + 1; j < bubbles.length; j++)
		{
			var bubbleOne = bubbles[i];
			var bubbleTwo = bubbles[j];
			var Dx = bubbleOne.position.x - bubbleTwo.position.x;
			var Dy = bubbleOne.position.y - bubbleTwo.position.y;
			var D2 = Dx * Dx + Dy * Dy;
			var R12 = bubbleOne.bubbleSize * bubbleOne.bubbleSize;
			var R22 = bubbleTwo.bubbleSize * bubbleTwo.bubbleSize;
			if(D2 < R12 + R22)
			{
				var D = Math.sqrt(D2);
				var F1 = (D2 - (R12 + R22)) * R22;
				var F2 = (D2 - (R12 + R22)) * R12;
				bubbleOne.velocity.x -= F1 * p * Dx / D * deltaTime;
				bubbleOne.velocity.y += F1 * p * Dy / D * deltaTime;
				bubbleTwo.velocity.x += F2 * p * Dx / D * deltaTime;
				bubbleTwo.velocity.y -= F2 * p * Dy / D * deltaTime;
			}
		}
	}
}

var before = Date.now();
var id = setInterval(frame, 5);


function frame()
{
	var current = Date.now();
	var deltaTime = current - before;
	before = current;
	bubblePushAround(deltaTime);
	for(i in bubbles)
	{
		var bubble = bubbles[i];
		bubble.time -= deltaTime;
		if(bubble.time > 0)
		{
			bubble.velocity.y += f * deltaTime;
			bubble.velocity.x -= bubble.velocity.x * r * bubble.bubbleSize * deltaTime;
			bubble.velocity.y -= bubble.velocity.y * r * bubble.bubbleSize * deltaTime;
			bubble.position.x += bubble.velocity.x * deltaTime;
			bubble.position.y -= bubble.velocity.y * deltaTime;
			bubble.style.left = bubble.position.x - bubble.bubbleSize + 'px';
			bubble.style.top = bubble.position.y - bubble.bubbleSize + 'px';
			bubble.style.opacity = o * (bubble.time / d);
		}
		else
		{
			bubble.parentNode.removeChild(bubble);
			bubbles.splice(i, 1);
		}
	}
}


// fade in text
$(function() {

  var html = $('html');
  // Detections
  if (!("ontouchstart" in window)) {
    html.addClass("noTouch");
  }
  if ("ontouchstart" in window) {
    html.addClass("isTouch");
  }
  if ("ontouchstart" in window) {
    html.addClass("isTouch");
  }
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    if (navigator.appVersion.indexOf("Trident") === -1) {
      html.addClass("isEDGE");
    } else {
      html.addClass("isIE isIE11");
    }
  }
  if (navigator.appVersion.indexOf("MSIE") !== -1) {
    html.addClass("isIE");
  }
  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1
  ) {
    html.addClass("isSafari");
  }

  // On Screen

  $.fn.isOnScreen = function() {
    var elementTop = $(this).offset().top,
      elementBottom = elementTop + $(this).outerHeight(),
      viewportTop = $(window).scrollTop(),
      viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  function detection() {
    for (var i = 0; i < items.length; i++) {
      var el = $(items[i]);

      if (el.isOnScreen()) {
        el.addClass("in-view");
      } else {
        el.removeClass("in-view");
      }
    }
  }

  var items = document.querySelectorAll(
    "*[data-animate-in], *[data-detect-viewport]"
  ),
    waiting = false,
    w = $(window);

  w.on("resize scroll", function() {
    if (waiting) {
      return;
    }
    waiting = true;
    detection();

    setTimeout(function() {
      waiting = false;
    }, 100);
  });

  $(document).ready(function() {
    setTimeout(function() {
      detection();
    }, 500);

    for (var i = 0; i < items.length; i++) {
      var d = 0,
        el = $(items[i]);
      if (items[i].getAttribute("data-animate-in-delay")) {
        d = items[i].getAttribute("data-animate-in-delay") / 1000 + "s";
      } else {
        d = 0;
      }
      el.css("transition-delay", d);
    }
  });
});


