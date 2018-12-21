window.onload = function ParkingLot() {
  
    var AutosEstacionados = document.getElementById('cantidadEstacionados');
    AutosEstacionados.value =0;
   
    var EspacioDisponible = document.getElementById('espaciosDisponibles');
        EspacioDisponible.value=100;
  
    var precio = 60;
        precio = document.getElementById('consultarPrecioPorDia').value =
        parseInt(precio);

    document.getElementById('verEstadiaFacturada').value =
    precio*AutosEstacionados.value;
   
    /*auto Ingresado*/
document.getElementById('nuevoAuto').onclick= function IngresarAuto() {
       
                if ( AutosEstacionados.value<100)
                { 
                        
                        AutosEstacionados.value =++AutosEstacionados.value;
                        EspacioDisponible.value=--EspacioDisponible.value;
                    } 
                else
                { alert("No hay mas espacio disponible en la cochera")} 
    document.getElementById('verEstadiaFacturada').value =
    precio*AutosEstacionados.value;
}
/* Egresar auto*/

document.getElementById('egresarAuto').onclick= function EgresarAuto() {

                if (AutosEstacionados.value>0)
                { 
                    AutosEstacionados.value =--AutosEstacionados.value;
                    EspacioDisponible.value=++EspacioDisponible.value;
                }  
                else if(EspacioDisponible.value==100)
                {
                    alert("no hay autos en la cochera")
                } 

    document.getElementById('verEstadiaFacturada').value = 
    precio*AutosEstacionados.value;

}

/* Establecer Precio*/

document.getElementById('EstablecerPrecio').onclick= function PrecioPorEstadia() {

    precio = Number(prompt("Establecer precio en pesos", 60));
    
                if (precio !=null) 
                {
                    document.getElementById('consultarPrecioPorDia').value =
                    parseInt(precio);
                }
                else{
                    alert("Please do not enter a decimal number.");
                }

    document.getElementById('verEstadiaFacturada').value =
    precio*AutosEstacionados.value;
}

/* Facturar Estadia*/
document.getElementById('FacturarEstadia').onclick= function FacturarEstadiaBtn() {
   
    document.getElementById('verEstadiaFacturada').value =
    precio*AutosEstacionados.value;

    
}
/* Enviar Mail 00 */
var EnviarCada= window.setInterval(HorarioEnvio,20000)
var Ejecutado = 0;
function HorarioEnvio()
{   var Horario = new Date ();
    var ComparacionHorario = Horario.getHours()==00 && Horario.getMinutes()==00;
    
    function _(id){ return document.getElementById(id); }
    
    console.log(Horario.getHours());
   
        if(ComparacionHorario==true && Ejecutado==0){
        console.log("es el Horario")
        Ejecutado=++Ejecutado;
        var DatosAphp = new FormData();
        DatosAphp.append( 'verEstadiaFacturada', _('verEstadiaFacturada').value );
        DatosAphp.append( 'cantidadEstacionados', _('cantidadEstacionados').value );
        DatosAphp.append( 'consultarPrecioPorDia', _('consultarPrecioPorDia').value );
       
        var xhr = new XMLHttpRequest();
        xhr.open( "POST", "email.php" );
       
            xhr.onreadystatechange = function() 
            {
                if(xhr.readyState == 4 && xhr.status == 200)
                    {
                        console.log("mail enviado")
                       /*  if(xhr.responseText == "success")
                        {
                        console.log("Thanks, your message has been sent.");
                        _("form_Envio").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
                        } else {
                            console.log("no se envio");
                        } */
                    }
            }
        xhr.send(DatosAphp);
    }
   else if (ComparacionHorario==false || Ejecutado==1){
       console.log("no mandar mail, no son las 00 o ya se envio")
   }
}



  /**FIN FUNCION ONLOAD */
}
