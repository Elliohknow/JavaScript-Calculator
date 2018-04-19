var buttons = document.querySelectorAll("button");
var output = document.querySelector(".output");
var inputs = [""];
var totalInput;
var operators = ["+", "-", "*", "/", "."];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getValue(input) {
  if(operators.includes(inputs[inputs.length - 1]) === true 
    && (input === ("." || "+" || "-" || "*" || "/"))) {
    console.log("error: duplicate '.' ");
  } else if (inputs.length === 1 && operators.includes(input) === false) {
    inputs.push(input);
  } else if(operators.includes(inputs[inputs.length - 1]) === false) {
    inputs.push(input);
  } else if(numbers.includes(Number(input))) {
    inputs.push(input);
  }
  updateDisplay();
}
function updateDisplay() {
  totalInput = inputs.join('');
  output.innerHTML = totalInput;
}
function getTotal() {
  totalInput = inputs.join('');
  output.innerHTML = parseFloat(eval(totalInput));
  setNewTotal(output.innerHTML);
}
// reset & push to inputs[] so user can keep working with the current result
function setNewTotal(newNum) {
  inputs = [""];
  inputs.push(newNum);
}

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if(this.getAttribute("class") === "clear") {
      inputs = [""];
      updateDisplay();
    } else if(this.getAttribute("data-att") === "=") {
      getTotal();
    } else {
      if(inputs[inputs.length - 1].indexOf("+", "-", "*", "/") === -1) {
        getValue(this.getAttribute("data-att"));
      } else { getValue(this.getAttribute("data-att")); }
    }
  });
}




