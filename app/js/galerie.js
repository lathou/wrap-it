$(function(){
	$('.thumbnail').on('click',function(){
		var source = $(this).attr('src');
		$('#zoom').attr('src',source);
	});

	$('.precedent').on('click', previous);
	$('.suivant').on('click', next);
});

function previous(){
	$('.precedent').off('click');

	if(parseInt($('.thumbnails').css('left'))<0 ){
		$('.thumbnails').animate({left:'+=350'},500);
	}

	setTimeout(function(){
		$('.precedent').on('click', previous);
	}, 500);
}

function next(){
	$('.suivant').off('click');

	if(parseInt($('.thumbnails').css('left'))>-350 ){
		$('.thumbnails').animate({left:'-=350'},500);
	}

	setTimeout(function(){
		$('.suivant').on('click', next);
	}, 500);
}