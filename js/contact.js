const emailBtn = document.getElementById("email-btn");
const email = "emilyhuangart@gmail.com";

//Listen for button click: Send emaili
emailBtn.addEventListener("click", () => revealEmail());
console.log("email button clicked");

function revealEmail() {
  emailBtn.textContent = email;
}
