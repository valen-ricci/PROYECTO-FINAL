document.getElementById("link").addEventListener("mousedown", mouseDown);
document.getElementById("link").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("link").style.color= "red";
}

function mouseUp() {
  document.getElementById("link").style.color = "black";
}

document.getElementById("link-1").addEventListener("mousedown", mouseDown1);
document.getElementById("link-1").addEventListener("mouseup", mouseUp1);

function mouseDown1() {
  document.getElementById("link-1").style.color= "red";
}

function mouseUp1() {
  document.getElementById("link-1").style.color = "black";
}

document.getElementById("link-2").addEventListener("mousedown", mouseDown2);
document.getElementById("link-2").addEventListener("mouseup", mouseUp2);

function mouseDown2() {
  document.getElementById("link-2").style.color= "red";
}

function mouseUp2() {
  document.getElementById("link-2").style.color = "black";
}

const bloque = document.querySelectorAll('.bloque')
const  h3 = document.querySelectorAll('.h3')


// cuando haga click en h2,
// QUITAR clase Activo de TODOS los bloques
// Añadir la clase Activo al BLOQUE con la posicion del h2

//recorrer todos los h3
h3.forEach( (cadaH3 , i)=>{
    //Asignar CLICK al h3
    h3[i].addEventListener('click', ()=>{
        bloque.forEach ( (cadabloque , i )=>{
            //Borrar clase  Activo de todos los bloques
            bloque[i].classList.remove('activo')
        })
        //Añadir clase Activo al bloque cuya posicion sea igual al del h3
        bloque[i].classList.add('activo')
    })
})

document.getElementById("exp1").addEventListener("mousedown", EXPERIENCIA);
document.getElementById("exp1").addEventListener("mouseup", EXPERIENCIA1);

function EXPERIENCIA() {
  document.getElementById("exp1").style.color= "blue";
}

function EXPERIENCIA1() {
  document.getElementById("exp1").style.color = "black";
}

document.getElementById("exp2").addEventListener("mousedown", EXPERIENCIA2);
document.getElementById("exp2").addEventListener("mouseup", EXPERIENCIA3);

function EXPERIENCIA2() {
  document.getElementById("exp2").style.color= "blue";
}

function EXPERIENCIA3() {
  document.getElementById("exp2").style.color = "black";
}

document.getElementById("exp3").addEventListener("mousedown", EXPERIENCIA4);
document.getElementById("exp3").addEventListener("mouseup", EXPERIENCIA5);

function EXPERIENCIA4() {
  document.getElementById("exp3").style.color= "blue";
}

function EXPERIENCIA5() {
  document.getElementById("exp3").style.color = "black";
}



document.getElementById("myForm").addEventListener("submit", enviar);

function enviar() {
  alert("Su mensaje ha sido enviado.");
}

let form = document.getElementById("myForm");
form.addEventListener("focusin", myFocusFunction);
form.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "#ddf1f8";
  document.getElementById("myInput2").style.backgroundColor = "#ddf1f8";
  document.getElementById("myInput3").style.backgroundColor = "#ddf1f8";
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "#8fcdd4";  
document.getElementById("myInput2").style.backgroundColor = "#8fcdd4"; 
document.getElementById("myInput3").style.backgroundColor = "#8fcdd4";

}

