<?php
    $to = "jppontverges@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['nombre'];
	$mensaje = $_POST['mensaje'];

	$headers = "From: " . $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "Nueva consulta de pedrito.wtf/curriculumWeb";

    $link = 'pedrito.wtf/curriculumWeb';

	$body = "<h2>Nuevo mensaje de:</h2><p style='font-size:16px;'> $name</p> <br>";
	$body .= "<h2>Telefono:</h2><p style='font-size:16px'> $telefono</p>";
	$body .= "<h2>Mail:</h2><p style='font-size:16px;'> $from</p><br>";
	$body .= "<h2>Servicio:</h2><p style='font-size:16px;'> $servicio</p><br>";
	$body .= "<h2>Mensaje:</h2><p style='font-size:16px;'> $mensaje</p>";


	if (empty($name) or empty($telefono) or $servicio == "..." or !filter_var($from, FILTER_VALIDATE_EMAIL)) {
		// Set a 400 (bad request) response code and exit.
		http_response_code(400);
		header("Location: pedrito.wtf/curriculumWeb/error.html");
		exit;
	} else {
		header("Location: pedrito.wtf/curriculumWeb/sucess.html");
		$send = mail($to, $subject, $body, $headers);
	}
