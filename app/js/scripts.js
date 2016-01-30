
jQuery(document).ready(function() {
	
    /*Contact form*/
	$('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
		$(this).parent('.div-email, .div-subject, .div-message').removeClass('has-error');
		$(this).next('p').fadeOut(400, function(){
			$(this).remove();
		});
	});
	$('.contact-form form').submit(function(e) {
		e.preventDefault();
	    $('.div-email, .div-subject, .div-message').removeClass('has-error');
	    $('.error-message').remove();
	    var postdata = $('.contact-form form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.div-email').addClass('has-error');
	                $('.div-email').append('<p class="error-message">' + json.emailMessage + '</p>');
	            }
	            if(json.subjectMessage != '') {
	                $('.div-subject').addClass('has-error');
	                $('.div-subject').append('<p class="error-message">' + json.subjectMessage + '</p>');
	            }
	            if(json.messageMessage != '') {
	                $('.div-message').addClass('has-error');
	                $('.div-message').append('<p class="error-message">' + json.messageMessage + '</p>');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.isSend) {
	                $('.contact-form form').fadeOut('fast', function() {
	                    $('.contact-form').append('<p>Merci ! Nous vous répondrons dans les meilleurs délais</p>');
	                });
	            }else if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' &&!json.isSend){
	                $('.div-message').after('<p class="error-message">Une erreur s\'est produite lors de l\'envoi, votre message n\'a pu être expédié</p>');	                
	            }
	        }
	    });
	});     
});
