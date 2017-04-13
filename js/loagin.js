 window.onload=function(){
        	function cook(){
        		var _cook=document.cookie;
        		if((/user=/g.test(_cook))&&(/pwd=/g.test(_cook))){
        			console.log(1)
      				var users=_cook.match(/user=\w+/g)[0].replace("user="," ");
      				var pwd=_cook.match(/pwd=\w+/g)[0].replace("pwd="," ");
      				$("#txt").val(users);
      				$("#pwd").val(pwd)
//    				console.log(pwd,user)
      				
        		}else{
//      			console.log(1)
        		}
        	
      		
        	}
      	cook();
        	
            document.getElementById("submit").onclick=function(e) {
            	
            	e=e||window.event;
            	e.preventDefault()
                if(document.getElementById("txt").value!=""||document.getElementById("pwd").value!=""){
                	  ajaxRequest("post", "js/PhpInterface1/login(2).php", true, {
                	
                    "user": document.getElementById("txt").value,
                    "pwd": document.getElementById("pwd").value
                }, function (data) {
                    data=data.replace(/\s+/g,"");

                    if(data!="0" ) {
                        $(".msg-warn").html("<span></span>公共场所不建议自动登录，以防账号丢失")
                    	$(".msg-warn").css({
                    		"background": "#fff6d2",
    						"color": "#666",
    						"border": "1px solid #ffe57d"
                    	})
                    	var _checked = document.getElementById("checked");
                    	if(_checked["checked"]){
//                  		console.log(1)

document.cookie = "user=" + document.getElementById("txt").value + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000)+";";
							document.cookie = "pwd=" + document.getElementById("pwd").value + ";path=/;expires=" + new Date(new Date().getTime() + 7 * 24 * 3600000)+";";
                    	}
                    		
                    	
                    	
                  	window.history.go(-1)
                    }else{
                    		$(".msg-warn").html("<span></span>用户名或者密码错误！！！")
                    	
                    	$(".msg-warn span").css("background-position"," -104px -49px")
                    }
                });
                }else{
                	$(".msg-warn").html("<span></span>请输入用户名或者密码")
                    	$(".msg-warn").css({
                    		"background": "#ffebeb",
    						"color": "#e4393c",
   							 "border":" 1px solid #e4393c"
                    	})
                    	$(".msg-warn span").css("background-position"," -104px -49px")
                }
              
            }
        }