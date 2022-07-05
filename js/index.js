const combos = [
    {id:1, producto: "veggie", precio: 1700},
    {id:2, producto: "proteico", precio: 2100},
    {id:3, producto: "keto", precio: 2300},
    {id:4, producto: "gourmet", precio: 2500},
]

let contenedor = document.getElementById("container");
let contenedorCompra = document.getElementById("container_selec");
let compra = [];
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");

cargarCompra();

function cargarCompra (){
    if (localStorage.getItem("StorageSeleccionados" !== null)){
        compra = JSON.parse(localStorage.getItem("StorageSeleccionados"));
        return;
    } else {
        localStorage.setItem("StorageSeleccionados", JSON.stringify(compra));
        return;
    }
}









/*


let formulario = document.getElementById("formulario");
formulario.addEventListener('submit', formularioEnviado);

function formularioEnviado(e){
  e.preventDefault();
  innerText = `El formulario ha sido enviado correctamente`;
}


let campo1 = document.getElementById("nombre");
campo1.onclick = () => {console.log ('hicieron click en el campo nombre')};

let campo2 = document.getElementById("apellido");
campo2.onkeydown = () => {console.log('tecla apretada en campo apellido')};


let form = document.getElementById("fielset");
let newInput = document.createElement("reset");
newInput.innerHTML = `<input type="reset" value="Borrar">`;
form.append(newInput);
*/