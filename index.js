let welCome = document.getElementById("welCome");
let name = "Aqsa";
let greeting = "Welcome, my name is " + name;
welCome.innerText = greeting + " 😎";

let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    count = 0;
    countEl.innerText = count;
}