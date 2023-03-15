// Hamburger script
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  // Toggle nav
  navLinks.classList.toggle("nav-active");

  // Animate links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Hamburger animation
  hamburger.classList.toggle("toggle");
});


// Loan amount into words
const amountInput = document.getElementById("loan-amount");
const amountInWords = document.getElementById("amount-in-words");

amountInput.addEventListener("input", (event) => {
  const amount = parseInt(event.target.value);
  if (!isNaN(amount)) {
    amountInWords.textContent = numberToWords(amount) + " Rs.";
  } else {
    amountInWords.textContent = "";
  }
});

function numberToWords(number) {
  const ones = ['','one','two','three','four','five','six','seven','eight','nine'];
  const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const teens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

  let words = '';

  if (number === 0) {
    return 'zero';
  }

  if (number < 0) {
    words += 'minus ';
    number = Math.abs(number);
  }

  if (number >= 10000000) {
    words += numberToWords(Math.floor(number / 10000000)) + ' crore ';
    number %= 10000000;
  }

  if (number >= 100000) {
    words += numberToWords(Math.floor(number / 100000)) + ' lakh ';
    number %= 100000;
  }

  if (number >= 1000) {
    words += numberToWords(Math.floor(number / 1000)) + ' thousand ';
    number %= 1000;
  }

  if (number >= 100) {
    words += ones[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }

  if (number >= 11 && number <= 19) {
    words += teens[number - 10];
    return words.trim();
  }

  if (number >= 10) {
    words += tens[Math.floor(number / 10)];
    number %= 10;
  }

  if (number > 0) {
    words += ones[number];
  }

  return words.trim();
}


// Generate Mathematical Captcha
function generateCaptcha() {
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const expression = `${num1} ${operator} ${num2}`;
  const result = eval(expression);
  return {
    expression: expression,
    result: result,
  };
}

let captcha = generateCaptcha();
document.getElementById("captcha").textContent = captcha.expression;

document.querySelector("form").addEventListener("submit", function (event) {
  const answer = parseInt(document.getElementById("answer").value);
  if (answer !== captcha.result) {
    event.preventDefault();
    alert("Incorrect answer. Please try again.");
  }
});

document.getElementById("new-captcha").addEventListener("click", function () {
  captcha = generateCaptcha();
  document.getElementById("captcha").textContent = captcha.expression;
  document.getElementById("answer").value = "";
});
