function cuenta()
{
    idf=document.getElementById('identify').value;
    nom=document.getElementById('nombres').value;
    ape=document.getElementById('apellidos').value;
    cor=document.getElementById('correo').value;
    use=document.getElementById('usuario').value;
    cñ1=document.getElementById('contraseña1').value;
    cñ2=document.getElementById('contraseña2').value;

    if (idf == idf.length)
    {
        Swal.fire({
            title: '¡Error!',
            text: 'Complete la casilla de identificación',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
        })
        
       
    }
    else if (nom == nom.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del nombre',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (ape == ape.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del apellido ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (cor == cor.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del correo ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (use == use.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del nombre de usuario ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}


else if (cñ1 == cñ1.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla de la contraseña',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (cñ1.length<7 || cñ1.length>=10 )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'La contraseña no debe ser menor a 7 caracteres ni mayor a 10 caracteres ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (cñ2 == cñ2.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la casilla del la confirmación de la contraseña',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (cñ2.length<7 || cñ2.length>=10 )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'La confirmación de la contraseña no debe ser menor a 7 caracteres ni mayor a 10 caracteres ',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if (cñ1 != cñ2 )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });

}
else if(!/^\d+$/.test(cñ1 || cñ2))
    {
        Swal.fire({
            title: '¡Error!',
            text: 'La contraseña solo debe contener números.',
            icon: 'error',
            confirmButtonText: '¡Aceptar!'
            });
        //event.preventDefault();
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