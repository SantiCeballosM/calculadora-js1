const toggleButton = document.getElementById('dark-mode-toggle'); // Se obtiene el elemento del DOM con ID 'dark-mode-toggle' y se almacena en la constante toggleButton.
const iconoBoton = document.querySelector('.icono_boton'); // Se obtiene el primer elemento del DOM con clase CSS 'icono_boton' y se almacena en la constante iconoBoton.
const body = document.body; // Se obtiene el elemento del DOM que representa el cuerpo de la página web y se almacena en la constante body.

toggleButton.addEventListener('click', function() { // Se añade un evento de escucha al botón toggleButton para cuando se haga click sobre él.
  body.classList.toggle('dark'); // Se agrega o quita la clase CSS 'dark' en el elemento body del DOM.
  body.classList.toggle('dark1'); // Se agrega o quita la clase CSS 'dark1' en el elemento body del DOM.
  body.classList.toggle('dark2'); // Se agrega o quita la clase CSS 'dark2' en el elemento body del DOM.
  body.classList.toggle('dark3'); // Se agrega o quita la clase CSS 'dark3' en el elemento body del DOM.
  toggleButton.classList.toggle('dark'); // Se agrega o quita la clase CSS 'dark' en el botón toggleButton del DOM.

  if (toggleButton.classList.contains('dark')) { // Si el botón toggleButton tiene la clase CSS 'dark':
    iconoBoton.style.transform = 'translate(-50%, -50%) scale(0)'; // Se cambia el estilo de transformación CSS del elemento iconoBoton para esconderlo.
  } else { // En caso contrario:
    iconoBoton.style.transform = 'translate(-50%, -50%) scale(1)'; // Se cambia el estilo de transformación CSS del elemento iconoBoton para mostrarlo.
  }
});

class Calculadora {
  constructor(num1 = null, num2 = null) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sumar() {
    return this.num1 + this.num2;
  }
  restar() {
    return this.num1 - this.num2;
  }
  multiplicar() {
    return this.num1 * this.num2;
  }
  dividir() {
    if (this.num2 == 0) {
      return "No se puede dividir entre 0";
    } else {
      return this.num1 / this.num2;
    }
  }
  porcentaje() {
    return (this.num1 * this.num2) / 100;
  }
  sen() {
    if (isNaN(this.num1)) {
      return "Entrada inválida";
    } else {
      return Math.sin(this.num1);
    }
  }
  cos() {
    if (isNaN(this.num1)) {
      return "Entrada inválida";
    } else {
      return Math.cos(this.num1);
    }
  }
  tan() {
    if (isNaN(this.num1)) {
      return "Entrada inválida";
    } else {
      return Math.tan(this.num1);
    }
  }
  raiz_cuadrada() {
    if (this.num1 < 0) {
      return "Entrada inválida";
    } else {
      return Math.sqrt(this.num1);
    }
  }
  raiz_cubica() {
    if (this.num1 < 0) {
      return "Entrada inválida";
    } else {
      return Math.cbrt(this.num1);
    }
  }
  potencia_a_la_2() {
    return Math.pow(this.num1, 2);
  }
  potencia_a_la_3() {
    return Math.pow(this.num1, 3);
  }
}

// let valor1=0
// let valor2=0
// let campoVisor=document.getElementById("visor");
// document.getElementById("datost").addEventListener("click",function(e){
//     let valor= e.target.value
//     if(valor>=0){
//         campoVisor.value +=valor
//     }else{
//         if(valor=="+" && valor1==0 ){
//             valor1=parseInt( campoVisor.value)
//             campoVisor.value=0;
//         }else{
//             valor2=parseInt( campoVisor.value);
//             campoVisor.value=valor1+valor2
//         }
//     }
// })


// let val1=0
// let val2=0
// let calculadora = new Calculadora(0, 0);
// let campoVisor = document.getElementById("visor");
// document.getElementById("datost").addEventListener("click", function(e) {
//   let valor = e.target.value;
//   if (valor >= 0) {
//     campoVisor.value += valor;
//   }else{
//     if (valor == "+" && val1 == 0) {
//       val1 = parseInt(campoVisor.value);
//       campoVisor.value = 0;
//     }else{
//       val2 = parseInt(campoVisor.value);
//       calculadora = new Calculadora(val1, val2);
//       campoVisor.value = calculadora.sumar();
//     }
//   }
// });


// let val1=0
// let val2=0
// let calculadora = new Calculadora(0, 0);
// let campoVisor = document.getElementById("visor");
// document.getElementById("datost").addEventListener("click", function(e) {
//   let valor = e.target.value;
//   if (valor >= 0) {
//     campoVisor.value += valor;
//   }else{
//     if (valor == "+" && val1 == 0) {
//       val1 = parseInt(campoVisor.value);
//       campoVisor.value = "";
//     }else{
//       val2 = parseInt(campoVisor.value);
//       calculadora = new Calculadora(val1, val2);
//       campoVisor.value = calculadora.sumar();
//     }
//   }
// });


// let val1=0
// let val2=0
// let calculadora = new Calculadora(0, 0);
// let campoVisor = document.getElementById("visor");
// document.getElementById("datost").addEventListener("click", function(e) {
//     let valor = e.target.value;
//     if (valor >0) {
//       campoVisor.value += valor;
//     } else {
//         if (valor == "+" && val1 == 0) {
//         val1 = parseInt(campoVisor.value);
//         campoVisor.value = "";
//         }else if (valor == "-" && val1 == 0) {
//             val2 = parseInt(campoVisor.value);
//             let calcul= new Calculadora(val1, val2)
//             campoVisor.value=calcul.sumar()
//         }else if(valor == "=" && val1> 0){
//             val2 = parseInt(campoVisor.value);
//             let calcul= new Calculadora(val1, val2)
//             campoVisor.value=calcul.sumar()
//         }
//     }
//   });



