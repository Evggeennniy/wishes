const pageWrap = document.getElementById("page-wrap");
const passwordInput = document.getElementById("password-inpt");
const openBtn = document.getElementById("open-letter-btn");
const errorMsg = document.getElementById("error");
const errorsInLetter = document.getElementById("errors-letter");
let errors = localStorage.getItem("errors");
errors = errors == null ? 0 : errors;
errorMsg.textContent = `${errors}`;

openBtn.addEventListener("click", () => {
  if (!passwordInput.value) return;
  if (passwordInput.value != "hellur") {
    passwordInput.value = "";
    errors++;
    errorMsg.textContent = `${errors}`;
    localStorage.setItem("errors", errors);
    return;
  }

  alert("Passed!");
  errorsInLetter.textContent = errors;
  pageWrap.classList.toggle("passed");
});
