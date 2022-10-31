function scriptTest() {
  alert("Hey my script is running");
}

function promptUser() {
  let first = document.getElementById('first_name').value;
  let mood = document.getElementById('mood').value;
  document.getElementById("answers").innerHTML = ("The ES welcomes you, " + first + "." + " we're glad you are doing " + mood + "!");
}

function getTodaysDate() {
  let today = new Date().toLocaleDateString();
  let today2 = new Date().toLocaleTimeString();
  document.getElementById("current_date").innerHTML = ("The current Date is: " + today + " The local time is: " + today2);
}

function simpleAddition() {
  let first_number = document.getElementById("first_number").value;
  let second_number = document.getElementById("second_number").value;
  let answer = (Number(first_number) + Number(second_number));
  document.getElementById("first_function_answer").innerHTML = ("Adding both numbers you get: " + answer);
}
function simpleSubtraction() {
  let first_number = document.getElementById("first_number_sub").value;
  let second_number = document.getElementById("second_number_sub").value;
  let answer = first_number - second_number;
  document.getElementById("second_function_answer").innerHTML = ("Subtracting both numbers you get: " + answer);
}
function simpleMultiplication() {
  let first_number = document.getElementById("first_number_mul").value;
  let second_number = document.getElementById("second_number_mul").value;
  let answer = first_number * second_number;
  document.getElementById("third_function_answer").innerHTML = ("Multiplying both numbers you get: " + answer);
}
function simpleDivision() {
  let first_number = document.getElementById("first_number_div").value;
  let second_number = document.getElementById("second_number_div").value;
  let answer = first_number / second_number;
  document.getElementById("fourth_function_answer").innerHTML = ("Dividing the first number by the second you get: " + answer);
}



