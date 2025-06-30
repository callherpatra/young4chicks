// login form
let form = document.getElementById("loginForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("response");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/; // email pattern using regex
  const passwordPattern = /^[a-zA-Z0-9]{6,}/;
  // validation checks
  if (email === "" || password === "") {
    message.textContent = `Fill in all fields`;
    message.style.color = "red";
    return;
  }
  if (!emailPattern.test(email)) {
    message.textContent = `lnvalid email format`;
    message.style.color = "red";
    return;
  }
  if (!passwordPattern.test(password)) {
    message.textContent = `lnvalid password format`;
    message.style.color = "red";
    return;
  }
});

// Chick Request Form

let requestForm = document.getElementById("requestForm");
requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("fname").value;
  const age = Number(document.getElementById("age").value);
  const type = document.getElementById("chickType").value;
  const quantity = Number(document.getElementById("number").value);
  const msg = document.getElementById("message");
  if (!name || !type) {
    msg.textContent = `Please fill in all the fields`;
    msg.style.color = "red";
    return;
  }
});
func
