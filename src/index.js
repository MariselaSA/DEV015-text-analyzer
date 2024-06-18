import analyzer from './analyzer.js';
//Darle Evento al textarea//

const userInput= document.querySelector('textarea[name="user-input"]');
const lista = document.querySelectorAll("li"); // ARRAY
 
 
//console.log(lista);
//userInput.addEventListener('user-input', obtenerTexto );
//Aquí cambie mi de input a user input
/***FUNCION ANONIMA****/
userInput.addEventListener('input', obtenerTexto);
//     console.log(userInput.value)
//  })

//function obtenerTexto(){
//     console.log(userInput.value)
// }
//const obtenerTexto = ()=>{
// console.log(userInput.value)
function obtenerTexto(){
  /***OBJETOS EN JS***/
  const resultWordCount = analyzer.getWordCount(userInput.value) //argumento
  const resulCharacterCount = analyzer.getCharacterCount(userInput.value)
  const resulCharacterCountExcludingSpaces =analyzer.getCharacterCountExcludingSpaces(userInput.value)
  const resulAverageWordLength=analyzer.getAverageWordLength(userInput.value)
  const resulNumberCount= analyzer.getNumberCount(userInput.value)
  const resulNumberSum= analyzer.getNumberSum(userInput.value)
  /***ARREGLOS/ARRAY EN JS****/
  lista[0].textContent = "Recuento de Palabras:  " +  resultWordCount;
  lista[1].textContent="Recuento de Carácteres:  " +  resulCharacterCount;
  lista[2].textContent= "Recuento Sin Espacio y Signos: "  +resulCharacterCountExcludingSpaces;
  lista[3].textContent ="Longitud media de Palabras : "+ resulAverageWordLength;
  lista[4].textContent= "Recuento de Números :" + resulNumberCount;
  lista[5].textContent="Suma de Números:" + resulNumberSum;
}
document.getElementById("reset-button").addEventListener('click', limpiar);
function limpiar(){
  userInput.value = '' ;

  lista[0].textContent=" Recuento de Palabras: "; 
  lista[1].textContent=" Recuento de Carácteres: "; 
  lista[2].textContent=" Recuento Sin Espacio y Signos: "; 
  lista[3].textContent="Longitud media de Palabras : ";
  lista[4].textContent="Recuento de Números :" ;
  lista[5].textContent="Suma de Números:" ;
}

    
    
     


 



 
 

/****PARAMETROS Y ARGUMENTOS
 * a + b = 8; // parametros
 * 5 + 3 = 8; // argumentos""valorreal"
 * ****/
//Todo : Escuchar evetnso del DOMO E INVOCAR LOS METODOS DEL OBJETOS ANALYZER
 