	jQuery.support.cors = true;
	//回到顶部
	$("#gotop").click(function(){
 		 $('body,html').animate({scrollTop:0},300);
 		 return false;
		}); 
	var url=$.url();
	var $sea=url.param('sea');
	var abo_val=$('#nc_sou').val();
	var $about=url.param('about')
		kxy_news={	
		kg:0,
		//企业新闻和行业新闻的切换
		new_table:function(){
			    var proSingle_con = document.getElementsByClassName('nc_bluebox');
				var pic=nc_picture.getElementsByTagName("div");
				var word=$('.nc_bluebox');
				var meng=nc_picture.getElementsByTagName("span");
				var ull=nc_picture.getElementsByTagName("div");
				//meng[0].style.display="block";
				//console.log(proSingle_con)
		        for (var i = 1; i < proSingle_con.length; i++) {
              		proSingle_con[i].style.display = "none"
              	};
				for (var i = 0; i < meng.length; i++) {
              		meng[i].style.display = "none"
              	};
                meng[0].style.display="block";
				if($about=="abo"||$about=="aboo"||$about=="abooo"){
					proSingle_con[0].style.display = "none";
					meng[0].style.display="none";
					meng[1].style.display="block";
					proSingle_con[1].style.display = "block"
					nc_bluedeg.style.top='198px'
				}else if($about=="abot"||$about=="abott"||$about=="abottt"){
					proSingle_con[0].style.display = "none";
					meng[0].style.display="none";
					meng[2].style.display="block";
					proSingle_con[2].style.display = "block"
					nc_bluedeg.style.top='346px'
				}
			for(var i=0;i<pic.length;i++){
				pic[i].index=i
				ull[i].onmouseover=function(){
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
			$('#sou').click(function(){
			   var abo_vl=$('#nc_sou').val();
			   window.location.href='searchResult.html?sea='+abo_vl
			})
		},
	}
	kxy_news.new_table()
