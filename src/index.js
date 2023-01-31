import validator from './validator.js';

const boton = document.getElementById("validacion");
boton.addEventListener("click", validate);
const inputnumber=document.getElementById("cardnumber")
function validate() {
  const cardNumber = inputnumber.value;

  if(cardNumber === ""){
    alert ("El campo está vacío");
  } else{
    const isValid = validator.isValid(cardNumber);
    const masked = validator.maskify(cardNumber);
    if (isValid) {
      document.getElementById("result").innerHTML = "Su tarjeta " + masked + " es válida";
    }else{
      document.getElementById("result").innerHTML = "Su tarjeta " + masked + " es inválida";
    }
  }
}
