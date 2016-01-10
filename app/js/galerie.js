$(function(){
	$('.thumbnail').on('click',function(){
		var source = $(this).attr('src');
		$('#zoom').attr('src',source);
	});

	$('.previous').on('click', previous);
	$('.next').on('click', next);
});

function previous(){
	$('.previous').off('click');

	if(parseInt($('.thumbnails').css('left'))<0 ){
		$('.thumbnails').animate({left:'+=350'},500);
	}

	setTimeout(function(){
		$('.previous').on('click', previous);
	}, 500);
}

function next(){
	$('.next').off('click');

	if(parseInt($('.thumbnails').css('left'))>-350 ){
		$('.thumbnails').animate({left:'-=350'},500);
	}

	setTimeout(function(){
		$('.next').on('click', next);
	}, 500);
}