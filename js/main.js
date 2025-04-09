let btnClear = document.getElementById("btnClear");
let btnGuardar = document.getElementById("btnGuardar");
let txtNombre= document.getElementById("txtNombre");

console.log("funciono");

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    let nombre= txtNombre.value.trim();
    localStorage.setItem("nombre", nombre);
})


