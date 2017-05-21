//输入框提示
function _input(){
	$("#input").on("input", function() {		
				var valu = $(this).val();
				$("#ti").css({
						"display": "block"
					});
					var value="";
					function fx(data) {
						for(var ke in data["result"]) {
						value+="<a href='#'>"+data["result"][ke][0]+"</a>"+ "<br/>";
							$("#ti").html(value) ; 

						$("#ti a").click(
							function(){
								$("#input").val(this.innerText)
							$("#ti").css("display","none")
							}
						)
						}
						if(valu == "") {
							$("#ti")[0].innerHTML = "";
							$("#ti").css({
								"display": "none"
							});
						}

					}
					var url = "https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?";
					$.getJSON(url, fx);

				})
	
}

//获取列表
function _loadlist(){
	$.post("json/list.json", function(data) {
		var _data = data;
		var name = [];
		var _smname = [];
		var _child = [];
		var _sn = [];
		var _sn1 = [];
		var a = new Array();
		for(var k in _data) {
			name.push(_data[k]["c_name"]);
			_smname.push(_data[k]["children"])

		}

		for(var i = 0; i < name.length; i++) {
			$(".showname a").eq(i).html(name[i]);
		}

		(function link1() {
			for(var a = 0; a < 4; a++) {
				_child.push(_smname[a])

				for(var i in _smname[a]) {

					$(".item p").eq(a).append("<a href='#'>" + _smname[a][i]["name"] + "</a>")

				}
			}
		})();
		for(var i in _child[0]) {

			$(".item-list").eq(0).append("<dl class='fore01'><dt><a href='#'>" + _child[0][i]["name"] + "</a></dt></dl>")
			_sn.push(_child[0][i]["children"])
		}

		var a = 0;

		function fx() {
			for(var j in _sn[a]) {
				$(".item-list dl").eq(a).append("<dd><a href='" + _sn[a][j]["url"] + "'>" + _sn[a][j]["type"] + "</a></dd>")
			}
			a += 1;
			if(a < $(".item-list dl").length) {
				return fx()
			};
		}
		fx()
		_sn = []

		for(var i in _child[1]) {
			$(".item-list").eq(1).append("<dl class='fore03'><dt><a href='#'>" + _child[1][i]["name"] + "</a></dt></dl>")
			_sn.push(_child[1][i]["children"])

		}
		var b = 0;

		function fll() {
			for(var j in _sn[b]) {

				$(".fore03").eq(b).append("<dd><a href='" + _sn[b][j]["url"] + "'>" + _sn[b][j]["type"] + "</a></dd>");

			}

			b += 1;
			if(b < $(".fore03").length) {

				return fll();
			};
		}
		fll();
		_sn = []
		for(var i in _child[2]) {
			$(".item-list").eq(2).append("<dl class='fore04'><dt><a href='#'>" + _child[2][i]["name"] + "</a></dt></dl>")
			_sn.push(_child[2][i]["children"])

		}
		var b = 0;

		function fl1() {
			for(var j in _sn[b]) {

				$(".fore04").eq(b).append("<dd><a href='" + _sn[b][j]["url"] + "'>" + _sn[b][j]["type"] + "</a></dd>");

			}

			b += 1;
			if(b < $(".fore04").length) {

				return fl1();
			};
		}
		fl1()

		for(var h in _child[3]) {
			$(".item-list").eq(3).append("<dl class='fore04'><dt><a href='#'>" + _child[3][h]["name"] + "</a></dt></dl>")

		}

	$(".all-sort-list .item").hover(function() {
		$(this).children(3).css({
			"display": "block",
			"z-index": "999"
		})
		$(this).children(1).children(1).css("color", "#e4393c")

		$(this).css("background", "#fff")
	}, function() {
		$(" .item-list").css("display", "none")
		$(this).css("background", "#c81623")
		$(this).children(1).children(1).css("color", "#fff")
	})
	
	
	})
}
