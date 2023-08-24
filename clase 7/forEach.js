
const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

// Se usa una funcion como argumento
socials.forEach(function(item) {
 //console.log(item);
});
socials.forEach((item) => console.log(item));

socials.forEach((item, index, arr) => { //cada elemento, cual es su indice y el array
    console.log(item, index, arr);
  });

//Digamos que solamente queremos que el console.log() se ejecute en la última iteración del ciclo, o en el último elemento del array. Podemos hacerlo de la siguiente manera.
socials.forEach((social, index, arr) => {
    if (index === arr.length - 1) {
      console.log('The End');
    }
});

//FUNCIONES ANONIMAS
function logSocials(social) {
    console.log(social);
  }
  
  socials.forEach(logSocials);