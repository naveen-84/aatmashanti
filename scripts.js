// Define variables for DOM elements and arrays
let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

// Function to redirect to home.html
function redirectHome() {
  window.location.href = "home.html";
}

// Event listener for form submission and validation for form with id 'a-form'
document.getElementById("a-form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm("a-form");
});

// Event listener for form submission and validation for form with id 'b-form'
document.getElementById("b-form").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm("b-form");
});

// Function to validate form inputs
function validateForm(formId) {
  const form = document.getElementById(formId);
  const name = form.querySelector('input[placeholder="Name"]');
  const email = form.querySelector('input[placeholder="Email"]');
  const password = form.querySelector('input[placeholder="Password"]');

  if (formId === "a-form" && !name.value) {
    alert("Name is required");
    return false;
  }

  if (!email.value || !validateEmail(email.value)) {
    alert("Valid email is required");
    return false;
  }

  if (!password.value) {
    alert("Password is required");
    return false;
  }

  form.submit();
}

// Function to validate email using a regular expression
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to prevent default behavior for buttons
let getButtons = (e) => e.preventDefault();

// Function to handle form switching animations and states
let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

// Function to initialize event listeners when the window loads
let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);
