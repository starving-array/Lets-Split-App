import * as help from "./helper.js";

function executeCloseButton() {
  let closeButtonForm = document.getElementById("closeForm") || null;
  if (closeButtonForm != null)
    closeButtonForm.addEventListener("click", () => {
      let body = document.getElementById("body");
      let popBox = document.getElementById("formView");
      help.hideDisplayBox(popBox, body);
    });
}

let buttonId = document.getElementById("clickButton");
console.log("lisning inside");

buttonId.addEventListener("click", () => {
  let inputNoOfPeople = document.getElementById("noOfPeople");
  let inputNoOfPeopleCount = Number(inputNoOfPeople.value);

  if (help.checkIfNumber(inputNoOfPeopleCount)) {
    let topBarDiv = formTopPart("Contribution Form");

    let formViewMain = help.inputElementWithClass("div", "formViewMain");

    let form = help.formPopUp(inputNoOfPeopleCount);
    // document.getElementById("formViewMain").innerHTML = "";
    formViewMain.append(form);

    document.getElementById("formView").innerHTML = "";
    document.getElementById("formView").append(topBarDiv, formViewMain);

    let body = document.getElementById("body");
    let popBox = document.getElementById("formView");
    help.alertPopUpBoxStyleUpdate(popBox, 1.5, 2, 4, 5);
    help.showDisplayBox(popBox, body);
    executeCloseButton();

    startCalculation(popBox, body);
  }
});

// start calculation
// once proceed clicked
// start getting data
function startCalculation(popBox, body) {
  console.log("submit");
  let whoPays = {};
  document.querySelector("form").addEventListener("submit", (e) => {
    console.log("submit clicked");
    e.preventDefault();
    let obj = {};
    let total = 0;
    let noOfPeople = 0;
    document.querySelectorAll(".personDetails").forEach((el) => {
      let name = el.childNodes[0].value;
      let priceListCount = el.childNodes[1].childElementCount;
      let sum = 0;
      for (let i = 0; i < priceListCount; i++) {
        // check if value is invalid
        sum += Number(el.childNodes[1].childNodes[i].value);
      }

      obj[name] = sum;
      total = total + sum;
      noOfPeople++;
    });

    let perPersonPay = total / noOfPeople;

    const sortable = help.sortObj(obj);
    const Desortable = help.deSortObj(obj);

    help.assignFormValueToObj(whoPays, sortable, Desortable, perPersonPay);

    help.outputResult(whoPays);
    help.hideDisplayBox(popBox, body);
  });
}

function formTopPart(spantitleTxt) {
  let topBarDiv = help.inputElementWithClass("div", "topBarForm");
  let spanTitle = help.inputElementWithClass("div", "spanTitle");
  spanTitle.innerText = spantitleTxt;
  let closeButton = help.inputElementWithClass("div", "closeForm");
  help.setAt(closeButton, "id", "closeForm");
  closeButton.innerText = "X";
  topBarDiv.append(spanTitle, closeButton);
  return topBarDiv;
}

// function
// on load
// welcome popup page
function welcomePage() {
  let topBarDiv = formTopPart("Welcome to Friendly Split App");
  let formViewMain = help.inputElementWithClass("div", "formViewMain");
  formViewMain.innerText = "Welcome page";
  document.getElementById("formView").innerHTML = "";
  document.getElementById("formView").append(topBarDiv, formViewMain);

  let body = document.getElementById("body");
  let popBox = document.getElementById("formView");
  help.alertPopUpBoxStyleUpdate(popBox, 1.5, 2, 4, 5);
  help.showDisplayBox(popBox, body);
  executeCloseButton();
}

let welcomePageStat = localStorage.getItem("welcomePagePop") || false;
if (welcomePageStat) {
  welcomePage();
  localStorage.setItem("welcomePagePop", true);
}
// how to use
//
