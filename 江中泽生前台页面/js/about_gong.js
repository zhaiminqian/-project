jQuery.support.cors = true;
gong_product={
   gong_products:function(){
	    var myUrl_images="http://60.205.105.211/jz/public/upload/images/";
		$.ajax({
		   url:'http://60.205.105.211:2403/advert',
		   dataType:"json",
		   type:"get",
		   error:function(){
			   alert("错误")
		   },
		   success:function(e){
		       $('.newsContent_picture').css('background','url('+myUrl_images+e[0].img+')')
		   },
		   beforeSend:function(){
			   $('.newsContent_picture').css('background','url(./img/Loading.gif)')
		   }	
		});
   }
};
gong_product.gong_products();