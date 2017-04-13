function getScrollTop() {
	var scrollTop = 0;
	if(document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if(document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

function hover(){
	for (var i=0;i<$(".fr div").length;i++) {
		
		$(".fr>div").eq(i).hover(function(){
			$(this).css("opacity",0.9)
			$(this).children("div").css({"display":"block","opacity":"1"})
		},function(){
			$(this).children("div").css("display","none")
			$(this).css("opacity",1)
		})
	}
}

$(window).scroll(function() {
	var top = getScrollTop();
	if(top > 66) {
		$(".totop").css("display", "block")
		if(top >= 66 && top < 100) {
			$(".adv1").eq(0).stop().animate({
				"top": "520px"
			}, 400)
		} else {
			$(".adv1").eq(0).stop().animate({
				"top": "400px"
			}, 400)
		}
	} else {
		$(".totop").css("display", "none")
		$(".adv1").eq(0).stop().animate({
			"top": "520px"
		}, 100)
	}
	var timer = 0;
	$(".totop").click(function() {
			top=$(window).scrollTop()
		function fx() {
			top -=100;
			window.scrollTo(0, top)
			if(top <= 0) {
				top=0;
				window.clearInterval(timer)
			}
		}
		timer = window.setInterval(fx, 5)

	})
	
	hover()
	
})
