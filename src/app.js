/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomCard() {
    //una funcion que haga todos los cambios
    let central = document.querySelector("#central");
    let num_cen = Math.floor(Math.random() * 12);
    let cen = "";
    if (num_cen === 0) {
      cen = "K";
    } else if (num_cen === 1) {
      cen = "A";
    } else if (num_cen === 11) {
      cen = "J";
    } else if (cen === 12) {
      cen = "Q";
    } else {
      cen = num_cen.toString();
    }
    central.innerHTML = cen;
    //Generar simbolos aleatorios
    let symbol = document.querySelectorAll(".symbol");
    let num_sym = Math.floor(Math.random() * 4);
    let sym = "";
    if (num_sym === 0) {
      sym = "♦";
    } else if (num_sym === 1) {
      sym = "♥";
    } else if (num_sym === 2) {
      sym = "♠";
    } else if (num_sym === 3) {
      sym = "♣";
    }
    symbol.forEach(element => {
      element.innerHTML = sym;
    });
    //Cambiar a color rojo
    if (num_sym === 0 || num_sym === 1) {
      symbol[0].style.color = "red";
      symbol[1].style.color = "red";
      central.style.color = "red";
    }
  }
  randomCard();

  let button = document.querySelector("button"); //al hacer click en el boton vuelve a generar otra carta
  button.addEventListener("click", _ => {
    randomCard();
  });
};
