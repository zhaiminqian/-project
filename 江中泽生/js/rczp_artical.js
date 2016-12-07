	//回到顶部
	$("#gotop").click(function(){
 		 $('body,html').animate({scrollTop:0},300);
 		 return false;
		}); 
	jQuery.support.cors = true;
	kxy_news={	
		kg:0,
		guanggao:function(){
		$.ajax({
				url:"http://www.jzzsyy.com:2403/advert/",
				dataType:"json",
				type:"get", 
				success:function(e){
					for(var i=0;i<e.length;i++){
						var img=e[i].img;
						var href=e[i].href;
						$("#href").attr("href",href)
			            $("#href > div > img ").attr("src","http://www.jzzsyy.com/jz/public/upload/images/"+img)
					}
				}
			});
	},
		
		//企业新闻和行业新闻的切换
		new_table:function(){
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
					}
					meng[this.index].style.display="block";
				}
			};

				//关键字搜索下拉
			nc_sou.onfocus=function(){
				if(this.value=="输入关键字"){
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
		//关于ajax
		news_ajax:function(){
			var url=window.location.href
			//alert(url)
			var _id=url.split("?")[1].split("=")[1]
			//封装ajax
			function ajax_news(x){
				$.ajax({
					url:'http://www.jzzsyy.com:2403/jobs',
					data:{id:_id},
					dataType:"json",
					type:"get",
					error:function(){
							alert("错误")
						},
					success:function(e){
						//alert(e.classification)
						$(".nc_loading").hide()
					    var html=''		 
		              	html='<p class="nc_list_title"><a href="javascript:;"><span>'+e.title+'</span><span class="nc_list_date">'+e.date+'</span></a></p><p>'+e.content+'</p>' 
		           		if(e.classification==1){
		           			$("#nc_bluedeg").css("top","50px")
		           			$("#picture_seven").css("display","none")
		           		};
		           		if(e.classification==2){
		           			$("#nc_bluedeg").css("top","50px")
		           			$("#picture_six").css("display","none")
		           		}
		           		$("#list_one").html(html)
		           		$("#list_one img").parent('p').css("text-align","center");
		           		$("#list_one img").parent('p').css("text-indent","0em");
		           		if($(".MsoNormal").css("textAlign","center")){
		           			$(".MsoNormal").css("textAlign","left")
		           		}
					},
					beforeSend:function(){
						$(".nc_loading").show()
					}	
				})
			}
			ajax_news()
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
	kxy_news.news_ajax()
	kxy_news.news_sou()
