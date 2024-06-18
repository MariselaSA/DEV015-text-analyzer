const analyzer = {  
  getWordCount: (text) => { // parametros
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //console.log(text.length)
    return text.split(' ').length;
  },
  getCharacterCount: (text) => {
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replace(/[\s\p{P}]/gu, '').length; // Usamos una expresión regular para eliminar espacios y signos de puntuación
    // La expresión /[\s\p{P}]/gu busca todos los espacios (\s) y signos de puntuación (\p{P})
    // La bandera 'u' es para soporte de Unicode y 'g' es para hacer la búsqueda global
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras= text.split(' ');
    let sumaDeCaracteres=0;
    for (let i = 0; i<palabras.length; i++) {
    //console.log(palabras[i]);
    //console.log("conteo de caracteres: " +  palabras[i].length);
      sumaDeCaracteres += palabras[i].length;

    // console.log("suma: " + sumaDeCaracteres);
    }

    const promedio = sumaDeCaracteres / palabras.length;

    return promedio.toFixed(2); //Metodo que permita tenerTenga solo 2 decimales .toFixed 

 

  },
  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if(text.match(/\d+/g) !== null){ //Aprendi que existe una diferencia entre el /\d+/g y el /\d/g el primero busca lo coincidencia de 
      //números y los agrupo el segundo igualmente peor por separado
      // console.log(text.match(/\d/g).length);
      return text.match(/\b\d+(\.\d+)?\b/g).length;
    }else{
      return 0;
    }            


  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros =text.match(/\b\d+(\.\d+)?\b/g);// Usar una expresión regular para encontrar todos los dígitos en el string creando una variable
    /* -?: Coincide con un signo negativo opcional.
    \d+: Coincide con una o más cifras (dígitos del 0 al 9).
   (\.\d+)?: Coincide con un punto decimal seguido de una o más cifras, opcionalmente.
    g: Indicador global, que asegura que se encuentran todas las coincidencias en la cadena, no solo la primera.*/
    //console.log(numeros);
        
    if(!numeros){ //Si no se encuentran dígitos, devolver 0
      return 0;
    }else{          
      const suma = numeros.reduce((acumulador, numero) => {  // Convertir los dígitos a enteros y sumarlos
        const digito = parseFloat(numero); // Convertir el dígito (en formato string) a un entero
        // console.log(acumulador);
  
        return acumulador + digito;// Sumar el dígito al acumulador
  
      }, 0);

        
      return suma;
    }



  }
};

export default analyzer;
