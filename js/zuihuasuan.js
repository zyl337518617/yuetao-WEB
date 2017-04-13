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
function main(){
	var _load=new loadimg1();
	_load.loadd()
}
window.onload=main;