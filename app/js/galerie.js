$(function(){
	$('.thumbnail').on('click',function(){
		var source = $(this).attr('id');
		$('#zoom').attr('src', source);
	});

	$('.precedent').on('click', previous);
	$('.suivant').on('click', next);
});

function previous(){
	$('.precedent').off('click');
	var tailleThumb = $('.thumbnails').innerWidth();
	var tailleDeroulant = $('#deroulant').innerWidth();
	var delta = tailleDeroulant;
	
	var posThumb = parseInt($('.thumbnails').css('left'));
	var newPosThumb = posThumb + delta;

	if(posThumb<0 && newPosThumb<=0){
		$('.thumbnails').animate({left:'+=' + delta},500);

	}else if(posThumb<0 && newPosThumb>0){
		delta = delta - newPosThumb;
		$('.thumbnails').animate({left:'+=' + delta},500);
	}

	setTimeout(function(){
		$('.precedent').on('click', previous);
	}, 500);
}

function next(){
	$('.suivant').off('click');
	var tailleThumb = $('.thumbnails').innerWidth();
	var tailleDeroulant = $('#deroulant').innerWidth();
	var delta =tailleDeroulant;

	var posThumb = parseInt($('.thumbnails').css('left'));
	var newPosThumb = posThumb - delta;
	var posMax = -(tailleThumb - tailleDeroulant);

	if(posThumb>posMax && newPosThumb>=posMax){
		$('.thumbnails').animate({left:'-=' + delta},500);

	}else if(posThumb>posMax && newPosThumb<posMax){
		delta = delta + newPosThumb - posMax;
		$('.thumbnails').animate({left:'-=' + delta},500);
	}

	setTimeout(function(){
		$('.suivant').on('click', next);
	}, 500);
}
