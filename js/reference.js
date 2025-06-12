const name = localStorage.getItem("userName") || "XX";
const namePrefix = name.substring(0, 2).toUpperCase();

// Generate a random 4-digit number
const randomNumber = Math.floor(1000 + Math.random() * 900);

// Generate reference code
const refCode = "IBE2025-" + namePrefix + randomNumber;

// Store and display the reference code
localStorage.setItem("referenceCode", refCode);
document.getElementById("refCode").innerText = refCode;

function nextStep() {
  window.location.href = "upload-proof.html";
}
