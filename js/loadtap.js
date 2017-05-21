$(function() {
	$.post("json/hotmain.json", function(data) {
		//floor 1
		function first(){
			for(var i = 0; i < data["0"]["3"].length; i++) {
			$(".floor1 .left_banner").append("<a href=''><img src='images/" + data["0"]["3"][i][0] + "'/></a>")
		}
		$(".floor1 .footbanner").append("<img src='images/" + data["0"]["4"] + "'/>")
		for(var i in data["0"]["0"]) {
			$(".floor1 .product_list").append("<li><a href='"+data["0"]["0"][i][4]+"'  class='lin'><img src='images/" + data["0"]["0"][i][0] + "'/>" + "<div class='name'>" + data["0"]["0"][i][1] + "</div><div><span class='small'>" + data["0"]["0"][i][2] + "</span><span class='price'>" + data["0"]["0"][i][3] + "</span>" + "</a></li>")
		}
		$(".floor1 .tap1 a").mouseenter(function() {
			$(this).css({
				"background": "#df1b1e",
				"color": "#fff"
			})
			$(".tap1 a").not(this).css({
				"background": "#fff",
				"color": "#000"
			})
			var ind = $(this).index()
			for(var i in data["0"][ind]) {
				$(".floor1 .product_list li img").eq(i).attr("src", "images/" + data["0"][ind][i][0]);
				$(".floor1 .product_list li .name").eq(i).html(data["0"][ind][i][1]);
				$(".floor1 .product_list li .small").eq(i).html(data["0"][ind][i][2]);
				$(".floor1 .product_list li .price").eq(i).html(data["0"][ind][i][3]);
				$(".floor1 .product_list li .lin").eq(i).attr("href",data["0"][ind][i][4]);
			}
		})
		}
		
		//楼层获取数据
		function fn(a,b,c){
			
			for(var i = 0; i < data[a]["7"].length; i++) {
			$(b).find(".left_banner").append("<a href=''><img src='images/" + data[a]["7"][i] + "'/></a>")
		}

		$(b).find(".footbanner").append("<img src='images/" + data[a]["8"] + "'/>")
		
		
		for(var i in data[a]["0"]) {
			
			$(b).find(" .product_list").append("<li><a class='link' href='"+data[a]["0"][i][4]+"'><img src='images/" + data[a]["0"][i][0] + "'/>" + "<div class='name'>" + data[a]["0"][i][1] + "</div><div><span class='small'>" + data[a]["0"][i][2] + "</span><span class='price'>" + data[a]["0"][i][3] + "</span>" + "</a></li>")
		}
		$(b).find(".tap1 a").mouseenter(function() {
			var ind = $(this).index()
			$(this).css({
				"background": c,
				"color": "#fff"
			})
			$(b).find(".tap1 a").not(this).css({
				"background": "#fbfafa",
				"color": "#000"
			})
			
			for(var i in data[a][ind]) {
				$(b).find(".product_list li img").eq(i).attr("src", "images/" + data[a][ind][i][0]);
				$(b).find(".product_list li .name").eq(i).html(data[a][ind][i][1]);
				$(b).find(".product_list li .small").eq(i).html(data[a][ind][i][2]);
				$(b).find(".product_list li .price").eq(i).html(data[a][ind][i][3]);
				$(b).find(".product_list li .link").eq(i).attr("href",data[a][ind][i][4]);
			}
		})

		for(var i in data[a]["9"]) {
			$(b).find(" .tabcontent").append("<li><span class='i_yeicon'>" + (Number(i)+1) + "</span><a href='"+data[a]["9"][i][1][5]+"' class='hotbookname text-overflow'>" + data[a]["9"][i][0] + "</a><div class='info'><a href='"+data[a]["9"][i][1][5]+"'><img src='images/" + data[a]["9"][i][1][0] + "'/></a><span class='hotbookprice'>" + data[a]["9"][i][1][2] + "</span><span class='small'>" + data[a]["9"][i][1][3] + "</span><span class='nub'>销售量：<b>" + data[a]["9"][i][1][4] + "</b></span></div></li>")
		}
		$(b).find(".tabcontent li").eq(0).addClass("cur")
		$(b).find(".tabcontent li").mouseenter(function() {
			$(this).addClass("cur")
			$(b).find(".tabcontent li").not(this).removeClass("cur")
		})
		}
		
		//partner
		
		function partner(){
			for (var i=0;i<data["7"].length;i++) {
				$(".partner ul").append("<li><a href=''><img src='images/"+data["7"][i]+"'/></a></li>")
			}
		}
		
		
		
		first();
		partner()
		fn(1,".floor2","#f60");
		fn(2,".floor3","#61bf63");
		fn(3,".floor4","#ff6b6b");
		fn(4,".floor5","#3ba6f9");
		fn(5,".floor6","#d840a5");
		fn(6,".floor7","#9888d0");
	})

})