document.getElementById("volunteerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    // Store in localStorage for demo purposes
    const volunteerData = { name, email, message };
    let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
    volunteers.push(volunteerData);
    localStorage.setItem("volunteers", JSON.stringify(volunteers));

    formMessage.textContent = "Thank you for signing up to volunteer!";
    document.getElementById("volunteerForm").reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
