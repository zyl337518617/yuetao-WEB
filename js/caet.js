function hover1() {
	//鼠标放上导航出现
	this.linkhove = function() {
		$("#lr_systembtn").hover(function() {
			//			console.log(1)
			$(".all-sort-list").css("display", "block")
		}, function() {
			$(".all-sort-list").css("display", "none")
		})
	}

}

//处理cookie，转化成好操作的数组
function cookieload1() {
	var _cookie = document.cookie;
	this.num = 0;
	this.isbn = 0;
	var _me = this;
	this.arr = [];
	this.data = null;
	this.flag = true;
	this.loadcook1 = function() {
		//		var a=/isbn(\d+-)+\d+=/g;
		if(/isbn(\d+-)+\d+=/g.test(_cookie)) {
			var a = [];
			var b = 0;
			var c = [];
			_me.isbn = _cookie.match(/isbn(\d+-)+\d+=\d,(\d+-)+\d+/g);
			for(var i = 0; i < _me.isbn.length; i++) {
				a.push(_me.isbn[i].replace(/isbn(\d+-)+\d+=/, ""))
			}
			for(var i = 0; i < a.length; i++) {
				_me.arr.push(a[i].split(","));
			}

		}

	}

	//加载cookie，创建元素
	this.loadcart = function() {

			for(var i = 0; i < _me.arr.length; i++) {
				$(".listbody").append("<div class='list'><div class='check fl w50'><input type='checkbox' class='cl' /></div><div class='title fl w400'><div class='fl'><a href='###'><img src='" + _me.data[_me.arr[i][1]]["img"] + "'/></a></div><div class='fl w250 f12 p5'><a href='###'>" + _me.data[_me.arr[i][1]]["name"] + "</a></div></div><div class='sprice fl w200'><div class='new_price'>" + _me.data[_me.arr[i][1]]["new_price"] + "</div><div class='crossline'>" + _me.data[_me.arr[i][1]]["old_price"] + "</div></div><div class='qty fl w150'><div><input type='button' value='-'  class='minus " + _me.arr[i][1] + "'/><input  class='val w30 center' type='text' value='" + _me.arr[i][0] + "'/><input type='button' value='+' class='add' id='" + _me.arr[i][1] + "'/></div><div class='qtytips'><span>" + _me.data[_me.arr[i][1]]["num"] + "</span></div></div><div class='cost1 fl w150 bfont'>" + Number(_me.arr[i][0] * _me.data[_me.arr[i][1]]["new_price"]).toFixed(2) + "</div><div class='del fl w150'><a href='###'><img src='images/xiangqing/del.png' style='width:30px;height:30px;'/></a></div><div class='clear'></div></div>")
			}

		}
		//数量减少
	this.minus = function() {
			$(".minus").on("click", function() {
				//判断数量大于一才能减
				if(parseInt($(this).siblings().not($(".add")).val()) > 1) {
					//改变输入框数量和总金额
					$(this).siblings().not($(".add")).val(parseInt($(this).siblings().not($(".minus")).val() - 1))
					$(this).parent().parent().next().html(Number(Number($(this).parent().parent().siblings().find($(".new_price")).html()) * parseInt($(this).siblings().not($(".add")).val())).toFixed(2))

					console.log($(this).parent().find($(".add"))[0].id)
					document.cookie = "isbn" + $(this).parent().find($(".add"))[0].id + "=" + $(this).siblings().not($(".add")).val() + "," + $(this).parent().find($(".add"))[0].id + ";path=/;expires=" + new Date((new Date()).getTime() + (7 * 24 * 3600000)) + ";";

				}
			})
		}
		//数量增加
	this.add = function() {
			$(".add").on("click", function() {
				//判断数量小于库存才能加
				if(parseInt($(this).siblings().not($(".minus")).val()) < parseInt($(this).parent().siblings().children().html())) {

					$(this).siblings().not($(".minus")).val(parseInt($(this).siblings().not($(".minus")).val()) + 1)
					$(this).parent().parent().next().html(Number(Number($(this).parent().parent().siblings().find($(".new_price")).html()) * parseInt($(this).siblings().not($(".minus")).val())).toFixed(2))
					document.cookie = "isbn" + $(this)[0].id + "=" + $(this).siblings().not($(".minus")).val() + "," + $(this)[0].id + ";path=/;expires=" + new Date((new Date()).getTime() + (7 * 24 * 3600000)) + ";";

				}

				console.log(parseInt($(this).parent().siblings().children().html()))

			})
		}
	//输入数量
	this.inp=function(){
		$(".val").on("input",function(){
			if(/^\d+$/g.test($(this).val())){
				$(this).parent().parent().next().html(Number(Number($(this).parent().parent().siblings().find($(".new_price")).html()) * parseInt($(this).val())).toFixed(2))
			}else{
				$(this).val("1")
			}
		})
	}
		//点击删除
	this.delet = function() {
		$(".del").on("click", function() {
			
			//删除元素
			if(window.confirm("是否删除？")){
					document.cookie = "isbn" + $(this).siblings().find($(".add"))[0].id + "=" + $(this).siblings().not($(".minus")).val() + "," + $(this).siblings().find($(".add"))[0].id + ";path=/;expires=" + new Date("1970-01-01") + ";";	
					$(this).parent().css("display", "none");
							}
					
			//删除对应的cookie
			
		})
	}
	this.creatcart = function() {
		$.get("json/caet.json", null, function(data, textStatus) {
			if(textStatus == "success") {
				_me.data = data;
				_me.loadcart();
				_me.minus();
				_me.add()
				_me.delet()
				_me.choice()
				_me.inp();
			}
		})
	}

	//点击选择
	this.choice = function() {

		var _cl = $(".cl");
		var _list=$(".list")
		var _quanxuzan = $("#quanxuan")[0];
		//点击全选、
		
		_quanxuzan.onclick = function() {
			var pic=0;
			for(var i = 0; i < _cl.length; i++) {
				if(_quanxuzan.checked) {
					_cl[i].checked = true;
					pic+=(Number($( _list[i]).find(".new_price").html())*Number($( _list[i]).find(".val ").val()));
					$(".numm").html(pic)
				} else {
					_cl[i].checked = false;
					$(".numm").html(0);
				}
			}
		}

		//点击多选
		var a=[];
		var b=0;
		for(var j = 0; j < _cl.length; j++) {
			a[j]=0;
			_cl[j].index = j;
			var onOff = true;
			
			_cl[j].onclick = function() {
				b=0;
				if(this.checked) {
					a[this.index]=($(this).parent().parent().find(".cost1 ").html())
					onOff = false;
					for(var k = 0; k < _cl.length; k++) {
						if(_cl[k].checked == false) {
							onOff = true;
							
						}
					}
					if(onOff == false) {
						
						_quanxuzan.checked = true;
					}
				} else {
					_quanxuzan.checked = false;
					a[this.index]=0;
					
					
				}
				for (var i=0;i<a.length;i++) {
					b+=Number(a[i])
				}
				$(".numm").html(b.toFixed(2))
			}
			
		}
		
	}
	
	//计算总数
	

}

function main() {
	var _hover1 = new hover1();
	_hover1.linkhove()
	var _cookie=new cookieload1() 
	_cookie.loadcook1();
	_cookie.creatcart();



}
window.onload = main;