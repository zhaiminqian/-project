jQuery.support.cors = true;
var url=$.url();
var $id=url.param('id');
var $form=url.param('form');
var $classfication=url.param('ificaction');
if($form=="1"){
	Product_sanjiao.style.left='56px'
}else if($form=="2"){
	Product_sanjiao.style.left='226px'
}else if($form=="3"){
	Product_sanjiao.style.left='396px'
}else if($form=="4"){
	Product_sanjiao.style.left='566px'
}else if($form=="5"){
	Product_sanjiao.style.left='744px'
}else if($form=="6"){
	Product_sanjiao.style.left='906px'
}
pro_center={
		news_list:function(){
			var state=0;//开始页数
			if (getQueryString('form')==null)
			{
				fenlei=1
			}else{
				fenlei=getQueryString('form')
			};
			var zong;
			var myUrl_images="http://60.205.105.211/jz/public/upload/images/";
			function click(){
				$("#pro_page_page_one>li").click(function(){
					$(this).addClass('nc_page_click').siblings().removeClass('nc_page_click')
					state=$(this).index()*3;
					ajax()
				})
				$(".nc_page_left").click(function(){
					if(state!=0){
						$('.nc_page_click').removeClass('nc_page_click').prev().addClass('nc_page_click')
						state=state-3;
						ajax()
					}
				})
				$(".nc_page_right").click(function(){
					if(zong-3>state){
						$('.nc_page_click').removeClass('nc_page_click').next().addClass('nc_page_click')
						state=state+3;
						ajax()
					}
				})
			}
			function page(){
				$.ajax({  //根据后台数据条数生成分页按钮
					type:"get",
					url:'http://60.205.105.211:2403/products?{"id":"count","classification":'+fenlei+',"tosubindex":"1"}',
					success:function(data){
						zong=data.count;
						$("#pro_page_page_one").html("");
						for(var i=0;i<data.count/3;i++){
							   $("#pro_page_page_one").append("<li>"+(i+1)+"</li>")
						}
						click();
						$("#pro_page_page_one>li:eq(0)").addClass('nc_page_click')
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
					url:'http://60.205.105.211:2403/products?{"$skip":'+state+',"$limit":3,"classification":'+fenlei+',"tosubindex":1,"$fields":{"summary":1,"img":1,"title":1,"classification":1,"tosubindex":1},"$sort":{"sort":-1}}',
					success:function(data){
						if (data=='')
						{
							$("#producr_list_one").html('<p class="jingqingqidai">敬请期待！</p>');
							if ($("#producr_list_one").html('<p class="jingqingqidai">敬请期待！</p>'))
							{
								$("#pro_page_page_one").html("<ul class='Product_publicity_content_page' id = 'producr_list_one'><li class='nc_page_click'>1</li></ul>")
							}
						}else{
						    $("#producr_list_one").show()
						    $("#producr_list_one").html("");
							for(var i in data){
								if (data[i].tosubindex==1)
								{
								   var title=data[i].title;
								   var summary=data[i].summary;
								   if (title.length>5)
								   {
									   var title=data[i].title.substring(0,9)+"..."
								   }else{
									   var title=title
								   }
								   if (summary.length>45)
								   {
									   var summary=data[i].summary.substring(0,45)+"..."
								   }else{
									   var summary=summary
								   }
									   $("#producr_list_one").append('<li><div class = "Product_publicity_content_two_tab" ><a href="Product_Single.html?id='+data[i].id+'&ificaction='+data[i].classification+'"><div class = "Product_tab"><div class = "Product_tab_img"><p class = "Product_tab_p"><img src='+myUrl_images+data[i].img[0].url+'></p></div><div class="Product_tab_two"><p>'+title+'</p><p>'+summary+'</p></div></div></a></div></li>')
								}
							}
							if (data.length==2)
							{
								$('#producr_list_one>li').css({'width':'50%'})
							}
							if (data.length==1)
							{
								$('#producr_list_one>li').css({'width':'100%'})
							}
						}
					}
				});
			}
			page();
			ajax();
			$(".nc_picture_toggle").mouseover(function(){
				state=0;
				fenlei=$(this).index()+1;
				$("#Product_sanjiao").css("left",56+170*$(this).index()+'px');
				page();
				ajax();
			})
		},
	}
pro_center.news_list();