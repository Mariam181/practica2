// Solicitar categoría.
let c = prompt('Ingrese su categoría');

// Solicitar horas extra trabajadas.
let h = prompt('Ingrese la cantidad de horas extra trabajadas');

// Solicitar sueldo.
let s = prompt('Ingrese su sueldo base');

// Probamos si la categoría es mayor a 3.
if (c>3) {
  console.log('A esta categoría no se le pagan horas extera. Su pago es ' + s);
} else {

  // Probamos si las horas extra son mayor a 30.
  if (h>30) {
    let h = 30 
  } else {

  //Probamos si la categoría es 1.
  if (c = 1) {
    p = h * 30 + s
    console.log('Su pago es ' + p); 
  } else {

  //Probamos si la categoría es 2.
  if (c = 2) {
    p = h * 38 + s
    console.log('su pago es ' + p);
  } else {
         p = h * 50 + s
        console.log('Su pago es ' + p);
    }
  }
        
  }
}

