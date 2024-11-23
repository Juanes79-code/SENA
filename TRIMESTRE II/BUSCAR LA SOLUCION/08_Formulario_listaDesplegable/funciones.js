function validaciones(){
var casilla1
var casilla2
var opciones = document.getElementsByName("nacionalidad");
var b = 0, GrupoCiudad=document.getElementsByName("ciudades")
let valido = true
seleccion =false
casilla1=document.getElementById('ident').value;
casilla2=document.getElementById('nomyape').value;

if (casilla1 === ""){
    alert("error la casilla de la identificación esta vacia");
     
    return false;
}
   
else if (casilla2 === "")
    {
   alert("error la casilla del nobre esta vacia");
    
   return false;
}
else {
    for(var i=0; i<opciones.length; i++) {    
        if(opciones[i].checked) {
            seleccion = true;
            break;
            }
            }
        if(!seleccion){
        alert("Debe seleccionar la nacionalidad");
    return false;
    }
    }
    // funcion para checkbox


    for(j=0;j<GrupoCiudad.length;j++) {
        if(GrupoCiudad.item(j).checked == false) {
        b++;
    }
    }
    if(b == GrupoCiudad.length) {
        alert("Selecciones una o varias opciones en paises");
        
        return false;
    } 
    else {
        document.write("Bienvenido "+casilla1)

}
    

}
