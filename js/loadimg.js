$(function() {

	$.post("json/lunbo.json", function(data) {
		for(var i = 0; i < data["banner"].length; i++) {
			$(".banner-img img")[i].src = "images/" + data["banner"][i][0]

		};
		for(var i = 0; i < data["small"].length; i++) {
			$(".right img")[i].src = "images/" + data["small"][i][0]
		};
		for(var i = 0; i < data["piclist"].length; i++) {
			$(".piclist img")[i].src = "images/" + data["piclist"][i][0]
		}
		for(var i = 0; i < data["nav-2"].length; i++) {
			$(".left-icon").append("<a href=''><img src='images/" + data["nav-2"][i][0] + "'></a>")
		};
		$(".topadv").append("<a href=''><img src='images/" + data["topadv"][0][0] + "'></a>");
		for(var i = 0; i < data["news"].length; i++) {
			$(".news").append("<li><span></span><a href=''>" + data["news"][i][0] + "</a></li>")
		}
		for(var i = 0; i < data["hotbanner"].length; i++) {
			$(".hotbanner").append("<a href=''><img src='images/" + data["hotbanner"][i][0] + "'/></a>")
		}
		for(var i = 0; i < data["smallbanner"].length; i++) {
			$(".smallbanner").append("<a href=''><img src='images/" + data["smallbanner"][i][0] + "'/></a>")
		}


		
		silder1();
		silder2();
	})

})