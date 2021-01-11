<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'dalleqdallecoworking@gmail.com';  

	// prepare message 
	$body = "Nuevo mensaje desde el formulariio de contacto de Woman Code:
	
	Nombre:  $_POST[name]
	Email:  $_POST[email]
	Asunto:  $_POST[subject]
	Mensaje:  $_POST[message]";

	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	mail($youremail, 'Mensaje desde Woman Code', $body, $headers );

} ?>

<!DOCTYPE HTML>
<html>
<head>
<title>Gracias por solicitarnos información!</title>
</head>
<body>	
<p> 
 En breve nos pondremos en contacto contigo <br>
 ¡Esperamos que entres a formar parte de la familia WOMAN CODE!
</p>
</body>
</html>