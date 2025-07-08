// 🔍 Treatment Table Filter
function filterTreatment() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("treatmentTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const service = cells[1]?.textContent?.toLowerCase() || '';
        rows[i].style.display = service.includes(filter) ? "" : "none";
    }
}

// 🧠 Main Initialization
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const loginIcon = document.getElementById("loginIcon");
    const userGreeting = document.getElementById("userGreeting");
    const usernameDisplay = document.getElementById("usernameDisplay");

    /* 🔐 Navbar login UI update
    if (username) {
        loginIcon?.classList.add("d-none");
        userGreeting?.classList.remove("d-none");
        if (usernameDisplay) usernameDisplay.innerText = "👋 " + username;
    } else {
        loginIcon?.classList.remove("d-none");
        userGreeting?.classList.add("d-none");
    }
*/
    // 📬 Contact Form Submit Handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! We will reach you soon.");
            contactForm.reset();
        });
    }

    // 🖼️ Gallery Lightbox Image Viewer
    const images = document.querySelectorAll('.gallery-img');
    const modalEl = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImage');
    images.forEach(img => {
        img.addEventListener('click', () => {
            if (modalImg && modalEl) {
                modalImg.src = img.src;
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        });
    });
});
/*
// // ✅ Login Form Submission
document.querySelector(".login form")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.querySelector(".login input[placeholder='Enter your email']").value.trim();
    const password = document.querySelector(".login input[placeholder='Enter your password']").value.trim();
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
  
    const matchedUser = users.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      alert("Login successful!");
      // Save user session
      localStorage.setItem("username", matchedUser.name);
  
     // Close modal
const authModal = bootstrap.Modal.getInstance(document.getElementById("authModal"));
authModal?.hide();
  
      // Update Navbar UI
     document.getElementById("loginIcon")?.classList.add("d-none");
document.getElementById("userGreeting")?.classList.remove("d-none");
document.getElementById("usernameDisplay").innerText = "👋 " + matchedUser.name;
    } 
    // 🔁 Check for redirect
const redirectUrl = localStorage.getItem("redirectTo");
if (redirectUrl) {
  localStorage.removeItem("redirectTo"); // clear it
  window.location.href = redirectUrl;
}
  });*/
  
// 🔼 Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
 document.querySelectorAll(".showHidePw").forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () => {
        document.querySelectorAll(".password").forEach((pwField) => {
          if (pwField.type === "password") {
            pwField.type = "text";
            eyeIcon.classList.replace("uil-eye-slash", "uil-eye");
          } else {
            pwField.type = "password";
            eyeIcon.classList.replace("uil-eye", "uil-eye-slash")
          }
        });
      });
    });

    // Toggle between login and signup
const loginFormContainer = document.querySelector(".form.login");
const signupFormContainer = document.querySelector(".form.signup");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");

signupLink?.addEventListener("click", function (e) {
  e.preventDefault();
  loginFormContainer.classList.add("d-none");
  signupFormContainer.classList.remove("d-none");
});

loginLink?.addEventListener("click", function (e) {
  e.preventDefault();
  signupFormContainer.classList.add("d-none");
  loginFormContainer.classList.remove("d-none");
});

// ✅ Force login form to show every time modal opens
const authModalEl = document.getElementById("authModal");
authModalEl?.addEventListener("show.bs.modal", function () {
const loginForm = document.querySelector(".form.login");
  const signupForm = document.querySelector(".form.signup");

  loginForm?.classList.remove("d-none");
  signupForm?.classList.add("d-none");
});


// ✅ Registration Form Submission
document.querySelector(".signup form")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.querySelector(".signup input[placeholder='Enter your name']").value.trim();
    const email = document.querySelector(".signup input[placeholder='Enter your email']").value.trim();
    const password = document.querySelectorAll(".signup input.password")[0].value.trim();
    const confirmPassword = document.querySelectorAll(".signup input.password")[1].value.trim();
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert("Email already registered.");
      return;
    }
  
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registration successful!");
  
    // Switch to Login Form
    document.querySelector(".form.signup")?.classList.add("d-none");
    document.querySelector(".form.login")?.classList.remove("d-none");
  });
  /*
  document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    if (username) {
      document.getElementById("loginIcon")?.classList.add("d-none");
      document.getElementById("userGreeting")?.classList.remove("d-none");
      document.getElementById("usernameDisplay").innerText = "👋 " + username;
    }
  });
  */
  
 /* ---------- Static Price Maps ---------- */
const roomPrices = {
    ac_cottage:   { 1: 1800, 2: 2350 },
    ac_room:      { 1: 1300, 2: 1850 },
    non_ac_room:  { 1: 1100, 2: 1650 },
    general_ward: { 1:  800, 2:  800 }
  };
  
const treatmentPrices = {
  "भाप स्नान": 100,
  "कटी बस्ती": 250,
  "फुल बॉडी मसाज": 150,
  "मिट्टी पट्टी": 50,
  "फिजियोथैरेपी मशीन": 100,
  "अभ्यंग मसाज (45-50min)": 400,
  "हनी नेक्टर मसाज (30-35min)": 400,
  "कमर पोटली": 50,
  "घुटना पोटली /1": 50,
  "घुटना पोटली /2": 100,
  "घुटना+कमर पोटली": 150,
  "हाथ /1": 50,
  "हाथ /2": 100,
  "संपूर्ण पोटली": 250,
  "जानु बस्ती": 250,
  "ग्रीवा बस्ती": 250,
  "शिरोधारा तेल से (40min)": 800,
  "शिरोधारा काढ़े से (40min)": 400
};
  
  /* ---------- DOM Elements ---------- */
  const roomTypeEl = document.getElementById("roomType");
  const personsEl = document.getElementById("persons");
  const daysEl = document.getElementById("days");
  const roomPriceEl = document.getElementById("roomPrice");
  const roomCostEl = document.getElementById("roomCost");
  const extraCostEl = document.getElementById("extraCost");
  const grandTotalEl = document.getElementById("grandTotal");
  
  /* ---------- Calculator ---------- */
