const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector(".display");
const operators = document.querySelectorAll(".operations");
const clearbutton = document.querySelector(".clear");

numbers.forEach(number => {
  number.addEventListener("mouseover", () => {
    number.style.backgroundColor = "white";
  });

  number.addEventListener("mouseout", () => {
    number.style.backgroundColor = "grey";
  });

  number.addEventListener("click", () => {
    screen.textContent += number.textContent;
  });
});

operators.forEach(operators => {
    operators.addEventListener("mouseover", () => {
        operators.style.backgroundColor = "white";
  });

  operators.addEventListener("mouseout", () => {
    operators.style.backgroundColor = "grey";
  });

  operators.addEventListener("click", () => {
    screen.textContent += operators.textContent;
  });
}); 

clearbutton.addEventListener("click", () => {screen.textContent = ""});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {console.log(screen.textContent)});





