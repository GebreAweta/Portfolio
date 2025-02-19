// Select DOM elements
const menuIcon = document.getElementById("menu-icon");
const navebar = document.querySelector(".navebar");
const links = document.querySelectorAll(".navebar a");

// Toggle menu on small screens
menuIcon.addEventListener("click", () => {
    navebar.classList.toggle("active");
});

// Close the menu when a link is clicked (for small screens)
links.forEach(link => {
    link.addEventListener("click", () => {
        navebar.classList.remove("active");
    });
});

// Smooth scrolling for navigation links
links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone number"]').value.trim();
    const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

// Fix Social Media Icons (Ensure they are from Boxicons)
document.querySelectorAll(".social-icons a i").forEach(icon => {
    const classes = icon.classList;
    if (classes.contains("bx1-github")) icon.className = "bx bxl-github";
    if (classes.contains("bx1-Linkein-Square")) icon.className = "bx bxl-linkedin-square";
    if (classes.contains("bx1-instagram-alt")) icon.className = "bx bxl-instagram";
});
