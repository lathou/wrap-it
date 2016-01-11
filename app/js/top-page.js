$(function(){
	$(window).on('scroll', function(){
		if ($(window).scrollTop()>300){
			$('.top-page').show();
		}else if($(window).scrollTop()<=300){
			$('.top-page').hide();
		}
	});

	$('.top-page').on('click', function(){
		$('html,body').animate({scrollTop : '0'},1000);		
	});
});