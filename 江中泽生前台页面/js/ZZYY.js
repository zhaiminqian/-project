window.onload=function(){
	var ZZYY;
	ZZYY = {
		ZZYYFocus:function(){
			$('#sou').click(function(){
				var val = $('#ZZYY_inp').val();
				window.location.href = 'searchResult.html?sea='+val;
			})
			$("#gotop").click(function(){
			  	$('body,html').animate({scrollTop:0},300);
			  	return false;
			}); 
			$.ajax({
				url:'http://60.205.105.211:2403/advert',
				dataType:'json',
				type:'GET',
				success:function(e){
					$('.ZZYYS_foot').css('backgroundImage','url(http://60.205.105.211/jz/public/upload/images/'+e[0].img+')')
				}
			})
		},
	};
	ZZYY.ZZYYFocus();
	
}