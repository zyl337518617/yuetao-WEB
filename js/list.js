function list() {
	//分类：鼠标放上出现，离开消失
	this.li = "";
	this.ch = "";
	this.li1 = "";
	this.ch1 = "";
	var _me = this;

	this.linkhove = function() {
			$("#lr_systembtn").hover(function() {
				//			console.log(1)
				$(".all-sort-list").css("display", "block")
			}, function() {
				$(".all-sort-list").css("display", "none")
			})
		}
		//创建ul li
	this.loadtype = function() {
		$.post("json/lists.json", null, function(data, textStatus) {

			if(textStatus == "success") {
				for(var i in data["1"]["type"]) {
					_me.li += ("<li>" + data["1"]["type"][i]["name"] + "</li>")
					_me.ch += ("<li><input type='checkbox' class='check' /><a href=''>" + data["1"]["type"][i]["name"] + "</a></li>")
				}
				$(".value").eq(0).append("<ul class='flist'>" + _me.li + "</ul>")
				$(".value").eq(0).append("<ul id='check'>" + _me.ch + "</ul>")
				$(".value").eq(0).append("<div class='v-btns' ><a class='btn-red' href='javascript:'>确定</a><a class='btn-gray' href='javascript:'>取消</a></div>")
				$(".value").eq(0).find("ul").eq(0).addClass("list")
				$(".value").eq(0).find("ul").eq(1).addClass("listall");
				$(".listall").addClass("none")
				_me.change()

				for(var i in data["2"]["type"]) {
					_me.li1 += ("<li>" + data["2"]["type"][i]["name"] + "</li>")
					_me.ch1 += ("<li><input type='checkbox' class='check' /><a href=''>" + data["2"]["type"][i]["name"] + "</a></li>")
				}
				$(".value").eq(2).append("<ul class='flist'>" + _me.li1 + "</ul>")
				$(".value").eq(2).append("<ul id='check1'>" + _me.ch1 + "</ul>")
				$(".value").eq(2).append("<div class='v-btns' ><a class='btn-red' href='javascript:'>确定</a><a class='btn-gray' href='javascript:'>取消</a></div>")
				$(".value").eq(2).find("ul").eq(0).addClass("list")
				$(".value").eq(2).find("ul").eq(1).addClass("listall");

				$(".listall").addClass("none")

				_me.change1()

				for(var i in data["3"]) {
					$(".p_c ul").append("<li class='pdt'><div><a href=''><img src='" + data["3"][i]["img"] + "'/></a></div><p><a href='' class='p_hotbooktitle'>" + data["3"][i]["b_detail"] + "</a></p><p class='price'>" + data["3"][i]["b_price"] + "</p></li>")
				}
			}

		})
	}

	//点击更多
	this.change = function() {
			var flag = true;
			var flag1 = true;
			var arr = [];
			//点击更多
			$(".value").eq(0).find(".o_more").click(function() {
					if(flag == false) {
						if(flag1 == true) {
							$(".arrt").eq(0).removeClass("attr-select")
						}
						$(".flist").eq(0).addClass("list");

						$(".o_more").eq(0).html("更多")
						flag = true;
					} else {
						$(".flist").eq(0).removeClass("list");
						$(".arrt").eq(0).addClass("attr-select");
						$(".o_more").eq(0).html("收起")
						flag = false;
					}
				})
				//点击多选
			$(".value").eq(0).find(".o_multiploe").click(function() {
					if(flag1 == false) {
						if(flag == true) {
							$(".arrt").eq(0).removeClass("attr-select")
						}
						$(".listall").eq(0).css("display", "none");
						$(".flist").eq(0).css("display", "block");
						$(".v-btns").eq(0).css("display", "none")
						$(".o_multiploe").eq(0).html("多选")
						flag1 = true;
					} else {
						$(".arrt").eq(0).addClass("attr-select");
						$(".listall").eq(0).css("display", "block");
						$(".flist").eq(0).css("display", "none");
						$(".o_multiploe").eq(0).html("取消");
						$(".v-btns").eq(0).css("display", "block")
						flag1 = false;
					}
				})
				//点击取消
			$(".value").eq(0).find(".btn-gray").click(function() {
					$(".flist").eq(0).css("display", "block");
					$(".arrt").eq(0).removeClass("attr-select");
					$(".o_multiploe").eq(0).html("多选");
					$(".listall").eq(0).css("display", "none");
					$(".v-btns").eq(0).css("display", "none");
					flag = true;
					flag1 = true;

				})
				//点击确定
			$(".value").eq(0).find(".btn-red").click(function() {

					var check = document.getElementById("check")
					var _checked = check.getElementsByTagName("input")
					var _a = check.getElementsByTagName("a")
					for(var i = 0; i < _checked.length; i++) {
						if(!_checked[i]["checked"]) {} else {
							arr.push(_a[i].innerHTML)
						}
					}
					if(arr.length > 0) {
						$(".arrt").eq(0).css("display", "none");
						for(var i = 0; i < arr.length; i++) {
							$(".ss-item").eq(0).append("<span class='type'>" + arr[i] + ",</span>")

						}
						$(".ss-item").eq(0).css("display", "block")

					}
					arr = [];

				})
				//点击上面生成的
			$(".ss-item").eq(0).click(function() {
				$(".arrt").eq(0).css("display", "block");
				$(".listall").eq(0).css("display", "none");
				$(".flist").eq(0).css("display", "block");
				$(".v-btns").eq(0).css("display", "none");
				$(".arrt").eq(0).removeClass("attr-select")
				$(".o_multiploe").eq(0).html("多选");
				flag = true;
				flag1 = true;
				$(this).css("display", "none")
				$(this).html("")
			})

		}
		//第二个点击事件
	this.change1 = function() {
		var flag = true;
		var flag1 = true;
		var arr = [];
		//点击更多
		$(".value").eq(2).find(".o_more").click(function() {
				if(flag == false) {
					if(flag1 == true) {
						$(".arrt").eq(2).removeClass("attr-select")
					}
					$(".flist").eq(1).addClass("list");

					$(".o_more").eq(1).html("更多")
					flag = true;
				} else {
					$(".flist").eq(1).removeClass("list");
					$(".arrt").eq(2).addClass("attr-select");
					$(".o_more").eq(1).html("收起")
					flag = false;
				}
			})
			//点击多选
		$(".value").eq(2).find(".o_multiploe").click(function() {
				if(flag1 == false) {
					if(flag == true) {
						$(".arrt").eq(2).removeClass("attr-select")
					}
					$(".listall").eq(1).css("display", "none");
					$(".flist").eq(1).css("display", "block");
					$(".v-btns").eq(1).css("display", "none")
					$(".o_multiploe").eq(1).html("多选")
					flag1 = true;
				} else {
					$(".arrt").eq(2).addClass("attr-select");
					$(".listall").eq(1).css("display", "block");
					$(".flist").eq(1).css("display", "none");
					$(".o_multiploe").eq(1).html("取消");
					$(".v-btns").eq(1).css("display", "block")
					flag1 = false;
				}
			})
			//点击取消
		$(".value").eq(2).find(".btn-gray").click(function() {
				$(".flist").eq(1).css("display", "block");
				$(".arrt").eq(2).removeClass("attr-select");
				$(".o_multiploe").eq(1).html("多选");
				$(".listall").eq(1).css("display", "none");
				$(".v-btns").eq(1).css("display", "none");
				flag = true;
				flag1 = true;

			})
			//点击确定父级消失
		$(".value").eq(2).find(".btn-red").click(function() {

				var check = document.getElementById("check1")
				var _checked = check.getElementsByTagName("input")
				var _a = check.getElementsByTagName("a")
				for(var i = 0; i < _checked.length; i++) {
					if(!_checked[i]["checked"]) {} else {
						arr.push(_a[i].innerHTML)
					}
				}
				if(arr.length > 0) {
					$(".arrt").eq(2).css("display", "none");
					for(var i = 0; i < arr.length; i++) {
						$(".ss-item").eq(1).append("<span class='type'>" + arr[i] + ",</span>")

					}
					$(".ss-item").eq(1).css("display", "block")

				}
				arr = [];

			})
			//点击生成的ss-item,恢复
		$(".ss-item").eq(1).click(function() {
			$(".arrt").eq(2).css("display", "block");
			$(".listall").eq(1).css("display", "none");
			$(".flist").eq(1).css("display", "block");
			$(".v-btns").eq(1).css("display", "none");
			$(".arrt").eq(2).removeClass("attr-select")
			$(".o_multiploe").eq(1).html("多选");
			flag = true;
			flag1 = true;
			$(this).css("display", "none")
			$(this).html("")
		})
	}

	this.func = function() {
		_me.linkhove();
		_me.loadtype();
		_me.change();
		_me.change1();

	}

}

