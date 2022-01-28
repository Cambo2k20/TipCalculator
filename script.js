const billAmount = document.querySelector("#bill");
const peopleAmount = document.querySelector("#numPeople");
const customBtn = document.querySelector("#tipCustom");
let showTip = document.getElementById("showTipAmount");
let showTotalPP = document.getElementById("totalPP");
let tipAmount = [0.05, 0.1, 0.15, 0.25, 0.5];
let totalCostPP = 0;
let counter3 = 0;
//create array of the buttons
let counter = 1;
let tipBtnArr = [];
for (var i = 0; i < 5; i++) {
  var addBtns = document.getElementById("tip" + counter);
  tipBtnArr.push(addBtns);
  counter++;
}

function setCount(count) {
  counter3 = count;
}

// Loop through buttons to listen for click
for (var counter2 = 0; counter2 < tipBtnArr.length; counter2++) {
  tipBtnArr[counter2].addEventListener("click", function () {
    totalTipAmount = (billValue * tipAmount[counter3]) / peopleValue;
    showTip.innerHTML = "$" + totalTipAmount.toFixed(2);
    totalCostPP = billValue / peopleValue + totalTipAmount;
    showTotalPP.innerHTML = "$" + totalCostPP.toFixed(2);
  });
}

//Checking for chnages to the input fields
billAmount.addEventListener("input", billInputFunc);
peopleAmount.addEventListener("input", peopleInputFunc);
customBtn.addEventListener("input", customInputFunc);

//Functions to assign values to variables
function billInputFunc() {
  billValue = parseFloat(billAmount.value);
  console.log("Bill value: " + billValue);
}
function peopleInputFunc() {
  peopleValue = parseFloat(peopleAmount.value);
  console.log("Amount of People: " + peopleValue);
}
function customInputFunc() {
  customValue = parseFloat(customBtn.value / 100);
  customTipAmount = (billValue * customValue) / peopleValue;
  showTip.innerHTML = "$" + customTipAmount.toFixed(2);
  totalCostPP = billValue / peopleValue + customTipAmount;
  showTotalPP.innerHTML = "$" + totalCostPP.toFixed(2);
}

//reset button

function resetBtn() {
  document.getElementById("inputForm").reset();
  billValue = 0;
  peopleValue = 0;
  showTip.innerHTML = "$0.00";
  showTotalPP.innerHTML = "$0.00";
}
