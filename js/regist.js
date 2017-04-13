function zhengze() {
	this.Flag1 = false;
	this.Flag2 = false;
	this.Flag3 = false;
	this.Flag4=false;
	this.Flag5=false;
	var me = this;
	this. func1= function() {
		$("input").eq(0).focus(function() {
			$("p").eq(0).css("visibility", "visible")

			this.onblur = function() {
				var reg = /^[0-9a-zA-Z-_]{4,12}$/g;
				var txt = this.value;
				var flag = reg.test(txt);
				if(flag) {
					$("p").eq(0).css("visibility", "hidden");
					me.Flag1 = true;
				} else {
					$("p").eq(0).html("格式错误，支持汉字、字母、数字、'-'、'_'的4-12位组合");
					$("p").eq(0).css("color", "red");

					me.Flag1 = false;
				}
				if(txt == "") {

					$("p").eq(0).html("支持汉字、字母、数字、'-'、'_'的4-12位组合");
					$("p").eq(0).css({
						"color": "#999",
						"visibility": "hidden"
					});
					me.Flag1 = false;
				}
			}
		})
	}
	this.func2 = function() {
		$("input").eq(1).focus(function() {

			$("p").eq(1).css("visibility", "visible")
			this.onblur = function() {
				var reg = /^1[34578]\d{9}$/;
				var txt = this.value;
				var flag = reg.test(txt);
				if(flag) {

					$("p").eq(1).html("输入正确");
					$("p").eq(1).css("color", "#999");
					me.Flag2 = true;
				} else if(txt == "") {
					$("p").eq(1).html("请输入手机号");
					$("p").eq(1).css({
						"visibility ": "hidden",
						"color": "#999"
					});
					me.Flag2 = false;
				} else {
					$("p").eq(1).html("输入错误！");
					$("p").eq(1).css("color", "red");
					me.Flag2 = false;
				}
			}
		})
	}
	this.func3 = function() {
		$("input").eq(2).focus(function() {

			$("p").eq(2).css("visibility", "visible")
			this.onblur = function() {
				var reg1 = /^[\w~!@#$%^&*?]{6,20}$/g;
				var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,}$/g;
				var reg3 = /^(?=^.{6,20}$)(?=(?:.*?\d)+)(?=.*[a-zA-Z]+)(?=(?:.*?[~!@#$%*()_+^&}{:;?.])+)(?!.*\s)[0-9a-zA-Z~!@#$%*()_+^&]*$/g;
				var txt = this.value;
				var flag1 = reg1.test(txt);
				var flag2 = reg2.test(txt);
				var flag3 = reg3.test(txt);
				if(flag3) {

					$("p").eq(2).html("强");
					$("p").eq(2).css("color", "#999");
					me.Flag3 = true;
				} else if(flag2) {
					$("p").eq(2).html("中");
					$("p").eq(2).css({
						"color": "#999"
					});
					me.Flag3 = true;
				} else if(flag1) {
					$("p").eq(2).html("弱！");
					$("p").eq(2).css("color", "red");
					me.Flag3 = true;
				} else if(txt = "") {
					$("p").eq(2).html("建议使用字母、数字和符号两种以上的6-20位组合！");
					me.Flag3 = false;
				} else {
					$("p").eq(2).html("格式错误，长度为6-20位，建议使用数字、字母和字符两种以上的组合");
					me.Flag3 = false;
				}
			}
		})
	}
		this.func4=function(){
			$("input").eq(3).focus(function() {
				$("p").eq(3).css("visibility", "visible");
				if($("input").eq(2).val() == ""){
					$("p").eq(3).html("请先输入密码");
					$("p").eq(3).css("color","red")
				}else{
					$("p").eq(3).html("请再次输入密码");
					$("p").eq(3).css("color","#999")
				}
				this.onblur = function() {
					console.log($(this).val(),$("input").eq(2).val())
					if($(this).val()==""){
						$("p").eq(3).css("visibility", "hidden")
						me.Flag4 = false;
					}
					else if($(this).val()==$("input").eq(2).val()){
						$("p").eq(3).html("密码输入正确");
						me.Flag4 = true;
					}else{
						$("p").eq(3).html("两次密码输入不一致，请重新输入");
						me.Flag4 = false;
					}
				}
			})
		}
		this.func5=function (){
			var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			var x=[];
			function change(){
				if(x.length<4){
					for (var i=0;i<4;i++) {
					x.push(arr[Math.floor(Math.random()*arr.length)])
					}
				}
				$("#yanzheng").html(x)
			}
			$("input").eq(4).focus(function() {
				change()
				$("#yanzheng").click(function(){
					x=[];
					change()
				})
				
				this.onblur=function(){
//				console.log($("#yanzheng").html())
					if($(this).val()==""){
						me.Flag5 = false;
					}else if($(this).val()==$("#yanzheng").html()){
						me.Flag5 =true;
					}else{
						me.Flag5 = false;
					}
				}
				
			})
		}
		
	this.oncli = function() {
		$("#submit").click(function() {

				if(document.getElementById("pwd").value == document.getElementById("sure").value) {
					ajaxRequest("post", "js/PhpInterface1/regist.php", true, {
						"account": document.getElementById("txt").value,
						"secret": document.getElementById("pwd").value,
						"mobile": document.getElementById("mobile").value
					}, function(data) {
						data = data.replace(/\s+/g, "");
						if(data == "0" || me.Flag1 == false || me.Flag2 == false||me.Flag3==false||me.Flag4==false||me.Flag5==false) {
							alert("注册失败！！");
						} else {
							alert("恭喜您注册成功！！！");
							window.location.href="shouye1.html";
						}
					});
				} else {
					alert("验证码或密码错误，请重新输入！！");
				}
			})
		}

}

window.onload = function() {

	var ne=new zhengze();
	ne.func1();
	ne.func2();
	ne.func3();
	ne.func4();
	ne.func5();
	ne.oncli();
	 $(".footcontentinfo").load("html/foot.html");
	$(".footcontentinfo ").css("display","block")
	
}