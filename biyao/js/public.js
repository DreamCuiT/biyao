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

		//获取用户名
		let str = $("#loginBtn").text();
		if(getCookie("vipName")==null){
			$("#loginBtn").text("登录")
		}else{
			$("#loginBtn").text("欢迎："+getCookie("vipName"))
		}
		
		
		//获取购物车信息
		
		let vipName = getCookie("vipName");
			$.get("php/getShoppingCart.php",{vipName:vipName},function(data){
				let arr  = praseJson(data);
				console.log(arr);
				$(".goods-list").append("<li class='ul-li-2'><div><i class='select'></i><img class='goods-img' src='"+arr[0].goodsImg+"' alt=' width='100px' height='100px'></div><ul><li>"+arr[0].goodsName+"</li><li>颜色：<span>黑色</span></li><li>尺寸：<span>48</span></li></ul><ul class='shopCar-main-content-right'><li>￥<span class='goods-one-money'>"+arr[0].goodsPrice+"</span></li><li><span class='miu goods-minus'></span><span class='num goods-number'>1</span><span class='add goods-add'></span></li><li>￥<span class='goods-maney'>"+arr[0].goodsPrice+"</span></li><li><span class='delectGoods'></span></li></ul></li>")
				priceAll();
				//添加商品数量
				$(".goods-minus").click(function(){
					let oneMoney = parseInt($(this).parentsUntil().eq(1).find("li").eq(0).find(".goods-one-money").text());
					let num = parseInt($(this).nextUntil().eq(0).text());
					// let sum = parseInt($(this).nextUntil(".goods-maney").text());	
					num--;
					if(num<=0){
						$(this).next().text("0");
						$(this).parentsUntil().eq(1).find("li").eq(2).find("span").text("0");
						$(".mok").css({
							display:"block"
						})
						$(".center-box>p:first").text("不能再减了，再减就没了")
					}else{
						$(this).next().html(num);
						$(this).parentsUntil().eq(1).find("li").eq(2).find("span").text(oneMoney*num);
					}
					// //总价,商品件数
					priceAll();
				})
				$(".goods-add").click(function(){
					let num = parseInt($(this).prevAll(".goods-number").text());
					let oneMoney = parseInt($(this).parentsUntil().eq(1).find("li").eq(0).find("span").text());
					// let sum = parseInt($(".goods-maney").text());
					num++;
					$(this).parentsUntil().eq(1).find("li").eq(1).find(".goods-number").html(num);	
					$(this).parentsUntil().eq(1).find("li").eq(2).find("span").text(num*oneMoney);
					//总价
					priceAll();
				})

				//删除商品
				$(".delectGoods").click(function(){
					$(".mok").css({
						display:"block"
					})
					$(".center-box>p:first").text("不能再减了，再减就没了")
				})
				$(".yes").click(function(){
					$(".mok").css({
						display:"none"
					})
					$(".center-box>p:first").text("不能再减了，再减就没了")
					$.get("php/deleteGoods.php",{vipName:vipName,goodsId:arr[0].goodsId},function(data){
						console.log(data);
						if(data==1){
							// $(".goods-list").remove()
						}
					})
				})
				$(".no").click(function(){
					$(".mok").css({
						display:"none"
					})
					$(".center-box>p:first").text("不能再减了，再减就没了")
				})
			})	
		function priceAll(){
			let sum = 0;
			let count = 0;
			$(".goods-maney").each(function(i){
				sum += parseInt($(".goods-maney").eq(i).text());
				count += parseInt($(".goods-number").eq(i).text());
				$(".goods-data").eq(2).text(sum)
				$(".goods-data").eq(0).text(count)
				$(".sum").eq(1).text(parseInt($(".goods-data").eq(2).text()))
			})
		}

		function getCookie(key){//获取cookie
					var str = unescape(document.cookie);
					
					//1、分割成数组
					var arr=str.split("; ");
					
					//2、循环数组，查找键，并得到对应的值
					for(var i in arr){
						if(arr[i].indexOf(key+"=")==0){
							return arr[i].substring((key+"=").length);
						}
					}
					return null;
			}

		function praseJson(str){
			let concat = '\{\"goodsList\"\:'+str+'\}';//字符转换JSON对象的格式'{"键名":"键值"}'
			let goodsJSON = JSON.parse(concat);
			// console.log(goodsJSON);
			return goodsJSON.goodsList;//返回所有商品详情数组
		}
