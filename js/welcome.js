let bienvenida = document.getElementById("welcome");
let btnClear= document.getElementById("btnClear");


window.addEventListener("load", function(){
    console.log("Se terminó de cargar la página");
    if(localStorage.getItem("nombre")!=null){
        let nombre = localStorage.getItem("nombre");
        bienvenida.innerText=`Hola ${nombre}, bienvenidx de nuevo.`
    }else{
        bienvenida.innerText=`Por favor ve al index e ingresa tu nombre.`
    }
}); //Load

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    bienvenida.innerText=`Por favor ve al index e ingresa tu nombre.`
})