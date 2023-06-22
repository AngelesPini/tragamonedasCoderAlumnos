let cantidadMonedas;
let cantidadTiros;
let ganados = 0;

alert("Bienvenido a nuestro tragamonedas 🤑");

while (true) {
  cantidadMonedas = prompt("Ingrese cantidad de monedas (solo hasta 10 monedas) 💰");

  if (cantidadMonedas >= 1 && cantidadMonedas <= 10) {
    alert(`Ya puedes jugar, tienes ${cantidadMonedas} tiros`);

    for (cantidadTiros = 0; cantidadTiros < cantidadMonedas; cantidadTiros++) {
      let num1 = Math.floor(Math.random() * 3) + 1;
      let num2 = Math.floor(Math.random() * 3) + 1;
      let num3 = Math.floor(Math.random() * 3) + 1;

      if (num1 === num2 && num1 === num3) {
        alert(`${num1} ${num2} ${num3}\n¡Ganaste este tiro! 😅`);
        ganados++;
      } else {
        alert(`${num1} ${num2} ${num3}\nSigue intentando 😨`);
      }
    }

    if (ganados > 2) {
      alert(`¡Ganaste ${ganados} veces!! 🥳`);
    } else {
      alert("¡Mejor suerte la próxima vez! 🙁");
    }

    break;
  } else {
    alert("Ingrese un número válido ❌");
    continue;
  }
}