function pageDivide() {
	var _me = this;
	this.data = null;
	this.start = 0;
	this.size = 20;
	this.count = 10;
	this.pn = 0;
	this.createButton = function() {
		var _code = "<span class = \"root\"><span class='btnleft'>上一页</span>";
		for(var i = 0; i < this.count && i < this.pn; i++) {
			_code += "<span class='spanbtn'>" + (this.start / this.size + i + 1) + "</span>";
		}
		_code += "<span class='btnright'>下一页</span></span>";
		$(".laypageskin_default").html(_code)

		$(".spanbtn").eq(0).css("border", "none")
		$(".laypageskin_default .root span").on("click", function() {
			if(this.className == "spanbtn" && (parseInt(this.innerText) <= 10)) {
				_me.start = _me.size * (parseInt(this.innerText) - 1);
				$(this).css("border", "none").siblings().css("border", "1px solid #ccc")
				_me.showData();
			} else if(this.className == "btnleft" && _me.start > 1) {
				//				var a=_me.start;
				//				console.log(a);
				$(".spanbtn").eq(_me.start / _me.size - 1).css("border", "none").siblings().css("border", "1px solid #ccc")
				_me.start = _me.start - _me.size;
				_me.showData();

			} else if(this.className == "btnright" && _me.start < 180) {
				$(".spanbtn").eq(_me.start / _me.size + 1).css("border", "none").siblings().css("border", "1px solid #ccc")
				_me.start = _me.start + _me.size;
				_me.showData();
			}

		})
	}
	this.showData = function() {
		var _code = "";
		for(var i = this.start; i < (this.start + this.size); i++) {
			_code += "<li><div class='img'><a href='xiangqing.html?goodid="+this.data["4"][i][5]+"'><img src='" + this.data["4"][i][0] + "'/></a></div><div class='price'><span class='now'>" + this.data["4"][i][1] + "</span><span class='befor'>" + this.data["4"][i][2] + "</span></div><div class='name'><a href=''>" + this.data["4"][i][3] + "</a></div><div class='time'>" + this.data["4"][i][4] + "</div><div class='btn'><a href=''>加入购物车</a></div><div class='btn1'><a href=''>收藏</a></div></li>"
			$("#container").html(_code);
		}

	}
	this.loadImage = function() {
		$.post("json/lists.json", null, function(data, textStatus) {
			if(textStatus == "success") {
				_me.data = data;
				_me.showData();
				_me.pn = Math.ceil(_me.data["4"].length / _me.size);
				_me.createButton();

			}
		})
	}

}

