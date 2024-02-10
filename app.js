const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector(".display");
const operators = document.querySelectorAll(".operations");
const clearbutton = document.querySelector(".clear");
const equals = document.querySelector(".equals");

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

equals.addEventListener("click", () => {
    calculation(screen.textContent);
});

function calculation(expression) {
    let result;
    if (expression.includes("+")) {
        result = add(expression);
    } else if (expression.includes("-")) {
        result = subtract(expression);
    } else if (expression.includes("*")) {
        result = multiply(expression);
    } else if (expression.includes("/")) {
        result = divide(expression);
    }
    screen.textContent = result;
}

function add(expression) {
    const operands = expression.split("+").map(Number);
    return operands.reduce((acc, val) => acc + val, 0);
}

function subtract(expression) {
    const operands = expression.split("-").map(Number);
    return operands.reduce((acc, val) => acc - val);
}

function multiply(expression) {
    const operands = expression.split("*").map(Number);
    return operands.reduce((acc, val) => acc * val, 1);
}

function divide(expression) {
    const operands = expression.split("/").map(Number);
    return operands.reduce((acc, val) => acc / val);
}





