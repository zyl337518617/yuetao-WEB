function xiangqing(){
	var me=this;
//鼠标放上显示导航
	this.linkhove=function(){
		$("#lr_systembtn").hover(function(){
//			console.log(1)
			$(".all-sort-list").css("display","block")
		},function(){
			$(".all-sort-list").css("display","none")
		})
		}
	
	
	
}
//放大镜
function zoon(){
	this._left = 0;
	this._top = 0;
	var me=this;
	this.setSpanCSS=function(e){
		e=e||window.event;
		var _top1 = document.documentElement.scrollTop || document.body.scrollTop;
		var _left1 = document.documentElement.scrollLeft || document.body.scrollLeft;
					this._left = e.clientX + _left1-$(".MagicZoom").offset().left-$(".MagicZoomPup")[0].clientWidth/2 ;
					this._top = e.clientY + _top1-$(".MagicZoom").offset().top-$(".MagicZoomPup")[0].clientHeight/2 ;
//					console.log(this._top)
//					console.log(this._left)
					$(".MagicZoomPup").css("left",this._left<=0?0:(this._left>=200?200:this._left)+"px")
					$(".MagicZoomPup").css("top",this._top<=0?0:(this._top>=200?200:this._top)+"px")
					$("#imgss").css("left",-3*($(".MagicZoomPup")[0].offsetLeft))
					$("#imgss").css("top",-3*($(".MagicZoomPup")[0].offsetTop))
	}
	this.eventHandle=function(){
		$(".small").on("mousemove",function(e) {
						$(".MagicZoomPup").css("display","block");
						$("#bc30").css("display","block")
						e = e || window.event;
							me.setSpanCSS(e);
						}) 
		
		$(".small").on("mouseout",function(){
			$(".MagicZoomPup").css("display","none");
			$("#bc30").css("display","none")
		})
	}
}
//获取数据
function load(){
	var data1=null;
	var loaimg=function(){
		$(".p_adv").append("<a href='javasprict:;'><img src='"+data1["bigimg"][0]+"'/></a>")
	}
	var loadtxt=function(){
		$("#sim30").attr("src",data1["book"]["img"]);
		$("#imgss").attr("src",data1["book"]["img"])
		$(".num").html(data1["book"]["num"])
		$("._pricr").html(data1["book"]["new_price"])
		$(".font_del").html(data1["book"]["old_price"])
		$(".isbn").eq(0).html(data1["book"]["ISBN"])
		
		
		
	}
	var floor=function(){
//		console.log(data1["floor"].length)
		for (var i=0;i<data1["floor"].length;i++) {
			$("#p_contentdetail").append("<div><div class='item-mt'><h3>"+data1["floor"][i][0]+"</h3></div><div class='text'>"+data1["floor"][i][1]+"</div></div>")
		}
	}
	$.post("json/xiangqing.json",null,function(data,textStatus){
		if(textStatus == "success"){
			data1=data
			loadtxt();
			loaimg();
			floor()
		}
	})
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
				
				for(var i in data["3"]) {
					$(".p_c ul").append("<li class='pdt'><div><a href=''><img src='" + data["3"][i]["img"] + "'/></a></div><p><a href='' class='p_hotbooktitle'>" + data["3"][i]["b_detail"] + "</a></p><p class='price'>" + data["3"][i]["b_price"] + "</p></li>")
				}
				_me.data=data;
				_me.forj()
				_me.oncl()
			}
		})
	}
}

//右侧导航栏
function right(){
	var _me=this;
	this.active=function(){
		$(".lcdname").eq(0).hover(function(){
			$(".ibar_login_box").css("display","block")
		},function(){
			$(".ibar_login_box").css("display","none")
		})
	
	this.hove=function(){
		$(".quick_links li").hover(function(){
			$(this).find(".mp_tooltip").animate({"left":"-92px"},200)
			$(this).find(".mp_tooltip").css({"visibility":"visible"})


		},function(){
			$(this).find(".mp_tooltip").animate({"left":"-121px"},200)
			$(this).find(".mp_tooltip").css("visibility","hidden")
		})
		
		
		
	}
	this.hover2=function(){
		$(".quick_toggle li").hover(function(){
			console.log(1)
			$(this).find(".mp_tooltip").animate({"left":"-92px"},200)
			$(this).find(".mp_tooltip").css({"visibility":"visible"})


		},function(){
			$(this).find(".mp_tooltip").animate({"left":"-121px"},200)
			$(this).find(".mp_tooltip").css("visibility","hidden")
		})
	}
	
	
	}

	this.diao=function(){
		_me.active();
		_me.hove()
		_me.hover2()
	}



}
var clickchar=function(){
	this.valu=0;
	var _me=this;
	this.clic1=function(){
		$(".num_del_disabled").on("click",function(){
			if(parseInt($(".buy-num-text").val())>1){
			$(".buy-num-text").val(parseInt($(".buy-num-text").val())-1)	
			
			}
		})
		$(".num_add").on("click",function(){
			if(parseInt($(".buy-num-text").val())<parseInt($(".num").html())){
			$(".buy-num-text").val(parseInt($(".buy-num-text").val())+1)	
			}
		})
//		_me.valu=$(".buy-num-text").val();
	}
	this.clic2=function(){
		 var flag=true;
		$(".btn_buy").on("click",function(){
			if(flag==true){
				$(".cart_num").html($(".buy-num-text").val())
			document.cookie = "isbn"+$(".isbn").eq(0).html()+"=" + $(".buy-num-text").val()+","+ $(".isbn").eq(0).html()+ ";path=/;expires=" + new Date((new Date()).getTime()+ (7 * 24 * 3600000))+";";
			document.cookie = "isbn978-7-80740-801-7=5,978-7-80740-801-7;path=/;expires=" + new Date((new Date()).getTime()+ (7 * 24 * 3600000))+";";
			document.cookie = "isbn978-7-80740-803-1=3,978-7-80740-803-1;path=/;expires=" + new Date((new Date()).getTime()+ (7 * 24 * 3600000))+";";
			flag=false;
			}else{
				alert("该商品已经存在购物车，请前往购物车查看")
			}
			
			
			console.log($(".isbn").eq(0).html())
		})
	}
	
	
}







function main(){
	var _xiangqing=new xiangqing();
	_xiangqing.linkhove()
	var _zoon=new zoon();
	_zoon.eventHandle()
	load()
	var _change=new change();
	_change.loadch()
	$(".footcontentinfo").load("html/foot.html")
	var _right=new right();
	_right.diao()
	var _clickchar=new clickchar();
	_clickchar.clic1()
	_clickchar.clic2()
}
window.onload=main;