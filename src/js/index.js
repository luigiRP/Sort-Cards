/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {};

let numbers = [];
let symbols = [];

window.drawCards = function drawCards() {
  let number = document.querySelector("input").value;
  let carta = document.querySelector("#carta");
  let medio = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "J",
    "K"
  ];

  let inicio = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let sort = document.querySelector("#sort");
  sort.innerHTML = "";
  carta.innerHTML = "";
  numbers = [];
  symbols = [];
  for (let i = 0; i < number; i++) {
    //----------Aqui asigno dos numeros random, uno para medio y otro para inicio--------
    let medioNumero = Math.floor(Math.random() * medio.length);
    let inicioNumero = Math.floor(Math.random() * inicio.length);

    let medioFinal = medio[medioNumero];
    let simboloFinal = inicio[inicioNumero];
    if (medioFinal == "A") {
      numbers.push(1);
    } else if (medioFinal == "J") {
      numbers.push(11);
    } else if (medioFinal == "Q") {
      numbers.push(12);
    } else if (medioFinal == "K") {
      numbers.push(13);
    } else {
      numbers.push(parseInt(medioFinal));
    }
    symbols.push(simboloFinal);

    let color = "black";

    if (simboloFinal == "&hearts;" || simboloFinal == "&diams;") {
      color = "red;";
    }

    carta.insertAdjacentHTML(
      "afterbegin",
      `<div class="bg-white rounded container mx-3 my-3 col-1" id="carta">
          <div class="row">
            <div class="col-12" id="inicio">
              <p id="inicioSimbolo" style="color: ${color}">${simboloFinal}</p>
            </div>
          </div>
          <div class="row" id="medio">
            <div
              class="col-12 d-flex justify-content-center my-3 p-0"
              id="medio"
            >
              <p id="medioSimbolo" style="color: ${color}">${medioFinal}</p>
            </div>
          </div>

          <div class="row" id="final">
            <div class="col-12 d-flex justify-content-end">
              <p id="finalSimbolo" style="transform: rotate(180deg); color: ${color}">${simboloFinal}</p>
            </div>
          </div>
        </div>`
    );
  }
  numbers = numbers.reverse();
  symbols = symbols.reverse();
};

window.sortCards = function sortCards() {
  let color = "black";
  let len = numbers.length;
  let number = document.querySelector("input").value;

  sort.innerHTML = "";
  for (var i = len - 1; i >= 1; i--) {
    sort.innerHTML =
      sort.innerHTML +
      `<div class="col-12 container" >
    <div class="row" >
    <div class="col-12 d-flex" id="H${i}">
    <h1>${i}</h1></div></div></div>`;

    console.log(numbers);
    let nuevo = document.querySelector(`#H${i}`);
    for (var j = len - 1; j >= 0; j--) {
      color = "black";
      if (numbers[j] > numbers[j - 1]) {
        let tmp = numbers[j];
        let tmp1 = symbols[j];
        numbers[j] = numbers[j - 1];
        symbols[j] = symbols[j - 1];
        numbers[j - 1] = tmp;
        symbols[j - 1] = tmp1;
      }

      let letra = numbers[j];

      if (letra == 11) {
        letra = "J";
      } else if (letra == 12) {
        letra = "Q";
      } else if (letra == 13) {
        letra = "K";
      } else if (letra == 1) {
        letra = "A";
      }

      if (symbols[j] == "&hearts;" || symbols[j] == "&diams;") {
        color = "red";
      }

      nuevo.innerHTML =
        nuevo.innerHTML +
        `
      <div class="bg-white rounded container mx-3 my-3 col-1 " id="carta">
          <div class="row">
            <div class="col-12" id="inicio">
              <p id="inicioSimbolo" style="color: ${color}">${symbols[j]}</p>
            </div>
          </div>
          <div class="row" id="medio">
            <div
              class="col-12 d-flex justify-content-center my-3 p-0"
              id="medio"
            >
              <p id="medioSimbolo" style="color: ${color}">${letra}</p>
            </div>
          </div>

          <div class="row" id="final">
            <div class="col-12 d-flex justify-content-end">
              <p id="finalSimbolo" style="transform: rotate(180deg); color: ${color}">${symbols[j]}</p>
            </div>
          </div>
        
        </div>`;
    }
  }

  //     sort.insertAdjacentHTML(
  //       "afterbegin",
  //       `
  //       <div class="bg-white rounded container mx-3 my-3 col-1" id="carta">
  //           <div class="row">
  //             <div class="col-12" id="inicio">
  //               <p id="inicioSimbolo" style="color: ${color}">${symbols[k]}</p>
  //             </div>
  //           </div>
  //           <div class="row" id="medio">
  //             <div
  //               class="col-12 d-flex justify-content-center my-3 p-0"
  //               id="medio"
  //             >
  //               <p id="medioSimbolo" style="color: ${color}">${numbers[k]}</p>
  //             </div>
  //           </div>

  //           <div class="row" id="final">
  //             <div class="col-12 d-flex justify-content-end">
  //               <p id="finalSimbolo" style="transform: rotate(180deg); color: ${color}">${symbols[k]}</p>
  //             </div>
  //           </div>
  //         </div><br/><br/>`
  //     );
  //     color = "black";
  //   }
};
