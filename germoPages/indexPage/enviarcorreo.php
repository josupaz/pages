<?php
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH'])){

    // Recibir vía POST los datos del formulario
    $tipoConsulta = $_POST["tipoConsulta"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $rrss = $_POST["rrss"];
    $message = $_POST["message"];

    if(empty($name) || empty($email) || empty($message)){ // Validar si la dirección de correo no esta vacia
        $error=1;
        $mensaje="Por favor complete los campos nombre, email y escriba su mensaje.";
        $datos=0;
    }else{


        $remite="";
        $remite_email= "no-reply@xytech.com.ar";
        
        $emailGeneralProductos = "contact@xytech.com.ar";
        $emailCts= "cts@xytech.com.ar";
        $emailIts="its@xytech.com.ar";
        $emailDev="xydevtech@xytech.com.ar";
    
        $message = "<!DOCTYPE html>
        <html>
        <style>
            body {
                background-color: rgba(70, 34, 0, 0.8);
                font-size: 12px;
                color: rgb(0, 0, 0)
            }
        </style>
        
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Nueva consulta desde Website</title>
        </head>
        
        <body>
            <h2>Contacto desde formulario de Website</h2>
            <b>
            Enviado el: " . date('d/m/Y', time()) . " <br clear='all' /> 
            Tipo de consulta: ". $tipoConsulta ." <br clear='all' /> 
            Nombre: ". $name ." <br clear='all' /> 
            E-mail: ". $email ." <br clear='all' /> 
            Telefono: ". $phone ." <br clear='all' /> 
            Redes sociales: ". $rrss ." <br clear='all' /> 
            Mensaje: ". $message ." <br clear='all'/></b>
        </body>
        
        </html>";

        $header = "From: ".$remite." <".$remite_email.">\r\n";
        $header = $header."Mime-Version: 1.0\n";
        $header = $header.'Content-type: text/html; charset=utf-8' . "\r\n";

        $asunto = 'Consulta  ' . $tipoConsulta . ' de ' . $name . ' desde Website';

        if ($tipoConsulta == "General"):
            $enviar_email = mail($emailGeneralProductos, $asunto, $message, $header);
        elseif ($tipoConsulta == "Productos sistema pedidos" || $tipoConsulta == "Productos sistema tickets"):
            $enviar_email = mail($emailGeneralProductos, $asunto, $message, $header);
            elseif ($tipoConsulta == "CTS"):
                $enviar_email = mail($emailCts, $asunto, $message, $header);
                elseif ($tipoConsulta == "ITS"):
                    $enviar_email = mail($emailIts, $asunto, $message, $header);
        else:
            $enviar_email = mail($emailDev, $asunto, $message, $header);
        endif;

    if($enviar_email){
        $error=0;
        $mensaje="Gracias por contactarse, el correo ha sido enviado, le contestaremos a la brevedad.";
        $datos=0;
    }else{
        $error=1;
        $mensaje="El correo no fue enviado";
        $datos=0;
    }
    
    
}

$resp=[
    "error"=>$error,
    "mensaje"=>$mensaje,
    "datos"=>$datos,
  ];

  echo json_encode($resp);

} else {
    $resp=[
     "error"=>1,
     "mensaje"=>"El servidor denego la peticion.",
     "datos"=>0,
    ];
    echo json_encode($resp);
  }

?>