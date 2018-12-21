<?php
if( isset($_POST['verEstadiaFacturada']) && isset($_POST['cantidadEstacionados']) ){
	$Facturar=$_POST['verEstadiaFacturada'];
	$Precio=$_POST['consultarPrecioPorDia'];
    $Autos=$_POST['cantidadEstacionados'];
	$to = "danisdnk@gmail.com";	
	$subject = 'ParkingLot Estadia';
	$message = $Facturar."\npesos a facturar,correspondientes a\n".$Autos."\nAutos\n".$Precio."\npesos c/u";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "El server fallo al enviar el mensaje";
	}
}
?>
