$(function() {
$(".tophead").load("html/tohead.html",function(){
	function tiao(){
		$(".login").on("click",function(){
			window.location.href="login.html";
		})
	}
	tiao();
	
	
	var _cookie=document.cookie;
	if(/user=/g.test(_cookie)){
				$(".user ").html(_cookie.match(/user=\w+/g)[0].replace(/user=/g,"")+"欢迎登陆");
				$(".login").html("");
				$(".regist").html("")
				$(".unlogin").append("<span class='zhu'>注销<span>")
				$(".zhu").css("display","inline-block")
				ajaxRequest("post","js/PhpInterface1/login(2).php",true,{
                "uName":_cookie.match(/user=\w+/g)[0].replace(/uName=/g,""),
                "pwd":_cookie.match(/pwd=\w+/g)[0].replace(/pwd=/g,"")
            },function(data){
             function zhu(){
		$(".zhu").on("click",function(){
			$.post("js/PhpInterface1/exit.php",null, function(data, textStatus){
				if(textStatus == "success"){
					document.cookie="user=adg;path=/;"+"expires="+new Date("1970-01-01")+";";
					document.cookie="pwd=adg;path=/;"+"expires="+new Date("1970-01-01")+";";
					$(".login").html("登录");
					$(".regist").html("注册")
					$(".zhu").css("display","none")
					$(".user").html("<span>您好，欢迎来到阅淘网</span>")
				}
			})
		})
	}
	zhu()
            })
					
				
	}else{
					$(".user").html("<span>您好，欢迎来到阅淘网</span>")
					
				}
});

})

