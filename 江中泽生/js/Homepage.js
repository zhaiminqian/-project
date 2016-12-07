/* Homepage js create by zhaiminqian*/
jQuery.support.cors = true;
var Homepage={};
// video
Homepage.Video_fn=function(){
    var a = 0;
	loadTiao.onclick = function(e){
		var needW = ((e.pageX-loadTiao.offsetLeft-outer.offsetLeft)/loadTiao.offsetWidth*100);
		var VideoBtn_lj=e.pageX-loadTiao.offsetLeft-outer.offsetLeft;
		xiaoTiao.style.width = needW+'%';
		VideoBtn.style.left=VideoBtn_lj+"px";
		video.currentTime = video.duration*(needW/100);
	}
	video.addEventListener('timeupdate',function(){
		xiaoTiao.style.width = video.currentTime/video.duration*100+'%';
		VideoBtn.style.left=video.currentTime/video.duration*100-1.1+"%";
	},false);
	video.addEventListener('ended',function(){
		kaiguan.innerHTML = '<img src="img/Home_kaiguan.png" alt="">';
	},false);
    volume.onclick = function(e){
		var needW = ((e.pageX-volume.offsetLeft-outer.offsetLeft)/volume.offsetWidth*100);
		var VideoBtn_lj2=e.pageX-volume.offsetLeft-outer.offsetLeft;
		video.volume = needW/100;
		darg.style.width = needW+'%';
		VideoBtn_two.style.left=(needW)+'%';
	}
// 加载条的拖拽 ：音量条
	var tuoZhuai=function(x,y){
		y.onmousedown = function(ev){
			var oEvent = ev || event;
			var disX = oEvent.clientX - y.offsetLeft;

			document.onmousemove = function(ev){
				var oEvent = ev || event;
				var l = oEvent.clientX - disX;
				var Dtrg=l/x.offsetWidth*100
				if(l<=0){
					l = 0;
					video.volume = 0;
				}
				else if(l > x.offsetWidth - y.offsetWidth )
				{
					l = x.offsetWidth - y.offsetWidth 
                }
				if(Dtrg<0){
					Dtrg=0
				}else if(Dtrg>x.offsetWidth - y.offsetWidth+8 ){
					Dtrg=x.offsetWidth - y.offsetWidth+8
				}
				video.volume = (y.offsetLeft+y.offsetWidth)/x.offsetWidth;
				if(l<=0){
					video.volume = 0;
				}
				y.style.left = l +'px';
				darg.style.width = Dtrg+'%';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup   = null;
		}
		return false;

		}
	}
    tuoZhuai(volume,VideoBtn_two)
//  加载条的拖拽 ：播放条
	var BoF=function(){
		VideoBtn.onmousedown = function(ev){
				var oEvent = ev || event;
				var disX = oEvent.clientX - VideoBtn.offsetLeft;

				document.onmousemove = function(ev){
					var oEvent = ev || event;
					var l = oEvent.clientX - disX;
					var Dtrg=l/loadTiao.offsetWidth*100
					if(l<0){
						l = 0;
					}
					else if(l > loadTiao.offsetWidth - VideoBtn.offsetWidth )
					{
						l = loadTiao.offsetWidth - VideoBtn.offsetWidth 

					}
					if(Dtrg<0){
						Dtrg=0
					}else if(Dtrg>loadTiao.offsetWidth - VideoBtn.offsetWidth+8 ){
						Dtrg=loadTiao.offsetWidth - VideoBtn.offsetWidth+8
					}
					VideoBtn.style.left = l +'px';
					xiaoTiao.style.width = Dtrg+'%';
					var needW = ((ev.pageX-loadTiao.offsetLeft-outer.offsetLeft)/loadTiao.offsetWidth*100);
		            video.currentTime = video.duration*(needW/100);
		            video.pause();
		            kaiguan.innerHTML = '<img src="img/Home_kaiguan.png" alt="start">';
			};

			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup   = null;
				video.play();
				video_btn.style.background="none";
				kaiguan.innerHTML = '<img src="img/Home_kaiguan2.png" alt="start">';
			}
			return false;
		 }
	}
    BoF();
    video.src='http://www.jzzsyy.com/zhuanti/Home-page-video/jzzs_officeVideo_1.mp4?t='+Math.random();
    video.addEventListener('progress', function (){
		loadingTiao.style.width=Math.round(100*video.buffered.end(0)/video.duration)+'%';
	}, false);
// 开关点击效果
    kaiguan.onclick = function(){
		a++;
		if(a%2==1){
			this.innerHTML = '<img src="img/Home_kaiguan2.png" alt="start">';
			$('.homepage_bgimg').remove();
			video.play();
			video_btn.style.background="none";
		}else{
			this.innerHTML = '<img src="img/Home_kaiguan.png" alt="start">';
			video.pause();
			video_btn.style.background="url(img/Home_Video.png) no-repeat center center";
		}
	}
	kaiguan.onmousedown = function(){
		return false;
	}
