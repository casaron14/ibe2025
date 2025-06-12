document.getElementById("proofForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const fileInput = document.getElementById("proof");
  if (fileInput.files.length > 0) {
    alert("Proof uploaded successfully! You’ll be notified after verification.");
    window.location.href = "success.html";
  } else {
    alert("Please upload a file.");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayName").innerText = localStorage.getItem("userName") || "N/A";
  document.getElementById("displayEmail").innerText = localStorage.getItem("userEmail") || "N/A";
  document.getElementById("displayPhone").innerText = localStorage.getItem("userPhone") || "N/A";
  document.getElementById("displaySeat").innerText = localStorage.getItem("seatType") || "N/A";
  document.getElementById("displayPayment").innerText = localStorage.getItem("paymentMethod") || "N/A";
  document.getElementById("displayRef").innerText = localStorage.getItem("referenceCode") || "N/A";
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
      mode: "no-cors",
      body: formData
    }).then(() => {
      console.log("Form submitted to Google Forms");
      alert("Booking information sent successfully!");
      window.location.href = "done.html";
    }).catch((error) => {
      console.error("Error submitting form:", error);
    });
  }
function submitToGoogleForm() {
  // Get data from localStorage
  document.getElementById("g_name").value = localStorage.getItem("userName") || "";
  document.getElementById("g_phone").value = localStorage.getItem("userPhone") || "";
  document.getElementById("g_email").value = localStorage.getItem("userEmail") || "";
  document.getElementById("g_seat").value = localStorage.getItem("seatType") || "";
  document.getElementById("g_ref").value = localStorage.getItem("referenceCode") || "";

  // Submit the form
  document.getElementById("googleForm").submit();
}

document.getElementById("proofForm").addEventListener("submit", function(event) {
    event.preventDefault();
    sendToGoogleForm(); // submit to Google Forms
  });
