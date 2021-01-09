<?php



$tipoConsulta = $_POST['tipoConsulta'];
$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$rrss = $_POST['rrss'];
$message = $_POST['message'];


$emailGeneralProductos = "contact@xytech.com.ar";
$emailCts= "cts@xytech.com.ar";
$emailIts="its@xytech.com.ar";
$emailDev="xydevtech@xytech.com.ar";

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "" . $name . " ha registrado una consulta con los siguientes datos: \r\n";
$message .= "Enviado el: " . date('d/m/Y', time()) . " \r\n";
$message .= "E-mail : " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Redes Sociales: " . $rrss . " \r\n";
$message .= "Tipo consulta: "  . $tipoConsulta . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";


$asunto = 'Consulta de ' . $name . ' desde Website';

if ($tipoConsulta == "General"):
    mail($emailGeneralProductos, $asunto, utf8_decode($message), $header);
elseif ($tipoConsulta == "Productos sistema pedidos" || $tipoConsulta == "Productos sistema tickets"):
    mail($emailGeneralProductos, $asunto, utf8_decode($message), $header);
    elseif ($tipoConsulta == "CTS"):
        mail($emailCts, $asunto, utf8_decode($message), $header);
        elseif ($tipoConsulta == "ITS"):
            mail($emailIts, $asunto, utf8_decode($message), $header);
else:
    mail($emailDev, $asunto, utf8_decode($message), $header);
endif;


header("Location:index.html");

?>
