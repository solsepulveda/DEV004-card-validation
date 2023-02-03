const validator = {
  isValid(creditCardNumber){
    //*split lo devuelve en arreglo, por separado*//
    const separar=creditCardNumber.split("").reverse();
    //console.log(separar)
    let total = 0;
    for(let i = 0; i < separar.length; i++) {
      let integro = parseInt(separar[i]);
      //console.log()
      if (i % 2 !== 0){
        integro *= 2;
        separar[i] = integro
        //console.log(separar)
        if (integro > 9){
          integro -= 9;
        }
        separar[i] = integro
      }
      total += integro;
      //console.log(total)
    }
    const verificacion = total % 10;
    //console.log(verificacion)
    //return verificacion;

    if(verificacion  === 0){
      return true;
    }
    else{
      return false;
    }
  },
  maskify(creditCardNumber) {
    if (creditCardNumber.length < 4) return creditCardNumber;
    const last4Characters = creditCardNumber.substr(-4);
    const maskingCharacters = creditCardNumber.substr(0, creditCardNumber.length -4).replace(/./g, '#');
    const masked = (maskingCharacters + last4Characters);
    return masked;
  }
}

export default validator;
