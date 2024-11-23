function bienvenida(){
    n=document.getElementById('nombres').value;
    c=document.getElementById('clave').value;

    if (n == n.length)
    {
        Swal.fire({
            title: '¡Error!',
            text: 'Complete la casilla del nombre',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
        })
       
    }
    else if (c == c.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del apellido ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
    else 
    {
        Swal.fire({
            title: '¡Completado!',
            text: 'Bienvenido',
            icon: 'success',
            confirmButtonText: '¡Aceptar!'
        });
    }
    
}