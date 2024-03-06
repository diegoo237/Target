"use strict";
//1)
/*
const indice = 13;
var soma = 0;
var k = 0;
while (k < indice) {
  k = k + 1;
  soma = soma + k;
}
console.log(soma);
*/

// Logica dos accordion
const buttons = document.querySelectorAll(".icon");
const hiddenAccordions = document.querySelectorAll(".hidden--accordion");
const chekButton = document.getElementById("checar");
const invertButton = document.getElementById("inverter");

const checkArea = document.getElementById("areaCheck");
const invertArea = document.getElementById("areaInvert");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (hiddenAccordions[index].classList.contains("hidden")) {
      hiddenAccordions[index].classList.remove("hidden");
    } else {
      hiddenAccordions[index].classList.add("hidden");
    }
  });
});

// 2)
chekButton.addEventListener("click", function () {
  const valorDigitado = parseInt(checkArea.value);

  let max = 987;
  max = valorDigitado;
  let sequence = fibonacciCalculator(max);

  function fibonacciCalculator(max) {
    let fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] <= max) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      i++;
    }
    return fibonacci;
  }

  function fibonacciChecker(max, sequence) {
    for (let i = 0; i < sequence.length; i++) {
      if (max === sequence[i]) {
        return true;
      }
    }
    return false;
  }

  if (fibonacciChecker(max, sequence)) {
    document.querySelector(".checkresult").textContent =
      max + " pertence à sequência Fibonacci " + sequence;
  } else {
    document.querySelector(".checkresult").textContent =
      max + " não pertence à sequência Fibonacci " + sequence;
  }
});
// 5)
invertButton.addEventListener("click", function () {
  const valorDigitado = invertArea.value;

  function invertString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i];
    }
    return inverted;
  }

  let stringOriginal = valorDigitado;
  let stringReverse = invertString(stringOriginal);
  document.querySelector(".invertresult").textContent =
    "String original: " +
    stringOriginal +
    " / " +
    "\nString invertida: " +
    stringReverse;
});
