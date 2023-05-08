"use strict";

//component
const clearEl = document.querySelector(".clear");
const displayOnClickEl = document.querySelectorAll(".displayonclick");
const calcuDisplayEl = document.querySelector(".calculate-bar");
const answerDisplayEl = document.querySelector(".answer-bar");
const operatorEl = document.querySelectorAll(".operator");
const deleteEl = document.querySelector(".delete");
const equalEl = document.querySelector(".equal");

//varible
let clickBtn = "";
let count = 0;
let operatorcount = 0;

//digitkey click functionality
for (let i = 0; i < displayOnClickEl.length; i++) {
  displayOnClickEl[i].addEventListener("click", function () {
    clickBtn = displayOnClickEl[i].textContent;
    calcuDisplayEl.textContent += clickBtn;
    operatorcount = 0;
    count++;
  });
}

//operatorkey click functionality
for (let i = 0; i < operatorEl.length; i++) {
  operatorEl[i].addEventListener("click", function () {
    if (operatorcount < 1) {
      clickBtn = operatorEl[i].textContent;
      calcuDisplayEl.textContent += clickBtn;
      operatorcount++;
      count++;
    }
  });
}

//deletkey click functionality
deleteEl.addEventListener("click", function () {
  if (calcuDisplayEl.textContent.length !== 0) {
    let str = calcuDisplayEl.textContent;
    calcuDisplayEl.textContent = str.slice(0, str.length - 1);
  }
});

//equalkey click functionality
equalEl.addEventListener("click", function () {
  let parsed = calcuDisplayEl.textContent.replace("%", "/100");
  let result = eval(parsed);
  answerDisplayEl.textContent = result;
  calcuDisplayEl.textContent = result;
});

//clearkey click functionality
clearEl.addEventListener("click", function () {
  calcuDisplayEl.textContent = "";
  answerDisplayEl.textContent = "";
  clickBtn = "";
});
