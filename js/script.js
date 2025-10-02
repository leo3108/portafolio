// Import the functions you need from the SDKs you need

document.addEventListener("DOMContentLoaded", () => {
  //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const cerrar = document.querySelector(".cerrar");

  const imagenes = document.querySelectorAll(".flip-card-back img");

  imagenes.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/*let nombres = "Leonardo Rojas Soller";
let datos = ["Leonardo Rojas Soller","SENATI","Estudiante"] 

console.log(nombres);
console.log(datos[2]);

//let edad = prompt("Ingresa tu edad: ");
console.log(edad); 

//Trabajando con funciones
function mostrarMensaje(){
    alert("Hola Mundo");
}

function sumar(){
    let n1 = parseInt(prompt("Ingrese tu primer numero: "));
    let n2 = parseInt(prompt("Ingrese tu segundo numero: "));
    alert("El resultado es: "+(n1 + n2));
}

function cambiarColor(){
    let texto = document.getElementById("texto");
    texto.style.color = "blue";
}*/
