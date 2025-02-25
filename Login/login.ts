// Create a container for the login form
const container: HTMLDivElement = document.createElement('div');
container.style.margin = '100px auto';
container.style.width = '300px';
container.style.padding = '20px';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '5px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

// Create a form element
const form: HTMLFormElement = document.createElement('form');

// Username input
const usernameLabel: HTMLLabelElement = document.createElement('label');
usernameLabel.textContent = 'Username: ';
const usernameInput: HTMLInputElement = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
usernameInput.style.width = '100%';
usernameInput.style.marginBottom = '10px';

// Password input
const passwordLabel: HTMLLabelElement = document.createElement('label');
passwordLabel.textContent = 'Password: ';
const passwordInput: HTMLInputElement = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.style.width = '100%';
passwordInput.style.marginBottom = '10px';

// Login button
const loginButton: HTMLButtonElement = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Log In';
loginButton.style.width = '100%';

// Register button (redirects to Reg.html)
const registerButton: HTMLButtonElement = document.createElement('button');
registerButton.type = 'button';
registerButton.textContent = 'Register';
registerButton.style.width = '100%';
registerButton.style.marginTop = '10px';
registerButton.addEventListener('click', () => {
  window.location.href = 'Reg.html';
});

// Append inputs and buttons to the form
form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(document.createElement('br'));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));
form.appendChild(loginButton);
form.appendChild(registerButton);

// Append the form to the container, then add to the document body
container.appendChild(form);
document.body.appendChild(container);

// Handle form submission for login
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const username: string = usernameInput.value;
  const password: string = passwordInput.value;
  
  // Save login data locally (for demonstration purposes)
  localStorage.setItem('loginData', JSON.stringify({ username, password }));
  
  // Redirect to the next page (e.g., next.html)
  window.location.href = 'next.html';
});
