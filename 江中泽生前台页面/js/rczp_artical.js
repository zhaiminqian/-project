	//回到顶部
	$("#gotop").click(function(){
 		 $('body,html').animate({scrollTop:0},300);
 		 return false;
		});
		jQuery.support.cors = true; 
		var url=$.url();
		var sea=url.param("sea")
		var $zp=url.param('zp')
	kxy_news={	
		kg:0,
		guanggao:function(){
		$.ajax({
				url:"http://60.205.105.211:2403/advert/",
				dataType:"json",
				type:"get", 
				success:function(e){
					for(var i=0;i<e.length;i++){
						var img=e[i].img;
						var href=e[i].href;
						$("#href").attr("href",href)
			            $("#href > div > img ").attr("src","http://60.205.105.211/jz/public/upload/images/"+img)
					}
				}
			});

	},
		//企业新闻和行业新闻的切换
		new_table:function(){			
				if($zp==1||$zp==2||$zp==3){
					list_two.style.display = "none"
					list_one.style.display = "block"
					nc_bluedeg.style.top='50px'
					$(".nc_picture_toggle").children('span').addClass('nc_meng_hide')
					$("#picture_one").children('span').addClass('nc_meng_show').removeClass('nc_meng_hide')
				}else if($zp==4||$zp==5||$zp==6){
					list_one.style.display = "none"
					list_two.style.display = "block"
					nc_bluedeg.style.top='198px'
					$(".nc_picture_toggle").children('span').addClass('nc_meng_hide')
					$("#picture_two").children('span').addClass('nc_meng_show').removeClass('nc_meng_hide')
				}
			var pic=nc_picture.getElementsByTagName("div");
			var word=$(".nc_bluebox")
			var meng=nc_picture.getElementsByTagName("span");
		
			for(var i=0;i<pic.length;i++){
				pic[i].index=i
				pic[i].onmouseover=function(){
					kxy_news.kg=this.index
					for(var i=0;i<pic.length;i++){
						meng[i].style.display="none"
						nc_bluedeg.style.top="50px"
						word[i].style.display="none"
					}
					meng[this.index].style.display="block";
					nc_bluedeg.style.top=50+148*this.index+'px';
					word[this.index].style.display="block";
				}
			};
			//关键字搜索下拉
			nc_sou.onfocus=function(){
				if(this.value=="输入关键字"){7
					this.value=""
				};
				nc_menu.style.display="block"
			};
			nc_sou.onblur=function(){
				if(this.value==""){
					this.value="输入关键字"
				};
				nc_menu.style.display="none"
			};
		},
		news_sou:function(){
			$('#sou').click(function(){
			   var news_list_sou=$('#nc_sou').val();
			   window.location.href='searchResult.html?sea='+news_list_sou
			})
		}

	}
	kxy_news.guanggao()
	kxy_news.new_table()
	kxy_news.news_sou()
