function loadimg1(){
	var me=this;
	this.data=null;
	this.qiang=function(){
	console.log(me.data["content"])
		var li="";
		for (var k=0;k<me.data["content"].length;k++) {
			li+="<li class='fl'><a href='###'><img src='"+me.data["content"][k]+"'/></a></li>"
		}
		$(".zui_tcontent").append("<ul>"+li+"</ul>")
	}
	this.logolist=function(){
		var li="";
		for (var k=0;k<me.data["logolist"].length;k++) {
			li+="<li class='fl'><a href='###'><img src='"+me.data["logolist"][k]+"'/></a></li>"
		}
		$(".logolist").append("<ul>"+li+"</ul>")
		
	}
	this.loadd=function(){
		$.post("json/zuihuasuan.json",null,function(data,textStatus){
		if(textStatus == "success"){
			me.data=data;
			me.qiang()
			me.logolist()
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

                for(var i in data["3"]) {
                    $(".p_c ul").append("<li class='pdt'><div><a href=''><img src='" + data["3"][i]["img"] + "'/></a></div><p><a href='' class='p_hotbooktitle'>" + data["3"][i]["b_detail"] + "</a></p><p class='price'>" + data["3"][i]["b_price"] + "</p></li>")
                }
                _me.data=data;
                _me.forj()
                _me.oncl()
            }
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

                    li+="<li><div class='img'><a href='xiangqing.html'><img src='images/fuye/"+data[i]["small"][a]["img"]+"' alt='' /><span class='biaoy'><span>"+data[i]["small"][a]["txt"]+"</span></span></a></div><div class='name_tit'><a href='#' class='btn2'><span class='name_one'>"+data[i]["small"][a]["b_detail"]+"</span><span class='name_two'>"+data[i]["small"][a]["b_detail"]+"</span></a></div><div class='price'><span class='money_new'>￥</span><span class='price_n'>"+data[i]["small"][a]["b_newprice"]+"</span><span class='money_o'>￥</span><span class='price_o'>"+data[i]["small"][a]["b_oldprice"]+"</span><span class='nmbook'>6.4<span class='zkj_fh'>折</span></span></div><a href='#' class='btns'>立即购买</a></li>"

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
	var _load=new loadimg1();
	_load.loadd()
    var _change=new change();
    _change.loadch()
    _change.booklist()


}
window.onload=main;