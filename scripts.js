// Button Click Event
document.getElementById("changeTextBtn").addEventListener("click", function() {
    this.textContent = "Week Six Assignment!";
    this.style.backgroundColor = "lightgreen";
});

// Hover Effect
document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});
document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});

// Secret Action (Double Click)
document.getElementById("secretMessage").addEventListener("dblclick", function() {
    this.textContent = "🎉 Surprise! You're Almost There, keep going!";
});

// Image Gallery
const images = [
    "https://images.pexels.com/photos/31340327/pexels-photo-31340327/free-photo-of-coffee-and-laptop-coding-setup-in-yemen.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
let currentIndex = 0;
document.getElementById("nextImgBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentIndex];
});

// Tabs
document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
        document.getElementById(this.dataset.tab).style.display = "block";
    });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (name === "" || email === "" || password.length < 8) {
        event.preventDefault();
        feedback.textContent = "Please fill all fields correctly!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
    }
});
