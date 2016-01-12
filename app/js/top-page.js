$(function(){
	$(window).on('scroll resize load', function(){
		if ($(window).scrollTop()>300){
			$('.top-page').show();
		}else if($(window).scrollTop()<=300){
			$('.top-page').hide();
		}


		//gestion du placement du bouton top-page par rapport au footer
		var scrollBottom = 0-($(window).scrollTop() + $(window).height()-$('body').height());

		if(scrollBottom < $('footer').innerHeight()){
			$('.top-page').css('bottom', $('footer').innerHeight()-scrollBottom+10);

		}else{
			if($(window).width()>991){
				$('.top-page').css('bottom', '30px');
			}else{
				$('.top-page').css('bottom', '5px');
			}
		}
	});

	$('.top-page').on('click', function(){
		$('html,body').animate({scrollTop : '0'},1000);		
	});
});