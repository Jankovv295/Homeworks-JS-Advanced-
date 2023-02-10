let registerLink = document.getElementById("registerLink");
let btnLogIn = document.getElementById("btnLogIn");

registerLink.addEventListener("click", () => {
  btnLogIn.innerHTML = `Register`;
  registerLink.style.display = "none";
});

let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

btnLogIn.addEventListener("click", () => {
  window.location.href = "./Home/Home.html";
  if (!emailInp.value || !passwordInp.value) {
    alert("Please enter both email and password.");
    window.location.href = "./index.html";
  }
  let korisnik = new User(emailInp.value, passwordInp.value);
  localStorage.setItem("user", JSON.stringify(korisnik));
});
