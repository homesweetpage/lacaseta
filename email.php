<?php
if($_POST){
    $name = $_POST['InputName'];
    $phone = $_POST['InputPhone'];
    $email = $_POST['InputEmail'];
    $message = $_POST['InputMessage'];

//send email
    mail("tomasgispert@gmail.com", "51 Deep comment from" .$email, $message);
}
?>
