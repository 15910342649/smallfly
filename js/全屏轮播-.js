	window.onload=function(){
				var oScreenBanner=document.getElementsByClassName("screen-banner")[0];
				var oAllScreen=document.getElementsByClassName("all-screen")[0];
				var arrScreen=document.getElementsByClassName("screen-one");
				var screenW,screenH;
				var page=0;
				function resize(){
					//获取屏幕宽高
					screenW=document.documentElement.clientWidth;
					screenH=document.documentElement.clientHeight;
					//设置宽高   总轮播图   大盒子   每一屏
					oAllScreen.style.width=oScreenBanner.style.width=screenW+"px";
					oScreenBanner.style.height=screenH+"px";
					oAllScreen.style.height=screenH*arrScreen.length+"px";
					for(var i=0;i<arrScreen.length;i++){
						arrScreen[i].style.width=screenW+"px";
						arrScreen[i].style.height=screenH+"px";
					}
					oAllScreen.style.top=-page*screenH+"px";
				}
				resize();
				window.onresize=resize;
				
				var isRunning=false;//当isRunning  为true   鼠标滚轴不管用
									//当isRunning  为false   鼠标滚轴管用
				function scrollUp(){
					if(!isRunning){
						isRunning=true;
						//设置定时器  当1s之后   滚轴继续可以使用
						setTimeout(function(){
							isRunning=false;
						},1000);
						if(page>0){
							page--;
							oAllScreen.style.top=-page*screenH+"px";
						}
					}
				}
				function scrollDown(){
					if(!isRunning){
						isRunning=true;
						//设置定时器  当1s之后   滚轴继续可以使用
						setTimeout(function(){
							isRunning=false;
						},1000);
						if(page<arrScreen.length-1){
							page++;
							oAllScreen.style.top=-page*screenH+"px";
						}
					}
				}
				addEvent(window,"mousewheel",mouseWheel);
				addEvent(window,"DOMMouseScroll",mouseWheel);
				
				//滚轴事件函数
				function mouseWheel(ev){
					var oEvent=window.event||ev;
					if(oEvent.detail){
						if(oEvent.detail>0){
							scrollDown()
						}else{
							scrollUp();
						}
						console.log(oEvent.detail)
					}else if(oEvent.wheelDelta){
						if(oEvent.wheelDelta>0){
							scrollUp();
						}else{
							scrollDown();
						}
						console.log(oEvent.wheelDelta)
					}
					
				}
				
				
				function addEvent(ele,ev,fn){
					if(ele.attachEvent){
						ele.attachEvent("on"+ev,fn);
					}else{
						ele.addEventListener(ev,fn);
					}
				}
			}