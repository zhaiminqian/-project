	//回到顶部
	$("#gotop").click(function(){
 		 $('body,html').animate({scrollTop:0},300);
 		 return false;
		});
		jQuery.support.cors = true; 
	var url=$.url();
    var $sea=url.param('sea');
	var $abot=url.param('abot')
	kxy_news={	
		kg:0,
		//企业新闻和行业新闻的切换
		new_table:function(){
			var pic=nc_picture.getElementsByTagName("div");
			var word=nc_bluebox.getElementsByTagName("ul");
			var meng=nc_picture.getElementsByTagName("span");
			var ull=nc_page_page.getElementsByTagName("ul");
			var proSingle_con=nc_bluebox.getElementsByTagName('ul')
				//console.log(proSingle_con)
		        for (var i = 1; i < proSingle_con.length; i++) {
              		proSingle_con[i].style.display = "none"
              	};
				for (var i = 0; i < meng.length; i++) {
              		meng[i].style.display = "none"
              	};
			    meng[0].style.display="block";
				if($abot=="abo"){
					proSingle_con[0].style.display = "none";
					meng[1].style.display="block";
					proSingle_con[1].style.display = "block"
					nc_bluedeg.style.top='198px'
				}else if($abot=="abot"){
					proSingle_con[0].style.display = "none";
					meng[2].style.display="block";
					proSingle_con[2].style.display = "block"
					nc_bluedeg.style.top='346px'
				}
			for(var i=0;i<pic.length;i++){
				pic[i].index=i
				pic[i].onmouseover=function(){
					kxy_news.kg=this.index
					for(var i=0;i<pic.length;i++){
						meng[i].style.display="none"
						nc_bluedeg.style.top="50px"
						word[i].style.display="none"
						ull[i].style.display="none"
					}
					meng[this.index].style.display="block";
					nc_bluedeg.style.top=50+148*this.index+'px';
					word[this.index].style.display="block";
					ull[this.index].style.display="block"
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
			//搜索
			$('#sou').click(function(){
			   var pro_val=$('#nc_sou').val();
			   window.location.href='searchResult.html?sea='+pro_val
			})
		},
	}
	kxy_news.new_table()
