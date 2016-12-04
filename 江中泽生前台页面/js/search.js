window.onload=function(){
	var search;
	search = {
		searchTab:function(){
			jQuery.support.cors = true;
			var url=$.url();
			var _sea = url.param('sea');
			var _pro = url.param('pro');
			$('.search_conR_pager>.pageclicknew:last').css('borderRight','0')
			$('.search_conR_pager>.pageclickpro:last').css('borderRight','0')
			var recordInd = 0;
			var searchIndex = document.querySelectorAll('#search_TAB>div');
			var searchShow = document.querySelectorAll('.search_con_right');
			var searchList = document.querySelectorAll('.search_list li');
			var pagenew;
			var pagepro;
			var newtabInd;
			var searchval = '';
			var newsearchval = '';
			var testsearchval;
			var newrecordInd = 0;
			var vokingarr = [invokingA,invokingB];
			var skipInd = 0;
			var clicktabInd;
			var newclicktabInd = 0;
			var clicktab;
			var TiaocountPro = 1;
			var TiaocountNew = 1;
			var pageTotal = 5;
			var listInd;
			// var ImgUrl='http://60.205.105.211/jz/public/upload/images/';
			$.ajax({
				url:'http://60.205.105.211:2403/advert',
				dataType:'json',
				type:'GET',
				success:function(e){
					$('.search_foot').css('backgroundImage','url(http://60.205.105.211/jz/public/upload/images/'+e[0].img+')')
				}
			})
			$("#gotop").click(function(){
			  	$('body,html').animate({scrollTop:0},300);
			  	return false;
			}); 
			search_inp.onfocus=function(){
				search_list.style.display='block';
			};
			search_inp.onblur=function(){
				setTimeout(function(){
					search_list.style.display='none';
				},150)
				
			};
			//检测是否高亮
			function testcli(){
				if(clicktabInd==0&&clicktabInd==pagenew.length-1){
					$('#pageone>li:first').css('background','#39ccd3')
					$('#pageone>li:last').css('background','#39ccd3')
				}else if(clicktabInd==0){
					$('#pageone>li:first').css('background','#39ccd3')
					$('#pageone>li:last').css('background','#16b1bf')
				}
				else if(clicktabInd==pagenew.length-1){
					$('#pageone>li:last').css('background','#39ccd3')
					$('#pageone>li:first').css('background','#16b1bf')
				}
				else if(clicktabInd>0&&clicktabInd<pagenew.length-1){
					$('#pageone>li:last').css('background','#16b1bf')
					$('#pageone>li:first').css('background','#16b1bf')
				}
				else if(clicktabInd<0){
					$('#pageone>li:first').css('background','#39ccd3')
				}
				else if(clicktabInd>pagenew.length){
					$('#pageone>li:last').css('background','#39ccd3')
				}
			}
			function testcliPro(){
				if(clicktabInd==0&&clicktabInd==pagepro.length-1){
					$('#pagetwo>li:first').css('background','#39ccd3')
					$('#pagetwo>li:last').css('background','#39ccd3')
				}else if(clicktabInd==0){
					$('#pagetwo>li:first').css('background','#39ccd3')
					$('#pagetwo>li:last').css('background','#16b1bf')
				}
				else if(clicktabInd==pagepro.length-1){
					$('#pagetwo>li:last').css('background','#39ccd3')
					$('#pagetwo>li:first').css('background','#16b1bf')
				}
				else if(clicktabInd>0&&clicktabInd<pagepro.length-1){
					$('#pagetwo>li:last').css('background','#16b1bf')
					$('#pagetwo>li:first').css('background','#16b1bf')
				}
				else if(clicktabInd<0){
					$('#pagetwo>li:first').css('background','#39ccd3')
				}
				else if(clicktabInd>pagepro.length){
					$('#pagetwo>li:last').css('background','#39ccd3')
				}
			}
			// 调取ajax
			function basicAjax(x){
				$.ajax({
					url:'http://60.205.105.211:2403/news?{"title":{"$regex":"'+encodeURIComponent(searchval)+'","$options":"i"},"$skip":'+x+',"$limit":12,"$sort":{"sort":1}}',
					dataType:'json',
					type:'GET',
					async:false, 
					success:function(r){
						// alert()
						$('#searchTaba').html('')
						for(var i = 0;i<r.length;i++){
							$('#searchTaba').append('<li><a href = "news_artical.html?id='+r[i].id+'"><span class = "search_conR_list_title">'+r[i].title.substring(0,27)+'</span><span class = "search_conR_list_date">'+r[i].date+'</span></a></li>')
						}
					}
				})
			}
			function basicAjaxpro(x){
				$.ajax({
					url:'http://60.205.105.211:2403/products?{"title":{"$regex":"'+encodeURIComponent(searchval)+'","$options":"i"},"tosubindex":1,"$skip":'+x+',"$limit":12,"$sort":{"sort":1}}',
					dataType:'json',
					type:'GET',
					async:false, 
					success:function(r){
						$('#searchTabb').html('')
						for(var i = 0;i<r.length;i++){
							$('#searchTabb').append('<li><a href = "Product_Single.html?id='+r[i].id+'&ificaction='+r[i].classification+'"><div></div><img src = "http://60.205.105.211/jz/public/upload/images/'+r[i].img[0].url+'"/><p>'+r[i].title+'</p></a></li>')
						}
					}
				})
			}
			// 点击左箭头和右箭头
			function rightClick(s,d,f,g,h){
				$('#'+s+'>li:last').bind('click',function(){
						newclicktabInd = clicktabInd;

					if(clicktabInd>=0&&clicktabInd<=f.length-2){
						clicktabInd++
					}
					else if(clicktabInd<0){
						clicktabInd=1;
					}
					skipInd = clicktabInd*12
					clicktab = clicktabInd*12;
					h()
					if(clicktabInd<f.length){
						$(d).css('background','#16b1bf')
						$(d).eq(clicktabInd).css('background','#39ccd3')
						if(newclicktabInd!=clicktabInd){
							g(clicktab)
						}

						
					}
				})
			}
			function leftClick(s,d,f,g){
				$('#'+s+'>li:first').bind('click',function(){
					newtabInd = clicktabInd;
					if(clicktabInd==0){
						clicktabInd = 0;
					}
					else if(clicktabInd>0){
						clicktabInd--
					}else{
						clicktabInd = -1;
					}
					skipInd = clicktabInd*12
					clicktab = clicktabInd*12;
					g()
					if(newtabInd!=clicktabInd){
						if(clicktabInd>=0){
							$(d).css('background','#16b1bf')
							$(d).eq(clicktabInd).css('background','#39ccd3')
							f(clicktab)
						}
					}
					
				})
			}
			// 测试有多少条数据 
			function testTiao(x,y,z){
				// 能被整除的
				if(x%12==0){
					x = parseInt(x/12)
					if(x>0){
						for(var i = 2;i<x+1;i++){
							$('#'+y+'>li:last').before('<li class = "'+z+'">'+i+'</li>')
						}
					}
					$('.search_conR_pager>.pageclicknew').css('borderRight','1px solid #13949f')
					$('.search_conR_pager>.pageclickpro').css('borderRight','1px solid #13949f')
					$('.search_conR_pager>.pageclicknew:last').css('borderRight','0')
					$('.search_conR_pager>.pageclickpro:last').css('borderRight','0')
				}else{
					//不能被整除的
					x = parseInt(x/12)
					if(x>0){
						for(var i = 2;i<x+2;i++){
							// TiaocountPro[i].index = i;
							$('#'+y+'>li:last').before('<li class = "'+z+'">'+i+'</li>')
						}
					}
					$('.search_conR_pager>.pageclicknew').css('borderRight','1px solid #13949f')
					$('.search_conR_pager>.pageclickpro').css('borderRight','1px solid #13949f')
					$('.search_conR_pager>.pageclicknew:last').css('borderRight','0')
					$('.search_conR_pager>.pageclickpro:last').css('borderRight','0')
				}
				if(x<1){
					$('#'+y+'>li:first').css('background','#39ccd3')
					$('#'+y+'>li:last').css('background','#39ccd3')
					$('.'+z+':eq(0)').css('background','#39ccd3')
				}
				else{
					$('#'+y+'>li:first').css('background','#39ccd3')
					$('#'+y+'>li:last').css('background','#16b1bf')
					$('.'+z+':eq(0)').css('background','#39ccd3')
				}
			}
			// 封装好的函数
			function invokingA(){
				searchval = search_inp.value;
				$.ajax({
					url:'http://60.205.105.211:2403/news?{"title":{"$regex":"'+encodeURIComponent(searchval)+'","$options":"i"},"id":"count"}',
					dataType:'json',
					type:'GET',
					success:function(e){
						TiaocountNew = e.count;
					},
					complete:function(){
						if(TiaocountNew==0){
							alert('抱歉，您搜索的内容不存在')
						}
							$('#pageone>li:first').unbind('click')
							$('#pageone>li:last').unbind('click')
							$('#pageone>li:gt(1):not(:last)').remove();
							skipInd = 0;
							clicktabInd = 0;
							testTiao(TiaocountNew,'pageone','pageclicknew')
							// 调取ajax 最简单的 筛选显示数据
							basicAjax(skipInd)
							// 
							pagenew = document.querySelectorAll('.pageclicknew');
							for(var i = 0;i<pagenew.length;i++){
								pagenew[i].index = i;
								pagenew[i].onclick = function(){
									clicktabInd = this.index;
									
									for(var i = 0;i<pagenew.length;i++){
										pagenew[i].style.background = '#16b1bf';
									}
									pagenew[this.index].style.background = '#39ccd3';
									if(skipInd!=this.index*12){
										skipInd = this.index*12;
										basicAjax(skipInd)
									}
									testcli()
								}
							}
							leftClick('pageone','.pageclicknew',basicAjax,testcli)
							rightClick('pageone','.pageclicknew',pagenew,basicAjax,testcli)
						}
				});
			}
			function invokingB(){
				// "$skip":'+skipInd+',"$limit":12
				searchval = search_inp.value;
				$.ajax({
					url:'http://60.205.105.211:2403/products?{"title":{"$regex":"'+encodeURIComponent(searchval)+'","$options":"i"},"tosubindex":1,"id":"count"}',
					dataType:'json',
					type:'GET',
					success:function(e){
						TiaocountPro = e.count;
					},
					complete:function(){
						if(TiaocountPro==0){
							alert('抱歉，您搜索的内容不存在')
						}
						$('#pagetwo>li:first').unbind('click')
						$('#pagetwo>li:last').unbind('click')
						$('#pagetwo>li:gt(1):not(:last)').remove();
						skipInd = 0;
						clicktabInd = 0;
						// testTiao(TiaocountNew,'pageone','pageclicknew')
						testTiao(TiaocountPro,'pagetwo','pageclickpro')
						// 调取ajax 最简单的 筛选显示数据
						basicAjaxpro(skipInd)
						// 
						pagepro = document.querySelectorAll('.pageclickpro');
						for(var i = 0;i<pagepro.length;i++){
							pagepro[i].index = i;
							pagepro[i].onclick = function(){
								clicktabInd = this.index;
								for(var i = 0;i<pagepro.length;i++){
									pagepro[i].style.background = '#16b1bf';
								}
								pagepro[this.index].style.background = '#39ccd3';
								if(skipInd!=this.index*12){
									skipInd = this.index*12;
									basicAjaxpro(skipInd)
								}
								testcliPro()
							}
						}
						leftClick('pagetwo','.pageclickpro',basicAjaxpro,testcliPro)
						rightClick('pagetwo','.pageclickpro',pagepro,basicAjaxpro,testcliPro)

					}
				})
			}
			// alert(_pro)
			if(_sea!=''&&_sea!=undefined&&_sea!='输入关键字'){
				newrecordInd=0
				search_inp.value = _sea;
				searchval = search_inp.value;
				invokingA();
			}
			if(_pro!=''&&_pro!=undefined&&_pro!='输入关键字'){
				newrecordInd=1;
				for(var j = 0;j<searchIndex.length;j++){
					searchIndex[j].style.background = 'white';
					searchIndex[j].style.color = 'black';
					searchShow[j].style.display = 'none';
				}
				searchIndex[newrecordInd].style.background = '#16b1bf';
				searchIndex[newrecordInd].style.color = '#ffffff';
				searchShow[newrecordInd].style.display = 'block';
				search_inp.value = _pro;
				searchval = search_inp.value;
				invokingB();
			}
				
			sou.onclick = function(){
				testsearchval = searchval;
				newrecordInd = recordInd;
				searchval = search_inp.value;
				if(searchval==''){
					alert('请输入内容')
				}else{
					if(recordInd==0&&testsearchval!=searchval){
						invokingA();
					}
					if(recordInd==1&&testsearchval!=searchval){
						invokingB();
					}
				}
				
			}
			for(var i = 0;i<searchIndex.length;i++){
				searchIndex[i].index = i;
				searchIndex[i].onclick = function(){
					// alert(1)
					for(var j = 0;j<searchIndex.length;j++){
						searchIndex[j].style.background = 'white';
						// searchIndex[j].style.transition = '0.2s all ease';
						searchIndex[j].style.color = 'black';
						searchShow[j].style.display = 'none';
					}
					searchIndex[this.index].style.background = '#16b1bf';
					searchIndex[this.index].style.color = '#ffffff';
					searchShow[this.index].style.display = 'block';
					newsearchval = searchval;
					searchval = search_inp.value;
					recordInd = this.index;
					if(searchval==''){
						alert('请输入内容')
					}else{
						if(newsearchval!=searchval&&newrecordInd!=recordInd){
							vokingarr[recordInd]();
							searchval = search_inp.value;
							newrecordInd = recordInd;
						}
						else if(newsearchval!=searchval||newrecordInd!=recordInd){
							vokingarr[recordInd]();
							searchval = search_inp.value;
							newrecordInd = recordInd;
						}
					}
				}
			}
			
			$.ajax({
				url:'http://60.205.105.211:2403/key?{"$sort":{"sort":1}}',
				type:'GET',
				success:function(e){
					// console.log(e)
					$('.search_list').html('')
					for(var i = 0;i<e.length;i++){
						$('.search_list').append('<li class = "search_list_li">'+e[i].title.substring(0,15)+'</li>')
					}
				},
				complete:function(){
					$('.search_list_li').on('click',function(){
						listInd = searchval;
						search_inp.value = this.innerHTML;
						searchval = search_inp.value;
						if(listInd!=searchval){
							if(recordInd==0){
								invokingA();
							}
							if(recordInd==1){
								invokingB();
							}
						}
						
					})
				}
			});
			

		},
	};
	search.searchTab();
	
}