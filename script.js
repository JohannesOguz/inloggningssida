function createLoginForm() {
  const root = document.getElementById("root");

  root.innerHTML = "";

  const form = document.createElement("form");

  const logo = document.createElement("h1");
  logo.textContent = "Inloggningssida!";

  const usernameLabel = document.createElement("label");
  usernameLabel.textContent = "Användarnamn: ";

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Lösenord: ";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";

  const loginButton = document.createElement("button");
  loginButton.type = "button";
  loginButton.textContent = "Logga in";
  loginButton.id = "loginButton";

  form.appendChild(logo);
  form.appendChild(usernameLabel);
  form.appendChild(usernameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(loginButton);

  root.appendChild(form);

  document.getElementById("loginButton").addEventListener("click", handleLogin);
}

const correctUsername = "test";
const correctPassword = "1234";

const handleLogin = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true");
    showWelcome();
  } else {
    showError();
  }
};

createLoginForm();

document.getElementById("loginButton").addEventListener("click", handleLogin);

function showWelcome() {
  const root = document.getElementById("root");

  root.innerHTML = "";

  const welcomeContainer = document.createElement("div");

  const welcomeText = document.createElement("h1");
  welcomeText.textContent = "Välkommen, lyckad inloggning! ";

  welcomeContainer.appendChild(welcomeText);

  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logga ut";
  logoutButton.addEventListener("click", handleLogout);

  welcomeContainer.appendChild(logoutButton);

  root.appendChild(welcomeContainer);
}

function showError() {
  const root = document.getElementById("root");

  root.innerHTML = "";

  const errorContainer = document.createElement("div");

  const errorText = document.createElement("h1");
  errorText.textContent = "Fel användarnamn eller lösenord! ";

  errorContainer.appendChild(errorText);

  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Försök igen";
  tryAgainButton.addEventListener("click", createLoginForm);

  errorContainer.appendChild(tryAgainButton);
  root.appendChild(errorContainer);
}

function handleLogout() {
  localStorage.removeItem("isLoggedIn");

  createLoginForm();
}

window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    showWelcome();
  } else {
    createLoginForm();
  }
};
