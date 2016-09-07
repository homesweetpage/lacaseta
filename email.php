<?php

if($_POST){
    $name = $_REQUEST['InputName'];
    $phone = $_REQUEST['InputPhone'];
    $email = $_REQUEST['InputEmail'];
    $message = $_REQUEST['InputMessage'];

    $to = "info@lacasetaplaya.com";

    $mensaje = 
		"Nombre: " .$name ."\r\n"
		."Telefono: " .$phone ."\r\n"
		."Email: " .$email ."\r\n"
		."Mensaje: " .$message
		;

	$subject = "La Caseta Playa - Consulta de: " .$email;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
