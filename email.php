<?php

if($_POST){
    $name = $_POST['InputName'];
    $phone = $_POST['InputPhone'];
    $email = $_POST['InputEmail'];
    $message = $_POST['InputMessage'];
//send email
    mail("tomasgispert@gmail.com", "Consulta de" .$email, "Nombre:" .$name ."Telefono:" .$phone ."Consulta:" .$message);
}

?>