function change(){
	this.data=null;
	var _me=this;
	this.start = 0;
	this.size = 6;
	this.oncl=function(){
		$(".buttorn").click(function(){
			if(_me.start<(_me.data["5"].length/_me.size-1)*_me.size){
				_me.start=_me.start + _me.size
				_me.forj()
			}else{
				_me.start=0;
				_me.forj();
			}
		})
	}
	this.forj=function(){
		var _code = "";
		for(var i=this.start;i< (this.start + this.size);i++){
			_code+="<li><a href=''><img src='"+this.data["5"][i][0]+"'></a><p class='price'><span class='new_price'>"+this.data["5"][i][1]+"</span><span class='old_price'>"+this.data["5"][i][2]+"</span></p><p class='name'><a href=''>"+this.data["5"][i][3]+"</a></p></li>"
		}
		$(".read").html(_code);
	}
	this.loadch=function(){
		
		$.post("json/lists.json", null, function(data, textStatus) {
			if(textStatus == "success") {
				_me.data=data;
				_me.forj()
				_me.oncl()
			}
		})
	}
}

function main() {
	var _list = new list();
	_list.func();
	var page = new pageDivide();
	page.loadImage()
	var _change=new change();
	_change.loadch()
	$(".footcontentinfo").load("html/foot.html")
}
window.onload = main;