// 音量按钮点击效果
	video_btn.onclick=function(){
    	a++;
		if(a%2==1){
			video_btn.style.background="none";
            kaiguan.innerHTML = '<img src="img/Home_kaiguan2.png" alt="start">';
            $('.homepage_bgimg').remove();
			video.play();
		}else{
            video_btn.style.background="url(img/Home_Video.png) no-repeat center center";
			kaiguan.innerHTML = '<img src="img/Home_kaiguan.png" alt="start">';
			video.pause();
		}
    }
}
Homepage.Video_fn()
// input关键字
Homepage.ipt=function(){
	input.onfocus=function(){
		if(this.value=="输入关键字"){
			this.value=""
		};
		nc_menu.style.display="block"
	    };
		input.onblur=function(){
			if(this.value==""){
				this.value="输入关键字"
			};
			nc_menu.style.display="none"
		};
}
Homepage.ipt()
//关键字跳转
Homepage.ipt_two=function(){
	var url=$.url();
	var $sea=url.param('sea');
	var val="";
	$('.search').click(function(){
		val=input.value;
        $(".search>a").attr('href','searchResult.html?sea='+val);
	});
}
Homepage.ipt_two()
 //header nav banner
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

        var myUrl="http://www.jzzsyy.com:2403/play/";
	    var myUrl_images="http://www.jzzsyy.com/jz/public/upload/images/";
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
//判断浏览器
Homepage.Bom=function(){
   if(navigator.userAgent.indexOf("Chrome")!=-1){
    	input.style.width="296px";
    }
}
Homepage.Bom()
//返回顶部
Homepage.returnTop=function(){
	$(".k_gotop").click(function(){
	  $('body,html').animate({scrollTop:0},300);
	  return false;
	}); 
}
Homepage.returnTop()
Homepage.AjaxZ=function(){
	$.ajax({
		url:'http://www.jzzsyy.com:2403/news?{"$skip":0,"$limit":4,"$sort":{"sort":-1}}',
		dataType:"json",
		type:"get",
		success:function(e){
			var htmlN='';
			var htmlN2='';
			for(var i=0;i<e.length;i++){
				var title=e[i].title;
				var date=e[i].date;
				var img=e[i].img;
				var content=e[i].content;
				// console.log(content)
				var id=e[i].id;
                htmlN+='<li><a href="javascript:;">'+date+'</a></li>';
                htmlN2+='<a href="news_artical.html?id='+id+'"><li><div class="news"><div class="opcity_bj"></div><img src="http://www.jzzsyy.com/jz/public/upload/images/'+img+'"><div class="Home_bj">'+title+'</div></div><div class="Home_text"><div class="aa">'+unescape(content)+'</div></div></li></a>'
	        };
	        $(".HomeCont_two_left").html(htmlN);
	        $(".HomeCont_two_right").html(htmlN2);
	    //新闻中心的tab切换
	        var nwesTabLI=$(".HomeCont_two_right>a>li");
            var nwesTab=$(".HomeCont_two_left>li>a");
            for(var i=0;i<nwesTab.length;i++){
              nwesTab[i].index=i;
              nwesTabLI[i].index=i;
	          nwesTabLI[i].className="Home_hidden";
		      nwesTab[0].className="hover";
		      nwesTabLI[0].className="";
		      nwesTab[i].onclick=function(){
		      	for(var i=0;i<nwesTab.length;i++){
		           nwesTabLI[i].className="Home_hidden";
		           nwesTab[i].className="";
		        }
		           nwesTabLI[this.index].className="";
		           nwesTab[this.index].className="hover";
		        }
		   }
	    }
	});
    $.ajax({
		url:'http://www.jzzsyy.com:2403/products?{"$skip":0,"$limit":6,"toindex":1,"$sort":{"sort":-1},"$fields":{"content":0}}',
		dataType:"json",
		type:"get",
		success:function(e){
		    	var htmlP=''
				for(var i=0;i<e.length;i++){
				    var img=e[i].img[0].url;
		            var title=e[i].title;
		            var id=e[i].id;
		            var classification=e[i].classification;	
		            htmlP+='<li><a href="Product_Single.html?id='+id+'&ificaction='+classification+'" style="background:url(http://www.jzzsyy.com/jz/public/upload/images/'+img+') center center no-repeat;background-size:cover"><div class="opcity_bj"></div><div class="Home_bj2">'+title+'</div></a></li>'            
                }
                $(".Home_show").html(htmlP);
		    }
	});
	$.ajax({
		url:'http://www.jzzsyy.com:2403/info?{"$skip":0,"$limit":3,"toindex":1,"classification":3,"$sort":{"sort":-1},"$fields":{"content":0}}',
		dataType:"json",
		type:"get", 
		success:function(e){
			var htmlI='';
			for(var i=0;i<e.length;i++){
				var title=e[i].title;
				var img=e[i].img;
				var id=e[i].id;
	            htmlI+='<li><a href="jkzx_artical.html?id='+id+'" style="background:url(http://www.jzzsyy.com/jz/public/upload/images/'+img+') center center no-repeat;background-size:cover"><div class="opcity_bj"></div><div class="Home_bj3">'+title+'</div></a></li>'
	        } 
	        $(".HomeAnli").html(htmlI);
		}
	});
	$.ajax({
		url:"http://www.jzzsyy.com:2403/advert/",
		dataType:"json",
		type:"get", 
		success:function(e){
			for(var i=0;i<e.length;i++){
				var img=e[i].img;
				var href=e[i].href;
				$("#href").attr("href",href)
	            $("#href > img ").attr("src","http://www.jzzsyy.com/jz/public/upload/images/"+img)
			}
		}
	});
	$.ajax({
		url:"http://www.jzzsyy.com:2403/about?classification=1",
		dataType:"json",
		type:"get", 
		success:function(e){
		    var content=unescape(e[0].content);
	        $(".Home_cont>p").html(content);
	        var HTML=$(".Home_cont>p").html();
	        var ht=HTML.replace(/<.*?>/ig,"");
	        $(".Home_cont>p").html(ht);
		}
	})
}
Homepage.AjaxZ()
