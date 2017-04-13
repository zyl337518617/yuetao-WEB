function fuye(){
	//导航栏
	this.time=0;
	this.Time=0;
	var _me=this;
	this.arr=[];
	var i=0;
	this.endtime=new Date('2017/4/2,09:00:00').getTime()
	var t=0;
	this.ss=0;

	this.linkhove=function(){
		$("#lr_systembtn").hover(function(){
//			console.log(1)
			$(".all-sort-list").css("display","block")
		},function(){
			$(".all-sort-list").css("display","none")
		})
		}
	//限时抢购定时器
	this.times=function(){
//      / t++;
		window.clearInterval(_me.time);
		

		 window.clearInterval(_me.time);
        var starttime=new Date().getTime();
        // (function aa(){
            this.endtime+=(1000*3600*24*t);
            _me.ss=this.endtime-starttime;
			console.log(_me.ss)
        // })();
        if( _me.ss<1000){
            t++;
        }

		var hours=Math.floor(_me.ss/1000/3600);
		var min=Math.floor(_me.ss/1000/60%60);
		var sec=Math.floor(_me.ss/1000%60);
//		console.log(sec)
		function totwo(n){
			if(n<10){
				n="0"+n;
			}
			return n
		}
		$(".hours").html(totwo(hours));
		$(".minute").html(totwo(min));
		$(".seconds").html(totwo(sec))
		_me.time=window.setInterval(_me.times,1000)
		
	}
	//三个定时抢购
	this.loadpic=function(){
		$.post("json/fuye.json",function(data){
			for (var i in data) {
				$(".loadp").append("<div class='longPro'><div class='img fl'><a href='#'><img src='images/fuye/"+data[i]["img"]+"' alt='' /></a><span class='iconfont'><span class='txt'>"+data[i]["txt"]+"</span></span></div><div class='desc fl'><a href='#' class='names2'>"+data[i]["b_detail"]+"</a><div class='title2'>"+data[i]["b_title"]+"</div><div class='timer'><span class='desc1'>距结束还剩：</span><span class='time hours'></span><span class='timetxt'>时</span><span class='time minute' ></span><span class='timetxt'>分</span><span class='time seconds'></span><span class='timetxt'>秒</span></div><div class='purchase'><div class='price'><span class='price_n'><span class='price_y'>¥</span>"+data[i]["b_newprice"]+"</span><span class='price_o'>¥"+data[i]["b_oldprice"]+"</span></div><a href='' class='buy_s'></a></div></div>");
				
			}
			$(".loadp .hours").html($(".tab_minddle .hours").html())
			$(".loadp .minute").html($(".tab_minddle .minute").html())
			$(".loadp .seconds").html($(".tab_minddle .seconds").html())
			
		})
	}
	
	//booklist
	this.booklist=function(){
		$.post("json/fuye1.json",function(data){
			var li=" ";
			var n=0;
			for (var i in data) {

				for (var a in data[i]["small"]) {
//					console.log(data[i]["small"][a])
					
					 li+="<li><div class='img'><a href='#'><img src='images/fuye/"+data[i]["small"][a]["img"]+"' alt='' /><span class='biaoy'><span>"+data[i]["small"][a]["txt"]+"</span></span></a></div><div class='name_tit'><a href='#' class='btn2'><span class='name_one'>"+data[i]["small"][a]["b_detail"]+"</span><span class='name_two'>"+data[i]["small"][a]["b_detail"]+"</span></a></div><div class='price'><span class='money_new'>￥</span><span class='price_n'>"+data[i]["small"][a]["b_newprice"]+"</span><span class='money_o'>￥</span><span class='price_o'>"+data[i]["small"][a]["b_oldprice"]+"</span><span class='nmbook'>6.4<span class='zkj_fh'>折</span></span></div><a href='#' class='btns'>立即购买</a></li>"
					
				}
				$(".book_center").append("<div class='user_center'><ul class='book_list'>"+li+"</ul></div><div class='biglist'></div></div>")
				li=" ";
				
			}
			for (var i in data) {
				$(".biglist").eq(i-1).css({
					"background":"url('images/fuye/"+data[i]["big"]["img"]+"') no-repeat center top"
					})
			}
			$(".biglist").eq(1).append("<div><a class='abs'><p class='dang'>——当下最热套装——</p><p class='dang2'>满99减10,满499减100</p><a></div>")
//			$(".dang").append("<p class='dang'>————当下最热套装————</p>")
			$(".biglist").eq(0).css("height","150px");
			$(".biglist").eq(1).css("height","393px");
			$(".biglist").eq(2).css("height","150px");
			
		})
	}
	
	
	
}
function main(){
	var fuye1=new fuye();
	fuye1.linkhove();
	fuye1.times()
	fuye1.loadpic();
	fuye1.booklist()
		
	 $(".footcontentinfo").load("html/foot.html");
     $(".footcontentinfo").css("display","block");	
}
window.onload=main;
