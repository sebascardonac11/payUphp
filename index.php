<html>
    <head>
        <title>sebascardonac11!!!</title>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="scriptsMain.js"></script>
    </head>
    <body>
        <h1>PAYU con PHP!!!!</h1>
        <div class="test" id="">Test</div>
      
      
        <div class="test2" id="">Test Get</div>


<div id="msgid"></div>


<div>

Probando la libreria Curl</br>
<?php

//datos a enviar
$data = array(
        "test"      => "false",
        "language"  => "en",
        "command"   => "PING",
        "merchant"  => array(
            "apiLogin"  => "pRRXKOl8ikMmt9u",
            "apiKey"    =>"4Vj8eK4rloUd272L48hsrarnUA")
            );
//url contra la que atacamos
$ch = curl_init();
if (!$ch) {
    echo "Hay un error en init </br>";
}else{
    echo "Curl Iniciado</br>";
}
// Establece la URL y otras opciones apropiadas
curl_setopt($ch, CURLOPT_URL, "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi");
curl_setopt($ch, CURLOPT_HEADER, 0);
// Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

//a true, obtendremos una respuesta de la url, en otro caso,
//true si es correcto, false si no lo es
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//establecemos el verbo http que queremos utilizar para la petición
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
//enviamos el array data
curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query(json_encode($data)));
//obtenemos la respuesta
$response = curl_exec($ch);
// Se cierra el recurso CURL y se liberan los recursos del sistema
curl_close($ch);
echo ("Evaluando respuesta </br>");
if(!$response) {
    echo "Error</br>";
}else{
    var_dump($response);
}

?>

</div>
    </body>
</html>
