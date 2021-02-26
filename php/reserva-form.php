<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'dalleqdallecoworking@gmail.com, aula@dallequedalle.com, muffinzap@gmail.com';

	// prepare message
	$body = "Solicitud de reserva desde el formulariio de reserva de Woman Code:
	
	Nombre:  $_POST[name]
	Apellidos:  $_POST[apellidos]
	Email:  $_POST[email]
	Teléfono:  $_POST[phone]
	Descuento:  $_POST[descuento]
	Observaciones:  $_POST[message]";

	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	mail($youremail, 'Solicitud reserva Woman Code', $body, $headers );

}


