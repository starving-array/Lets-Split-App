// helper
export function checkIfNumber(number) {
  if (number == NaN || number == 0) {
    // enter a valid no
    alert("Invalid Input");
    return false;
  } else if (number < 0) {
    // enter a valid positive no
    alert("No of people can't be negetive");
    return false;
  } else {
    return true;
  }
}

export function hideDisplayBox(popBox, body) {
  displayUpdate("none", popBox, "display");
  displayUpdate(1, body, "opacity");
}

export function showDisplayBox(popBox, body) {
  displayUpdate("block", popBox, "display");
  displayUpdate(0.2, body, "opacity");
}

function displayUpdate(update, element, args) {
  // change element style.display in html
  element.style[args] = update;
}

export function alertPopUpBoxStyleUpdate(
  element,
  widthGap,
  heightGap,
  top,
  left
) {
  let heightWin = window.innerHeight;
  let widthWin = window.innerWidth;
  element.style.width = widthWin / widthGap + "px";
  element.style.height = heightWin / heightGap + "px";
  element.style.top = heightWin / top + "px";
  element.style.left = widthWin / left + "px";
}

export function assignFormValueToObj(
  whoPays,
  sortable,
  Desortable,
  perPersonPay
) {
  for (let key in sortable) {
    let paid = sortable[key];
    let extraPaid = paid - perPersonPay;
    if (extraPaid > 0) {
      for (let key2 in Desortable) {
        if (whoPays[key2] == undefined) whoPays[key2] = [];
        if (key != key2) {
          let paidIn = sortable[key2];
          if (paidIn < perPersonPay) {
            let extraToBePaid = perPersonPay - paidIn;
            if (extraPaid == extraToBePaid) {
              sortable[key] = perPersonPay;
              sortable[key2] = perPersonPay;
              whoPays[key2].push([key, extraToBePaid]);
              break;
            } else if (extraPaid > extraToBePaid) {
              extraPaid = paid - extraToBePaid;

              sortable[key] = paid - extraToBePaid;
              sortable[key2] = perPersonPay;
              whoPays[key2].push([key, extraToBePaid]);
            } else {
              sortable[key2] = paidIn + extraPaid;
              sortable[key] = perPersonPay;
              whoPays[key2].push([key, extraPaid]);
              break;
            }
          }
        }
      }
    }
  }
}

export function sortObj(obj) {
  return Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => a - b));
}
export function deSortObj(obj) {
  return Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));
}

export function formPopUp(inputNoOfPeopleCount) {
  // procedd with form
  // create a form to get names and amount paid
  let form = createEl("form");
  setAt(form, "id", "form");

  for (let i = 0; i < inputNoOfPeopleCount; i++) {
    // create label
    let divLavel = createEl("div");
    setAt(divLavel, "class", "divLavel");

    // label for input el
    let label = inputLavel(
      "idDiv" + i,
      "nameLabel",
      "Enter User Detail " + (i + 1)
    );

    // create input button

    let div = inputElementWithClass("div", "personDetails");

    // name input in form
    let input = inputNameInForm(i);

    // price
    let priceDiv = createEl("div");
    let input2 = inputPriceElement(i + "idnoP", "Please enter Price?");
    priceDiv.append(input2);
    // create ++ to add multiple addition

    let button = inputButton("addPriceExtra", "+");
    let extra = 1;

    // multiple price
    button.addEventListener("click", () => {
      // create a input box and append it to price div
      let el = inputPriceElement(
        i + 1 + "extraIdnoP",
        "Extra price " + extra++ + "? "
      );
      priceDiv.append(el);
    });

    div.append(input, priceDiv, button);
    divLavel.append(label, div);
    form.append(divLavel);
  }
  let buttonDiv = inputElementWithClass("div", "buttonSubmitDiv");

  let submit = inputButton("formSubmit", "Proceed");
  setAt(submit, "type", "submit");

  buttonDiv.append(submit);

  form.append(buttonDiv);
  return form;
}

function inputElementWithClass(element, classNametxt) {
  let buttonDiv = createEl(element);
  setAt(buttonDiv, "class", classNametxt);
  return buttonDiv;
}

function inputButton(className, innterTxt) {
  let button = createEl("button");
  setAt(button, "class", className);
  button.innerText = innterTxt;
  return button;
}

function inputNameInForm(i) {
  let inputEl = createEl("input");
  setAt(inputEl, "id", i + "idno");
  setAt(inputEl, "placeHolder", "Please enter name?");
  setAt(inputEl, "class", "inputDataFromUser");
  inputEl.required = true;
  return inputEl;
}

function inputPriceElement(id, placeHolderText) {
  let input2 = createEl("input");
  setAt(input2, "id", id);
  setAt(input2, "placeHolder", placeHolderText);
  setAt(input2, "class", "inputDataFromUser");
  input2.required = true;
  return input2;
}

function inputLavel(forName, classNameTxt, innterTxt) {
  let label = createEl("label");
  setAt(label, "for", forName);
  setAt(label, "class", classNameTxt);
  label.innerText = innterTxt;
  return label;
}

function setAt(el, att, val) {
  el.setAttribute(att, val);
}

function createEl(el) {
  return document.createElement(el);
}

export function outputResult(whoPays) {
  // output
  let OutDiv = document.getElementById("outDiv");
  for (let key in whoPays) {
    // create element for result
    let mainDiv = createEl("div");

    let name = createEl("span");
    name.innerText = key;
    let arrayToPay = whoPays[key];

    let insideDiv = createEl("div");
    arrayToPay.forEach((el) => {
      let pname = createEl("span");
      pname.innerText = el[0];
      let pprice = createEl("span");
      pprice.innerText = el[1];
      insideDiv.append(pname, pprice);
    });
    mainDiv.append(name, insideDiv);
    OutDiv.append(mainDiv);
  }
}
