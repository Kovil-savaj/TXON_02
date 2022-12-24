let result = document.getElementById("inputText");

function calculate(number) {
  result.value += number;
}

function answer() {
  try {
    result.value = eval(result.value).toFixed(4);
  } catch (err) {
    alert("Enter the valid Input");
  }
}

function clr() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1);
}
