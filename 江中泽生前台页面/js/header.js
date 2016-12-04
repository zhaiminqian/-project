 //header nav banner
 jQuery.support.cors = true;

  header={
	 myHead:function(){
	  //banner start
		var index=0;
		var tim;
        function play(){
			    var len=$("#banner_bottom_point>li").length;
				function showtab(x){
						$(".banner_cont").find(".banner_tu").hide().eq(x).fadeIn(600);
						$(".banner_bottom_point li").removeClass("banner_on").eq(x).addClass("banner_on");
				}
				$(".header").hover(function(){
					clearInterval(tim);
				},function(){
				    tim=setInterval(function(){
						if(index===len-1){
							index=0;
							showtab(index);
						}else{
							showtab(index+1);
							index++;
						}
					},3000)
				}).trigger("mouseout");
				$("#banner_bottom_point li").click(function(){
					 if($("#banner_bottom_point li").index(this)==index)return;
					 index=$("#banner_bottom_point li").index(this);
					 showtab(index);
				});
		};

        var myUrl="http://60.205.105.211:2403/play/";
	    var myUrl_images="http://60.205.105.211/jz/public/upload/images/";
	    var myArr=[];
		var myBanner=document.getElementsByClassName("banner");
		$.ajax({
		  type:"GET",
		  url:myUrl,
		  dataType:"json",
          contentType: "application/json; charset=utf-8",
		  success:function(e){
		   if(e.length>0){
			 if(e.length>1){
				 	for (var i=0;i<e.length;i++){
						var uid=e[i].url;
						var _href=e[i].href
						myArr.push(myUrl_images+uid);

						var bannerImg="<a href='"+_href+"'><li class='banner_tu'></li></a>";
						$("#banner_cont").append(bannerImg);

						var banerPoin="<li></li>";
						$("#banner_bottom_point").append(banerPoin);
				    }
			
				 var pointLi=banner_bottom_point.getElementsByTagName("li");
				 pointLi[0].className="banner_on";
				 var bannerLi=banner_cont.getElementsByTagName("li");

				 var imageIndex = -1;
				 loadImageFn();

				 function loadImageFn(){
					imageIndex++;
					if(imageIndex == myArr.length){
						for(var i = 0; i < myArr.length;i++){
							 bannerLi[i].style.backgroundImage="url("+myArr[i]+")";
							 bannerLi[i].style.backgroundSize="cover";
							 bannerLi[i].style.backgroundPosition="center center";
							
							 
							 myBanner[0].style.backgroundImage="url()";
							 
						}
						return;
					
					}
					var img = new Image();
					img.onload = loadImageFn;
					img.src = myArr[imageIndex];
				 };
				   setTimeout(function(){
					  play();
                   },1000);
					banner.onmouseover=function(){
						clearInterval(tim);
					};
					nav.onmouseover=function(){
						clearInterval(tim);
					};

			 }else{
				 for (var i=0;i<e.length;i++){
						var uid=e[i].url;
						var _href=e[i].href
						myArr.push(myUrl_images+uid);

						var bannerImg="<a href='"+_href+"'><li class='banner_tu'></li></a>";
						$("#banner_cont").append(bannerImg);
				    }
				 var bannerLi=banner_cont.getElementsByTagName("li");

				 var imageIndex = -1;
				 loadImageFn();

				 function loadImageFn(){
					imageIndex++;
					if(imageIndex == myArr.length){
						for(var i = 0; i < myArr.length;i++){
							 bannerLi[i].style.backgroundImage="url("+myArr[i]+")";
							 bannerLi[i].style.backgroundSize="cover";
							 bannerLi[i].style.backgroundPosition="center center";
							
							 
							 myBanner[0].style.backgroundImage="url()";
							 
						}
						return;
					
					}
					var img = new Image();
					img.onload = loadImageFn;
					img.src = myArr[imageIndex];
				 };
				 clearInterval(tim);
			 }
            }
		  },
		  complete:function(XMLHttpRequest,textStatus){
				banner.onmouseover=function(){
					clearInterval(tim);
				};
				nav.onmouseover=function(){
					clearInterval(tim);
				};
				//setTimeout(function(){
				//	play();
                //},1000);
				banner.onmouseover=function(){
					clearInterval(tim);
				};
				nav.onmouseover=function(){
					clearInterval(tim);
				};

          },
          error:function(){
             alert('error...状态文本值： 异常信息：');
             myBanner[0].style.backgroundImage="url(img/Loading.gif)";
			 myBanner[0].style.backgroundRepeat="no-repeat";
			 myBanner[0].style.backgroundPosition="center center";
          },
	    })

		
	  //banner end
	 },
	 myNav:function(){    
        //nav start
			$('.nav_nav>li').hover(function(){
				$(this).find(".nav_jiantou").css({"border-top":"5px solid rgba(246,104,100,1)","transition":"0.5s all ease"});
				$(this).css({"background":"#f66864","transition":"0.5s all ease"});
			},function(){
				$(this).find(".nav_jiantou").css({"border-top":"5px solid rgba(246,104,100,0)","transition":"0.5s all ease"});
			    $(this).css({"background":"","transition":"0.5s all ease"});
		    }).trigger("mouseout");
		    $('.nav_nav>li').hover(function(){
				$(this).find("a").siblings().stop().slideToggle(300);
			})
		//nav end
	  }
  };
 
  header.myNav();
  header.myHead();