
const validUsername = "test";
const validPassword = "test";

window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const loginNavItem = document.querySelector('.nav-item .nav-link[data-bs-target="#authModal"]');
  const usernameDisplay = document.getElementById("usernameDisplay");
  const userGreeting = document.getElementById("userGreeting");

  if (isLoggedIn && username) {
    if (loginNavItem) loginNavItem.parentElement.style.display = "none";
    if (usernameDisplay) usernameDisplay.textContent = username;
    if (userGreeting) {
      userGreeting.classList.remove("d-none");
      userGreeting.innerHTML = `
        <div class="dropdown">
          <a class="nav-link dropdown-toggle fw-bold text-success" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            ${username}
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="my-booking.html" id="myBookingLink">My Booking</a></li>
            <li><a class="dropdown-item" href="#" id="logoutBtn">Logout</a></li>
          </ul>
        </div>
      `;
    }

    // My Booking link add
    if (!document.getElementById("myBookingLink")) {
      const li = document.createElement("li");
      li.className = "nav-item";
      li.innerHTML = `<a class="nav-link" id="myBookingLink" href="my-booking.html">My Booking</a>`;
      document.querySelector(".navbar-nav").appendChild(li);
    }
  }
});

const authLoginForm = document.querySelector("#authModal form");
if (authLoginForm) {
  authLoginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const usernameInput = this.querySelector('input[placeholder="Enter your email"]');
    const passwordInput = this.querySelector('input[placeholder="Enter your password"]');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      location.reload();
    } else {
      alert("Invalid credentials. Try test/test");
    }
  });
}

// Logout
window.addEventListener("click", function (e) {
  if (e.target && e.target.id === "logoutBtn") {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "index.html";
  }
});
