addEventListener("DOMContentLoaded", (e) =>{

    // Definimos un objeto con los precios de los helados
const precios = {
    "Bonice": 400,
    "Palito de helado de agua": 1000,
    "Palito de helado de crema": 2200,
    "Bombón helado con arequipe": 1500,
    "Bombón helado con chispas de chocolate": 2500,
    "Bombón helado con fresas": 2800,
    "Medio litro de helado": 2000
  };
  
  // Solicitamos el nombre y el dinero del usuario
  const nombre = prompt("Ingresa tu nombre:");
    alert("Hola "+ nombre);

  const dinero = parseInt(prompt("Ingresa la cantidad de dinero que tienes:"));
    alert("Ingresaste "+ dinero);
  
  // Creamos una variable para almacenar el helado más caro que el usuario puede comprar
  let heladoMasCaro = "";
  let precioMasCaro = 0;
  
  // Recorremos el objeto de precios para encontrar el helado más caro que el usuario puede comprar
  for (const helado in precios) {
    if (precios[helado] <= dinero && precios[helado] >= precioMasCaro) {
      heladoMasCaro = helado;
      precioMasCaro = precios[helado];
    }
  }
  // Si encontramos un helado que el usuario puede comprar, lo mostramos y le decimos cuánto dinero le queda
  if (heladoMasCaro !== "") {
    console.log(`${nombre}, puedes comprar el helado "${heladoMasCaro}" por $${precioMasCaro}. Te quedarían $${dinero - precioMasCaro} de vuelta.`);
  } else {
    console.log(`${nombre}, no tienes suficiente dinero para comprar ningún helado.`);
  }
})
  
