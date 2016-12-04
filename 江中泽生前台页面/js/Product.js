jQuery.support.cors = true;
gong_product={
   gong_products:function(){
		$(".scopeTop").click(function(){
		  $('body,html').animate({scrollTop:0},300);
		  return false;
		});
	    var myUrl_images="http://60.205.105.211/jz/public/upload/images/";
		$.ajax({
		   url:'http://60.205.105.211:2403/advert',
		   dataType:"json",
		   type:"get",
		   error:function(){
			   alert("错误")
		   },
		   success:function(e){
		       $('.Product_content_banner').css({'background-image':'url('+myUrl_images+e[0].img+')','background-repeat':'no-repeat','background-size':'cover'})
		   },
		   beforeSend:function(){
			   $('.Product_content_banner').css({'background':'url(./img/Loading.gif)','background-repeat':'no-repeat','background-size':'cover'})
		   }	
		});
   }
};
gong_product.gong_products();