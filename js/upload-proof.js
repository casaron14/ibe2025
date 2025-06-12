// Display user info on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayName").innerText = localStorage.getItem("userName") || "N/A";
  document.getElementById("displayEmail").innerText = localStorage.getItem("userEmail") || "N/A";
  document.getElementById("displayPhone").innerText = localStorage.getItem("userPhone") || "N/A";
  document.getElementById("displaySeat").innerText = localStorage.getItem("seatType") || "N/A";
  document.getElementById("displayPayment").innerText = localStorage.getItem("paymentMethod") || "N/A";
  document.getElementById("displayRef").innerText = localStorage.getItem("referenceCode") || "N/A";
});

// Handle form submission
document.getElementById("proofForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const fileInput = document.getElementById("proof");

  if (fileInput.files.length === 0) {
    alert("Please upload a file.");
    return;
  }

  // Optionally, you can validate the file type/size here

  // Send data to Google Form
  sendToGoogleForm();
});

function sendToGoogleForm() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSda05bAbPsvhb0q9Tge4i8ZuFCa1Nnm4QEIPSDZtRWoy9DAYg/formResponse";

  const formData = new FormData();
  formData.append("entry.105274938", localStorage.getItem("userName") || "");
  formData.append("entry.1633254895", localStorage.getItem("userPhone") || "");
  formData.append("entry.171767658", localStorage.getItem("seatType") || "");
  formData.append("entry.1469626620", localStorage.getItem("paymentMethod") || "");
  formData.append("entry.652550508", localStorage.getItem("referenceCode") || "");

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors", // prevents CORS errors but no response data
    body: formData
  }).then(() => {
    alert("Proof and booking information sent successfully! You’ll be notified after verification.");
    window.location.href = "success.html";
  }).catch((error) => {
    console.error("Error submitting form:", error);
    alert("There was an error submitting the form. Please try again.");
  });
}
