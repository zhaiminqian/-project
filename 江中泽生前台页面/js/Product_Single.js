jQuery.support.cors = true;
single={
    single_hover:function(){
		var url=$.url();
		var $pro=url.param('pro');
		var $id=url.param('id');
		var $form=url.param('form');
		var $classfication=url.param('ificaction');
		var $classficat=url.param('classficat');
		var myUrl="http://60.205.105.211:2403/products/";		
		var myUrl_images="http://60.205.105.211/jz/public/upload/images/";
		var tim;
	//product_single:function(){    
			//搜索
			$('.single_souzuo').click(function(){
			   var pro_val=$('.Pro_sin_sou').val();
			   window.location.href='searchResult.html?pro='+pro_val
			})
	//},
	//single_carousel:function(){
		clearInterval(tim);
		function pro_play_ajax(){
			$.ajax({
			   type:'GET',
			   url:'http://60.205.105.211:2403/products?id='+$id+'&classification='+$classfication,
			   dataType:'json',
			   success:function(e){
				  var htmll;
				  var title=e.title;
				  var summary=e.summary;
				  var costprice=e.costprice;
				  var rulingprice=e.rulingprice;
				  var img=e.img;
				  var Costprice=e.Costprice;
				  var content=e.content;
				  var classfi=e.classification;
				  var hhref=e.href;
                  console.log(hhref)
				  $('#single_tab_right').show()
				  $('#single_tab_right').html("");
				  if (title.length>7)
					{
						var title=title.substring(0,7)+"..."
					}else{
						var title=title
					}
					if (summary.length>67)
					{
						var summary=summary.substring(0,67)+"..."
					}else{
						var summary=summary
					}
				//组装页面
				  html='<li><div class = "single_tab_right_one"><div class = "single_carousel"><a href="javascript:;"><div class = "single_carousel_img"></div></a><div class = "single_carousel_dian"></div></div><div class = "product_presentation"><p class = "product_presentation_title">'+title+'</p><p class = "product_presentation_con"><a href="javascript:;">'+summary+'</a></p><div class = "single_price"><span><s>原价:'+costprice+'</s></span><span>现价:</span><span><i>￥'+rulingprice+'</i></span></div><div class = "single_add"><div><input type="text" value="1" id="pro_click"></div><div><p class="pro_click_jia"><img src="img/Product_29.png"></p><p class="pro_click_jie"><img src="img/Product_30.png"></p></div></div><p class = "single_buy"><span class = "single_zi_hover"><a href='+hhref+'>立即购买</span></a><span><a href='+hhref+'>立即购买</span></a></p></div></div><div class = "single_tab_right_two"><p class = "single_con_two_title">产品详情</p><div class="fuwenben">'+content+'</div></div></li>';
				  $('#single_tab_right').append(html)
				  $('.pro_single_nav_two').html(title);

				//关爱老人标题&箭头
				  if (classfi==1)
				  {
					  $('.pro_single_nav_one').html('<li>关爱老人&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='74px';
				  }else if (classfi==2)
				  {
					  $('.pro_single_nav_one').html('<li>工作健康&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='214px';
				  }else if (classfi==3)
				  {
					  $('.pro_single_nav_one').html('<li>年轻女性&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='354px';
				  }else if (classfi==4)
				  {
					  $('.pro_single_nav_one').html('<li>儿童成长&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='494px';
				  }else if (classfi==5)
				  {
					  $('.pro_single_nav_one').html('<li>养肝护肝&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='634px';
				  }else if (classfi==6)
				  {
					  $('.pro_single_nav_one').html('<li>运动营养&nbsp;>&nbsp;</li>');
					  single_sanjiao.style.top='774px';
				  }

				//轮播
				   for (var i=0;i<img.length;i++){
					  var uid=img[i].url;
					  var bannerImg="<div class='pro_lunbo'></div>";
					  $('.single_carousel_img').append(bannerImg);
					  var banerPoin="<div></div>";
					  $('.single_carousel_dian').append(banerPoin);
					  $('.single_carousel_img div').eq(i).css({"background":"url("+myUrl_images+uid+")","background-size":"cover","background-repeat":"no-repeat"});
					  $('.single_carousel_dian>div').eq(0).addClass("banner_on")
				   }
				   if (img.length>1){
					   clearInterval(tim);
					   play()
					   var index=0;
					   function play(){
							var len=$('.single_carousel_dian>div').length;
							function showtab(x){
									$('.single_carousel_img').find(".pro_lunbo").hide().eq(x).fadeIn(500);
									$('.single_carousel_dian>div').removeClass("banner_on").eq(x).addClass("banner_on");
							}
							$('.single_carousel').hover(function(){
								clearInterval(tim);
							});
							$(".single_carousel").hover(function(){
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
								},1500)
							}).trigger("mouseout");
								var jilu=0;
							$('.single_carousel_dian>div').click(function(){
								 
								 if($('.single_carousel_dian>div').index(this)==index)return;
								 index=$('.single_carousel_dian>div').index(this);
								 showtab(index);
							});
					   };
				   }else if (img.length==1)
				   {
						$('.single_carousel_dian').html('')
						clearInterval(tim);
						$('.single_carousel_img>div').css('display','block')
				   }
			   },
			   complete:function(){
				  $('.pro_click_jie').click(function(){
					  if(pro_click.value==1){
						 pro_click.value=1;
					  }else if(pro_click.value>0){	
						 pro_click.value--;   
					  }
				  });
				  $('.pro_click_jia').click(function(){
					  pro_click.value++
				  });
			   },
			})
		}	
	    pro_play_ajax()
	//},
		var single_tab=single_tab_left.getElementsByTagName('a');
		fenlei=1;
		for (var i=0;i<single_tab.length;i++)
		{
            single_tab[i].index=i;
			single_tab[i].onmouseover=function(){
				fenlei=$(this).index()+1;
				clearInterval(tim);
				if ($classfication!=fenlei)
				{
					$.ajax({
					   type:'GET',
					   url:'http://60.205.105.211:2403/products?{"classification":'+fenlei+',"$sort":{"sort":-1}}',
					   dataType:'json',
					   success:function(e){
						  if (e=='')
						  {
							  $('#single_tab_right').html('<p class="jingqingqidai">敬请期待！</p>')
							  if (fenlei==5)
							  {
								  single_sanjiao.style.top='634px';
							  }else if (fenlei==6)
							  {
								  single_sanjiao.style.top='774px';
							  }
						  }else{
							  var htmll;
							  var title=e[0].title;
							  var summary=e[0].summary;
							  var costprice=e[0].costprice;
							  var rulingprice=e[0].rulingprice;
							  var img=e[0].img;
							  var Costprice=e[0].Costprice;
							  var content=e[0].content;
							  var classfi=e[0].classification;
							  var hhref=e[0].href;
							  $('#single_tab_right').show()
							  $('#single_tab_right').html("");
							  if (title.length>7)
								{
									var title=e[0].title.substring(0,7)+"..."
								}else{
									var title=e[0].title
								}
								if (summary.length>67)
								{
									var summary=e[0].summary.substring(0,67)+"..."
								}else{
									var summary=e[0].summary
								}
							//组装页面
							  html='<li><div class = "single_tab_right_one"><div class = "single_carousel"><a href="javascript:;"><div class = "single_carousel_img"></div></a><div class = "single_carousel_dian"></div></div><div class = "product_presentation"><p class = "product_presentation_title">'+title+'</p><p class = "product_presentation_con"><a href="javascript:;">'+summary+'</a></p><div class = "single_price"><span><s>原价:'+costprice+'</s></span><span>现价:</span><span><i>￥'+rulingprice+'</i></span></div><div class = "single_add"><div><input type="text" value="1" id="pro_clickk"></div><div><p class="pro_click_jia"><img src="img/Product_29.png"></p><p class="pro_click_jie"><img src="img/Product_30.png"></p></div></div><p class = "single_buy"><span class = "single_zi_hover"><a href='+hhref+'>立即购买</span></a><span><a href='+hhref+'>立即购买</span></a></p></div></div><div class = "single_tab_right_two"><p class = "single_con_two_title">产品详情</p><div class="fuwenben">'+content+'</div></div></li>';
							  $('#single_tab_right').append(html)
							  $('.pro_single_nav_two').html(title);

							//关爱老人标题&箭头
							  if (classfi==1)
							  {
								  $('.pro_single_nav_one').html('<li>关爱老人&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='74px';
							  }else if (classfi==2)
							  {
								  $('.pro_single_nav_one').html('<li>工作健康&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='214px';
							  }else if (classfi==3)
							  {
								  $('.pro_single_nav_one').html('<li>年轻女性&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='354px';
							  }else if (classfi==4)
							  {
								  $('.pro_single_nav_one').html('<li>儿童成长&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='494px';
							  }else if (classfi==5)
							  {
								  $('.pro_single_nav_one').html('<li>养肝护肝&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='634px';
							  }else if (classfi==6)
							  {
								  $('.pro_single_nav_one').html('<li>运动营养&nbsp;>&nbsp;</li>');
								  single_sanjiao.style.top='774px';
							  }

							//轮播
							   for (var i=0;i<img.length;i++){
								  var uid=img[i].url;
								  var bannerImg="<div class='pro_lunbo'></div>";
								  $('.single_carousel_img').append(bannerImg);
								  var banerPoin="<div></div>";
								  $('.single_carousel_dian').append(banerPoin);
								  $('.single_carousel_img div').eq(i).css({"background":"url("+myUrl_images+uid+")","background-size":"cover","background-repeat":"no-repeat"});
								  $('.single_carousel_dian>div').eq(0).addClass("banner_on")
							   }
							   if (img.length>1){
								   clearInterval(tim);
								   play()
								   var index=0;
								   function play(){
										var len=$('.single_carousel_dian>div').length;
										function showtab(x){
												$('.single_carousel_img').find(".pro_lunbo").hide().eq(x).fadeIn(500);
												$('.single_carousel_dian>div').removeClass("banner_on").eq(x).addClass("banner_on");
										}
										$('.single_carousel').hover(function(){
											clearInterval(tim);
										});
										$(".single_carousel").hover(function(){
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
											},1500)
										}).trigger("mouseout");
											var jilu=0;
										$('.single_carousel_dian>div').click(function(){
											 
											 if($('.single_carousel_dian>div').index(this)==index)return;
											 index=$('.single_carousel_dian>div').index(this);
											 showtab(index);
										});
								   };
							   }else if (img.length==1)
							   {
									$('.single_carousel_dian').html('')
									clearInterval(tim);
									$('.single_carousel_img>div').css('display','block')
							   }
						  }
					   },
					   complete:function(){
						  $('.pro_click_jie').click(function(){
							  if(pro_clickk.value==1){
								 pro_clickk.value=1;
							  }else if(pro_clickk.value>0){	
								 pro_clickk.value--;   
							  }
						  });
						  $('.pro_click_jia').click(function(){
							  pro_clickk.value++
						  });
					   },
					})
				}else{
					pro_play_ajax()
			    }
			}
		}
    }
};

//single.product_single();
//single.single_carousel();
single.single_hover();