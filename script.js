function createLoginForm() {
  const root = document.getElementById("root");

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
}

createLoginForm();
