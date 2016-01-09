<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = 'jany@ymail.com ';

    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));

    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '');

    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Email invalide!';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Merci de preciser un sujet.';
    }
    if($message == '') {
        $array['messageMessage'] = 'Merci de saisir un message';
    }
    if(isEmail($clientEmail) && $subject != '' && $message != '') {
        // Send email
		$headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		mail($emailTo, $subject . " [Depuis site web]", $message, $headers);
    }

    echo json_encode($array);

}

?>
