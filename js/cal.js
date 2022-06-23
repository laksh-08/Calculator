const output = document.getElementById("screen");

//value get
function display(num) {
  output.value += num;
}

// Equation
function calculate() {
    output.value = eval(output.value);
}

//Clear button
function Clear() {
    output.value = "";
  }

//Delete button
function del() {
  output.value = output.value.slice(0, -1);
}

