function validateForm(){
    let form = document.getElementById(form1);

    if (!form.checkValidity()){
        form.reportValidity();
        return false;
    }
    return true;
}




function onClick(event) {
    event.preventDefault();
   if(!validateForm()) return;
    console.log("click ...");
    console.log(event);

    const mensaje = {

        nombre: document.getElementById('nombre').value,
        celular: document.getElementById('apellido').value,
        fechaDeNacimiento: document.getElementById('fechaDeNacimiento').value,
        paisDeResidencia: document.getElementById('paisDeResidencia').value,
        email: document.getElementById('email').value,
      

    }
    console.log(mensaje);

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(mensaje),
            headers: { "Content-type": "application/json; charset" }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                ' Su registro se ha realizado con exito ... ',
                ' Lo contactaremos a la brevedad '

            );
            cleanForm();

        })
        .catch((err) => console.log(err));

    function cleanForm() {
        let formulario = document.getElementById('form1');
        formulario.reset();
    }

    function redirectUrl() {
        window.location.href = "https://google.com";
    }

}
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);