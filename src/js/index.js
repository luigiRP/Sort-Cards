/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let medio = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Q", "J", "K"];
  let medioNumero = Math.floor(Math.random() * medio.length);
  let palo = document.querySelector("#medioSimbolo");
  palo.innerHTML = medio[medioNumero];

  let inicio = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let inicioNumero = Math.floor(Math.random() * inicio.length);

  let inicioSimbolo = document.querySelector("#inicioSimbolo");
  let finalSimbolo = document.querySelector("#finalSimbolo");

  inicioSimbolo.innerHTML = inicio[inicioNumero];
  finalSimbolo.innerHTML = inicio[inicioNumero];
  finalSimbolo.style.transform = "rotate(180deg)";

  if (inicio[inicioNumero] == "&hearts;" || inicio[inicioNumero] == "&diams;") {
    inicioSimbolo.style.color = "red";
    finalSimbolo.style.color = "red";
    palo.style.color = "red";
  }
};
