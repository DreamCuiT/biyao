//右边栏
		$(".right-menu ul li:first-child").hover(function(){
			$(".QR-code").css({
				display:"block"
			})
		},function(){
			$(".QR-code").css({
				display:"none"
			})
		})
		$(".goTop").click(function(){
			$("html").animate({
				scrollTop:"0"
			},500)
		})
		//enjoy
		$(".enjoy").click(function(){
			$(".enjoy-box").css({
				display:"block"
			})
		})
		//clear
		$(".cls-btn").click(function(){
			$(".enjoy-box").fadeOut(500)
		})
		//滚动条判断是否固定定位nav	
		$(window).scroll(function(){
			if($(document).scrollTop()!=0){
				$(".goTop").fadeIn(1000) 
			}
			if($(document).scrollTop()==0){
				$(".goTop").fadeOut("slow")
			}
			if($(document).scrollTop()>=600){
				$("#nav-fixed").removeClass("nav-index")
				$("#nav-fixed").addClass("nav-retract")
			}
			else if($(document).scrollTop()<600){
				$("#nav-fixed").removeClass("nav-retract")
				$("#nav-fixed").addClass("nav-index")
			}
		})	


		//固定定位显示菜单
		$(".nav-fixed").hover(function(){
			$(".fixed-menu").css({
				display:"block",
				position:"fixed",
				top:"50px",
				left:"100px"
			})
			$(".fixed-menu").css({
				display:"block"
			})
		},function(){
			$(".fixed-menu").css({
				display:"none"
			})
		})	
			
		// 客服服务
		$(".user-server").hover(function(){
			$("#header-service").css({
				background:"url(img/comSprite.png) 0 -88px no-repeat"
			});
			$(".user-server").find("div").css({
				display:"block"
			})
		},function(){
			$("#header-service").css({
				background:"url(img/comSprite.png) 0 -102px no-repeat"
			});
			$(".user-server").find("div").css({
				display:"none"
			})
		})
		// app服务
		$(".user-app").hover(function(){
			
			$(".apphover").css({
				display:"block"
			})
		},function(){
			
			$(".apphover").css({
				display:"none"
			})
		})

		//左菜单栏
		$(".menu-li").mouseenter(function(){
			$(this).find("ul").css({display:"block"});
			$(this).css({background:"rgba(225,225,225,0.5)"});
		});
		$(".menu-li").mouseleave(function(){
			$(this).find("ul").css({display:"none"});
			$(this).css({background:"rgba(0,0,0,0)"});
		});

		
		//foot官方微信code
		$(".list-weix-code").hover(function(){
			$(".weix-code").css({
				display:"block"
			})
		},function(){
			$(".weix-code").css({
				display:"none"
			})
		})
