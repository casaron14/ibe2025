document.getElementById("infoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Basic validation check (you can improve it)
  if (!name || !location || !email || !phone) {
    alert('Please fill all required fields.');
    return;
  }

  // Save to localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userLocation", location);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);

  // Redirect to next page
  window.location.href = "payment-method.html";
});
