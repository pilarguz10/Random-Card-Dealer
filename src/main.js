/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// Array con los posibles "palos" de la carta
const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
// Array con los posibles "números" de la carta
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// Variable donde guardo el div del palo de arriba
const divSuitA = document.querySelector("#suitA");
// Variable donde guardo el div del palo de abajo
const divSuitB = document.querySelector("#suitB");

window.onload = function() {
  // Con esta función genero un item al azar del array number
  let randomIndex = array => {
    let radomNumber = Math.floor(Math.random() * array.length);
    return array[radomNumber];
  };

  let cardColor = suit => {
    if (suit == "\u2666" || suit == "\u2665") {
      let redColorTop = divSuitA;
      let redColorBottom = divSuitB;
      redColorTop.className = "suitTop text-danger";
      redColorBottom.className = "suitBottom text-danger";
    } else {
      let blackColorTop = divSuitA;
      let blackColorBottom = divSuitB;
      blackColorTop.className = "suitTop text-dark";
      blackColorBottom.className = "suitBottom text-dark";
    }
  };
  let suitRandomIndex = randomIndex(suits);
  cardColor(suitRandomIndex);
  let divNumber = document.querySelector("#cardNumber");
  divSuitA.innerHTML = suitRandomIndex;
  divSuitB.innerHTML = suitRandomIndex;
  divNumber.innerHTML = randomIndex(number);
};
