let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    try {
      if (event.target.innerHTML === "=") {
        string = eval(string); // Evaluate the string and assign the result to string
        input.value = string; // Update the input box with the result
      } else if (event.target.innerHTML === "AC") {
        string = "";
        input.value = string;
      } else if (event.target.innerHTML === "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        string += event.target.innerHTML;
        input.value = string;
      }
    } catch (error) {
      input.value = "Error"; // Display error if the evaluation fails
      string = ""; // Reset the string after an error
    }
  });
});
