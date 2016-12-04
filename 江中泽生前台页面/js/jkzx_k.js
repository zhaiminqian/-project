	//回到顶部
$("#gotop").click(function(){
 		 $('body,html').animate({scrollTop:0},300);
 		 return false;
		}); 
jQuery.support.cors = true;
var url=$.url();
var $id=url.param('id');
var $jianK=url.param('jianK');
var $classfication=url.param('ificaction');
if($jianK=="1"){
	nc_bluedeg.style.top='50px';
	$(".nc_picture_toggle").children('span').removeClass('nc_meng_show')
	$("#picture_one").children('span').addClass('nc_meng_show')
}else if($jianK=="2"){
	nc_bluedeg.style.top='198px';
	$(".nc_picture_toggle").children('span').removeClass('nc_meng_show')
	$("#picture_two").children('span').addClass('nc_meng_show')
}else if($jianK=="3"){
	nc_bluedeg.style.top='346px';
	$(".nc_picture_toggle").children('span').removeClass('nc_meng_show')
	$("#picture_three").children('span').addClass('nc_meng_show')
}
kxy_news={
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
		news_list:function(){
			var state=0;//开始页数
			if (getQueryString('jianK')==null)
			{
				fenlei=1
				$(".picture_one>span").addClass('nc_meng_show')

			}else{
				fenlei=getQueryString('jianK')
			};//分类，classification
			var zong;
			function click(){
				$("#nc_page_page_one>li").click(function(){
					$(this).addClass('nc_page_click').siblings().removeClass('nc_page_click')
					state=$(this).index()*12;
					ajax()
				})
				$(".nc_page_left").click(function(){
					if(state!=0){
						$('.nc_page_click').removeClass('nc_page_click').prev().addClass('nc_page_click')
						state=state-12;
						ajax()
					}
				})
				$(".nc_page_right").click(function(){
					if(zong-12>state){
						$('.nc_page_click').removeClass('nc_page_click').next().addClass('nc_page_click')
						state=state+12;
						ajax()
					}
				})
			}
			function page(){
				$.ajax({  //根据后台数据条数生成分页按钮
					type:"get",
					url:'http://60.205.105.211:2403/info?{"id":"count","classification":'+fenlei+'}',
					success:function(data){
						zong=data.count;
						$("#nc_page_page_one").html("");
						for(var i=0;i<data.count/12;i++){
							$("#nc_page_page_one").append("<li>"+(i+1)+"</li>")
						}
						click();
						$("#nc_page_page_one>li:eq(0)").addClass('nc_page_click')
					}
				})
			}
				function getQueryString(name) { 
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
				var r = window.location.search.substr(1).match(reg); 
				if (r != null) return unescape(r[2]); return null; 
			}
			function ajax(){
				$.ajax({  //默认显示的数据
					type:"get",
					url:'http://60.205.105.211:2403/info?{"$skip":'+state+',"$limit":12,"classification":'+fenlei+',"$fields":{"title":1,"date":1}}',
					success:function(data){
						$(".nc_loading").hide()
						$("#list_one").show()
						$("#list_one").html("");
						for(var i in data){
							var title=data[i].title
							if(title.length<27){
								title=title
							}else if(title.length>27){
								title=title.substring(0,27)+"..."
							}
							$("#list_one").append('<li><a href="jkzx_artical.html?id='+data[i].id+'"><span>'+data[i].title+'</span><span class="nc_list_date">'+data[i].date+'</span></a></li>')
						}
					},
					beforeSend:function(){
						$("#list_one").hide()
						$(".nc_loading").show()
					},

				});
			}
			page();
			ajax();
			
			$(".nc_picture_toggle").mouseover(function(){
				if($(this).children('span').attr("class").indexOf("nc_meng_show")==-1){
				state=0;
				fenlei=$(this).index()+1;
				$("#nc_bluedeg").css("top",50+148*$(this).index()+'px');
				$(this).siblings().children('span').removeClass('nc_meng_show')

				$(this).children('span').addClass('nc_meng_show')
				page();
				ajax();
			 }
			});
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
		news_sou:function(){
			$('#sou').click(function(){
			   var news_list_sou=$('#nc_sou').val();
			   window.location.href='searchResult.html?sea='+news_list_sou
			})
		}
	}
kxy_news.guanggao()
kxy_news.news_list();
kxy_news.news_sou();