function calcTotal() {

  const missingElements = [];

  if (!roomTypeEl) missingElements.push("roomTypeEl");
  if (!personsEl) missingElements.push("personsEl");
  if (!daysEl) missingElements.push("daysEl");
  if (!roomPriceEl) missingElements.push("roomPriceEl");
  if (!roomCostEl) missingElements.push("roomCostEl");
  if (!extraCostEl) missingElements.push("extraCostEl");
  if (!grandTotalEl) missingElements.push("grandTotalEl");
  
  if (missingElements.length > 0) {
    console.error("Missing DOM elements:", missingElements.join(", "));
    return;
  }

  const key   = roomTypeEl.value;
  const ppl   = +personsEl.value || 0;
  const days  = +daysEl.value    || 0;

  const perDay   = key && ppl ? roomPrices[key][ppl] : 0;
  const roomCost = perDay * days;

  const checkedExtras = document.querySelectorAll("#extraTreatmentsCollapse input[type='checkbox']:checked");
  const extraCost = [...checkedExtras].reduce((sum, checkbox) => sum + (treatmentPrices[checkbox.value] || 0), 0);

  roomPriceEl.textContent = perDay;
  roomCostEl.textContent  = roomCost;
  extraCostEl.textContent = extraCost;

  const total = roomCost + extraCost;
  const prev  = grandTotalEl.textContent;

  grandTotalEl.textContent = total;
  if (prev !== String(total)) {
    grandTotalEl.classList.add("changed");
    setTimeout(() => grandTotalEl.classList.remove("changed"), 300);
  }
}

/* ---------- Event Bindings ---------- */
[roomTypeEl, personsEl, daysEl].forEach(el =>
  el?.addEventListener("change", calcTotal)
);

// ✅ NEW binding for checkboxes
document.querySelectorAll("#extraTreatmentsCollapse input[type='checkbox']").forEach(cb =>
  cb.addEventListener("change", calcTotal)
);

calcTotal();   // first run


  /* ===== Collapse toggle for Extra Treatment ====================== */
const extraWrapper = document.getElementById("extraWrapper");
const toggleBtn    = document.getElementById("toggleExtras");
const extraIcon    = document.getElementById("extraIcon");

if (extraWrapper && toggleBtn) {
  const bsColl = new bootstrap.Collapse(extraWrapper, { toggle: false });

  toggleBtn.addEventListener("click", () => {
    const isOpen = extraWrapper.classList.contains("show");
    isOpen ? bsColl.hide() : bsColl.show();

    // icon swap ±
    extraIcon.classList.toggle("bi-plus-lg",  isOpen);
    extraIcon.classList.toggle("bi-dash-lg", !isOpen);
  });
}

// Reset button logic
document.querySelector("form#bookingForm button[type='reset']")?.addEventListener("click", function () {
    // Reset calculated values
    document.getElementById("roomPrice").textContent = "0";
    document.getElementById("roomCost").textContent = "0";
    document.getElementById("extraCost").textContent = "0";
    document.getElementById("grandTotal").textContent = "0";

    // Uncheck all extra treatment checkboxes
    document.querySelectorAll("#extraTreatmentsCollapse input[type='checkbox']").forEach(cb => cb.checked = false);

    // ✅ Close the collapsible section manually
    let collapseElement = document.getElementById("extraTreatmentsCollapse");
    if (collapseElement.classList.contains("show")) {
        let collapseInstance = bootstrap.Collapse.getInstance(collapseElement);
        if (collapseInstance) {
            collapseInstance.hide();
        }
    }
});


document.getElementById("bookingForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    localStorage.setItem("redirectTo", "page/services.html");
    const modal = new bootstrap.Modal(document.getElementById("authModal"));
    modal.show();
    return;
  }

  // ✅ Collect form data
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const persons = document.getElementById("persons").value;
  const roomType = document.getElementById("roomType").value;
  const days = parseInt(document.getElementById("days").value);
  const roomCost = parseInt(document.getElementById("roomCost").textContent);
  const extraCost = parseInt(document.getElementById("extraCost").textContent);
  const total = parseInt(document.getElementById("grandTotal").textContent);

  // ✅ Get selected extra treatments
  const selectedTreatments = [];
  document.querySelectorAll("#extraTreatmentsCollapse input[type='checkbox']").forEach(chk => {
    if (chk.checked) {
      selectedTreatments.push(chk.nextElementSibling.textContent);
    }
  });

  const bookingData = {
    name,
    mobile,
    persons,
    roomType,
    days,
    roomCost,
    extraCost,
    total,
    selectedTreatments,
    bookingTime: new Date().toLocaleString(),
    bookingId: "BKG" + Math.floor(100000 + Math.random() * 900000)
  };

  // ✅ Save to localStorage
  localStorage.setItem("bookingInfo", JSON.stringify(bookingData));

  // ✅ Redirect to payment page
  window.location.href = "page/pay.html";
});




