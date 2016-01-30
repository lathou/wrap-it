<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = '';

    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));

    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '');

    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Email invalide!';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Veuillez preciser un sujet.';
    }
    if($message == '') {
        $array['messageMessage'] = 'Veuillez saisir un message';
    }
    if(isEmail($clientEmail) && $subject != '' && $message != '') {
        // Send email
        ini_set("SMTP","auth.smtp.1and1.fr" ); 
        
		$headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		$array['isSend'] = mail($emailTo, $subject . " [Depuis site web]", $message, $headers);
    }

    echo json_encode($array);

}

?>
