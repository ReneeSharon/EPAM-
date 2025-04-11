// Simulate User interface
/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} password
 */

// Hardcoded users
const users = [
    { username: "admin", password: "admin123" },
    { username: "user1", password: "pass1" },
    { username: "john", password: "doe123" }
  ];
  
  /**
   * Check user login credentials
   */
  function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
  
    const userFound = users.find(
      user => user.username === enteredUsername && user.password === enteredPassword
    );
  
    const messageElement = document.getElementById("message");
    if (userFound) {
      messageElement.textContent = "✅ Login successful!";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "❌ Invalid username or password.";
      messageElement.style.color = "red";
    }
  }
  