let val1 = null; // variable que almacena el primer valor de la operación
let val2 = null; // variable que almacena el segundo valor de la operación
let operacion = null; // variable que almacena el tipo de operación (suma, resta, multiplicación, etc.)
let calculadora = new Calculadora(0, 0); // objeto de la clase Calculadora con valores iniciales en 0
let campoVisor = document.getElementById("visor");  // referencia al campo de texto de la calculadora

document.getElementById("datost").addEventListener("click", function(e) { // añade un evento de click al elemento con el id "datost"
    let valor = e.target.value; // obtiene el valor del botón que fue presionado
    if (valor >= 0 || valor <= 0 || (campoVisor.value == "" && valor == ".")){ // si el valor es un número
        campoVisor.value += valor; // añade el valor al campo de texto de la calculadora
    } else { // si no es un número (es un operador o una función matemática)
        if (valor == "+" && val1 == null) { // si el valor es el operador suma y val1 es 0 (no se ha ingresado un valor antes)
            val1 = parseFloat(campoVisor.value); // convierte el valor del campo de texto en un número decimal y lo asigna a val1
            operacion = "suma"; // establece el tipo de operación como suma
            campoVisor.value = ""; // limpia el campo de texto de la calculadora
        }else if (valor == "-" && val1 == null) {
            val1 = parseFloat(campoVisor.value); 
            operacion = "resta";
            campoVisor.value = "";
        }else if (valor == "*" && val1 == null) { 
            val1 = parseFloat(campoVisor.value); 
            operacion = "multiplica"; 
            campoVisor.value = ""; 
        }else if (valor == "/" && val1 == null) { 
            val1 = parseFloat(campoVisor.value); 
            operacion = "divide";
            campoVisor.value = ""; 
        }else if (valor == "%" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_porcentaje";
            campoVisor.value = "";
        }else if (valor == "Sen" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_seno";
            campoVisor.value = "Sen(" + val1 + ")";
        }else if (valor == "Cos" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_coseno";
            campoVisor.value = "Cos(" + val1 + ")";
        }else if (valor == "Tan" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_tangente";
            campoVisor.value = "Tan(" + val1 + ")";
        }else if (valor == "√" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_raiz_cuadrada";
            campoVisor.value = "√(" + val1 + ")";
        }else if (valor == "³√" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_raiz_cubica";
            campoVisor.value = "³√(" + val1 + ")";
        }else if (valor == "X²" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_potencia_2";
            campoVisor.value = "("+val1+")"+"²";
        }else if (valor == "X³" && val1 == null) {
            val1 = parseFloat(campoVisor.value);
            operacion = "saca_potencia_3";
            campoVisor.value = "("+val1+")"+"³";
        }else if (valor == "=" && val1 !== null) {// Si el valor obtenido del elemento que causó el evento es "=" y se ha ingresado un primer valor
            val2 = parseFloat(campoVisor.value);// Asignar el segundo valor ingresado al valor de campoVisor
            let calcul = new Calculadora(val1, val2);// Crear un objeto de la clase Calculadora con los valores val1 y val2
            if (operacion == "suma") {// Verificar la operación que se realizó y asignar el resultado correspondiente a campoVisor
                campoVisor.value = calcul.sumar();
            }else if (operacion == "resta") {
                campoVisor.value = calcul.restar();
            }else if (operacion == "multiplica") {
                campoVisor.value = calcul.multiplicar();
            }else if (operacion == "divide") {
                campoVisor.value = calcul.dividir();
            }else if (operacion == "saca_porcentaje") {
                campoVisor.value = calcul.porcentaje();
            }else if (operacion == "saca_seno") {
                campoVisor.value = calcul.sen();
            }else if (operacion == "saca_coseno") {
                campoVisor.value = calcul.cos();
            }else if (operacion == "saca_tangente") {
                campoVisor.value = calcul.tan();
            }else if (operacion == "saca_raiz_cuadrada") {
                campoVisor.value = calcul.raiz_cuadrada();
            }else if (operacion == "saca_raiz_cubica") {
                campoVisor.value = calcul.raiz_cubica();
            }else if (operacion == "saca_potencia_2") {
                campoVisor.value = calcul.potencia_a_la_2();
            }else if (operacion == "saca_potencia_3") {
                campoVisor.value = calcul.potencia_a_la_3();
            }
            val1 = null;// Restablecer los valores de val1, val2 y operacion a null
            val2 = null;
            operacion = null;
        }else if (valor == "AC") {
            campoVisor.value = "";
            val1 = null;
            val2 = null;
            operacion = null;
        }
    }
});
document.getElementById("botonC").addEventListener("click", function(e) {
    let valor = campoVisor.value;
    campoVisor.value = valor.slice(0, -1); // eliminar el último caracter
});
document.getElementById("boton.").addEventListener("click", function(e) {// Obtener el elemento HTML con el ID "boton." y agregar un escuchador de eventos para cuando se haga click en él
  let valor = e.target.value;// Obtener el valor del elemento que causó el evento y almacenarlo en la variable "valor"
  if (campoVisor.value.indexOf(".") == -1) {// Verificar si el valor actual del campo de entrada de texto no contiene un punto
    campoVisor.value += valor;// Si el valor no contiene un punto, agregar el valor obtenido del elemento que causó el evento al campo de entrada de texto
  }
});