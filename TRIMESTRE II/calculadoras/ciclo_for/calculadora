var n1;
var n2;
var opciones;

function validaciones(){
    n1=document.getElementById('numero1').value;
    n2=document.getElementById('numero2').value;
    opciones = document.getElementsByName("op");
    
    

    if (n1 === "")
    {
        // alert('hola')
        // numero1 = parseInt(n1)
        Swal.fire({
            title: '¡Error!',
            text: 'Casilla 1 vacia',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });

    }
    else if (n2 === "")
    {
        // alert('hola2')
        //numero2 = parseInt(n2)

        Swal.fire({
            title: '¡Error!',
            text: 'Casilla 2 vacia',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });

    }
    else if(!/^\d+$/.test(n1 && n2))
    {
        // alert('hola3')

        Swal.fire({
            title: '¡Error!',
            text: 'Digite caracter numerico',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        //event.preventDefault();
    }
    else {
        calculadora()
    }
   
    
        
    
    
    
}




function calculadora() 
{
    
    numero1=parseInt(n1)
    numero2=parseInt(n2)
    var res,resultado;
    seleccion=false
   

    for(var i=0; i<opciones.length; i++) {    
      if (opciones[i].checked) {
        seleccion=true;
    switch (i) {
        case 0:
          res=numero1+numero2;
          resultado= document.getElementById("resultado");
          resultado.value="El resulatdo es: "+res;
          resultado.style.display='block';
            break;
    
        case 1:
            res=n1-n2;
            resultado= document.getElementById("resultado");
            resultado.value="El resulatdo es: "+res;
            resultado.style.display='block';
              break;   
        case 2:
            res=n1*n2;
            resultado= document.getElementById("resultado");
            resultado.value="El resulatdo es: "+res;
            resultado.style.display='block';
            break;   
        case 3:
            if (n2===0) {
                resultado.value="El resultado es: indefinido"
                resultado.style.display='block'
            }
            else{
                res=n1/n2;
            resultado= document.getElementById("resultado");
            resultado.value="El resulatdo es: "+res;
            resultado.style.display='block';
                break;   
            }


            }
        }
       
      }
      if (!seleccion) {
        Swal.fire({
            title: '¡Error!',
            text: 'Seleccione una operación.',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        //event.preventDefault();
    
      }
      
      
    }

function limpiar()
{
document.getElementById(limpiar).reset();
}


