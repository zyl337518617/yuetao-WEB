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

function creat(){
	this.arr=[];
	this.data="";
	var _me=this;
	this.pri=0;
	this.flag=false;
	//获取数据
	this.local=function(){		
		for (var i=0;i<localStorage.length;i++) {
			
			this.arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))).goodid)
				
			$(".listbody").append("<div class='list' id='"+this.arr[i]+"'><div class='check fl w50'><input type='checkbox' class='cl' /></div><div class='title fl w400'><div class='fl'><a href='###'><img class='jinru' src='" + _me.data[_me.arr[i]].book.img + "'/></a></div><div class='fl w250 f12 p5'><a href='###'>" + _me.data[_me.arr[i]].book.name + "</a></div></div><div class='sprice fl w200'><div class='new_price'>" +_me.data[_me.arr[i]].book.new_price + "</div><div class='crossline'>" + _me.data[_me.arr[i]].book.old_price + "</div></div><div class='qty fl w150'><div><button class='minus'>-</button><input  class='val w30 center' type='text' value='"+JSON.parse(localStorage.getItem(localStorage.key(i))).num+"'/><button class='add'>+</button></div><div class='qtytips'><span>" + _me.data[_me.arr[i]].book.num + "</span></div></div><div class='cost1 fl w150 bfont'>"+Number(Number(_me.data[_me.arr[i]].book.new_price)*Number(JSON.parse(localStorage.getItem(localStorage.key(i))).num)).toFixed(2)+"</div><div class='del fl w150'><a href='###'><img src='images/xiangqing/del.png' style='width:30px;height:30px;'/></a></div><div class='clear'></div></div>")
		}
	}
	//改变数量
	this.dianji=function(){
		$("button").on("click",function(){
			_me.pri=0;
			if($(this).attr("class")=="minus"){
				if($(this).next().val()>1){
					$(this).next().val(Number($(this).next().val())-1)
					var data={goodid:$(this).parents(".list").attr("id"),num:$(this).next().val()}
					localStorage.setItem("goodid"+$(this).parents(".list").attr("id"),JSON.stringify(data))
				$(this).parents(".list").find($(".bfont")).html(Number(Number($(this).next().val())*Number(_me.data[$(this).parents(".list").attr("id")].book.new_price)).toFixed(2))
				 
				}
				
					
			}else{
				$(this).prev().val(Number($(this).prev().val())+1)
					var data={goodid:$(this).parents(".list").attr("id"),num:$(this).prev().val()}
					localStorage.setItem("goodid"+$(this).parents(".list").attr("id"),JSON.stringify(data))
				$(this).parents(".list").find($(".bfont")).html(Number(Number($(this).prev().val())*Number(_me.data[$(this).parents(".list").attr("id")].book.new_price)).toFixed(2))
					
			}
			for(var i=0;i<$(".cl").length;i++){	
				this.index=i
				if($(".cl").eq(i)[0].checked){
					_me.pri+=Number($(".bfont").eq(this.index).html())

				$(".numm").html(_me.pri.toFixed(2))
				
				}else{
					
				}
				
			}
			
		})
	}
	//单选
	this.xuan=function(){
		
		$(".cl").on("click",function(){
			
			_me.pri=0;
			for(var i=0;i<$(".cl").length;i++){	
				this.index=i;
				if(this.checked){
					
					if($(".cl").eq(i)[0].checked){						
						_me.pri+=Number($(".bfont").eq(this.index).html())
						
						$(".numm").html(_me.pri.toFixed(2))
							_me.flag=true;
						}else{
						_me.flag=false;
						}
				if(_me.flag){
						$("#quanxuan")[0].checked = true;
						_me.flag=true;
					}else{
						$("#quanxuan")[0].checked = false;
						_me.flag=true;
					}
						
					}else{
						_me.flag=false;
						if($(".cl").eq(i)[0].checked){
						_me.pri+=Number($(".bfont").eq(this.index).html())
						
						$(".numm").html(_me.pri.toFixed(2))
						
						}
						
						if(_me.flag){
						$("#quanxuan")[0].checked = true;
					}else{
						$("#quanxuan")[0].checked = false;
					}
					}
					
					
					
					
				}
			
			
			
		})
		
	}
	//点击全选
	this.quanxuan=function(){
		$("#quanxuan").on("click",function(){
			_me.pri=0;
			for(var i=0;i<$(".cl").length;i++){
			if(this.checked){
				$(".cl").eq(i)[0].checked=true;
				_me.pri+=Number($(".bfont").eq(i).html())
				$(".numm").html(_me.pri.toFixed(2))
			}else{
				$(".cl").eq(i)[0].checked=false;
				$(".numm").html(0)
			}
			}
		})
	}
	//输入判断格式并存储数据
	this.inpus=function(){
		$(".val").blur(function(){
		
			if(/^\d+$/g.test($(this).val())){
					var data={goodid:$(this).parents(".list").attr("id"),num:$(this).val()}
				localStorage.setItem("goodid"+$(this).parents(".list").attr("id"),JSON.stringify(data))
			}else{
				$(this).val(JSON.parse(localStorage.getItem("goodid"+$(this).parents(".list").attr("id"))).num)
				var data={goodid:$(this).parents(".list").attr("id"),num:$(this).val()}
				localStorage.setItem("goodid"+$(this).parents(".list").attr("id"),JSON.stringify(data))
				
			}
		})
	}
	//删除数据
	this.delet=function(){
		$(".del ").on("click",function(){
			if(confirm("您确定要删除吗")){
				
				localStorage.removeItem("goodid"+$(this).parents(".list").attr("id"))
				$(this).parents(".list").css("display","none")
				for(var i=0;i<$(".cl").length;i++){	
				if($(".cl").eq(i)[0].checked){
						_me.pri+=Number($(".bfont").eq(this.index).html())
						
						
						
						}
				}
				$(".numm").html(_me.pri.toFixed(2))
			}else{
				
			}
			
		})
	}
	
	this.huoqu=function(){
		$.getJSON("json/xiangqing.json",function(data){
			_me.data=data
			_me.local()
			_me.dianji()
			_me.inpus()
			_me.xuan()
			_me.quanxuan()
			_me.delet()
			_me.jinru()	
	})
	}
	//点击图片进入详情页
	this.jinru=function(){
		$(".title").on("click",function(){
			window.location.href="xiangqing.html?goodid="+$(this).parents(".list").attr("id")
		})
	}
}


function main() {
	var _hover1 = new hover1();
	_hover1.linkhove()
	var _creat=new creat();
	_creat.huoqu()
	


}
window.onload = main;