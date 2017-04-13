function silder1() {

    var container = $("#container");
    var banners=$("#banners")
    var oneWidth = container.find("li").eq(0).width();//找到第一个Width

    //找到dian
    var numbers = $("#dot_box span");
    var index = 0;
    var timer = 0;
    var arr = ["#d2c9c4", "#53751e", "#080709", "#062156", "#2f2221"];
    //给每一个点添加点击事件
    numbers.on("click", function () {
        $(this).addClass("dot_show").siblings(".dot_default").removeClass("dot_show");
        index = $(this).index();
        banners.css("background",arr[index-1])
       container.stop().animate({
            "left": -(oneWidth * index)
        });
    });
    $("#next").stop(true, true).click(function () {
    	clearInterval(timer);
        index++;
        if (index == numbers.length) {
            index = 0
        }
      numbers.eq(index).trigger("click");
    });
    $("#prev").stop(true, true).click(function () {
    	clearInterval(timer);
        index--;
        if (index == numbers.length) {
            index = 0
        }
        numbers.eq(index).trigger("click");
    });
    timer = setInterval(function () {
        index++;
        if (index == numbers.length) {
            index = 0
        }
    numbers.eq(index).trigger("click");
    }, 2000);
    container.hover(function () {
        $("#next,#prev").animate({
            opacity: "1"
        }, 200);
        clearInterval(timer);
    }, function () {
        $("#next,#prev").animate({
            "opacity": 0
        }, 500);
        timer = setInterval(function () {
            index++;
            if (index == numbers.length) {
                index = 0
            }
            numbers.eq(index).trigger("click");
        },2000);
    })
}



function silder2(){
	var piclist=$("#piclist");
	var _width=$("#piclist ul").eq(0).width();
	
	var span_left=$("#span_left");
	var span_right=$("#span_right")
	var index=0;
	var num=$("#piclist ul");
	var point_sp=$(".point-sp span");

	
	
	timer =window.setInterval(function () {
        index++;
        if (index ==num.length) {
            index = 0
        }
        piclist.animate({
            "left": -(_width * index)
        },400)
        span_left.trigger("click");
	},4000)
	span_left.stop().on("click",function(){
		index--;
        if (index <0) {
            index =num.length-1
        }
		piclist.stop().animate({
            "left": -(_width * index)
        },400)}
	)
	span_right.stop(true, true).click(function () {
        index++;
        if (index == num.length) {
            index = 0
            piclist.css("left", -(_width * index))
        }
     piclist.stop().animate({
            "left": -(_width * index)
        },400)
    });
	
	point_sp.hover(function () {
        
        window.clearInterval(timer);
    }, function () {
        
       timer = setInterval(function () {
        index++;
        if (index ==num.length) {
            index = 0
        }
        piclist.animate({
            "left": -(_width * index)
        },400)
        
	},4000)
    })

}