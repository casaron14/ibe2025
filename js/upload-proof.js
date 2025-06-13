document.getElementById("proofForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("proof");
  const file = fileInput.files[0];
  const spinner = document.getElementById("loadingSpinner");

  if (!file) {
    alert("Please upload a file.");
    return;
  }

  // Show spinner
  spinner.style.display = "block";

  const reader = new FileReader();
  reader.onloadend = function () {
    const base64 = reader.result.split(",")[1]; // Get only the base64 part

    const name = localStorage.getItem("userName") || "N/A";
    const phone = localStorage.getItem("userPhone") || "N/A";

    const scriptURL = "https://script.google.com/macros/s/AKfycby0YF-bUgJs-qt83JnJrhRexAdVNV8gAENl-zpWc1gHfPNUTvwIKz4bDHeVCIWKWfFC3A/exec";

    const params = new URLSearchParams();
    params.append("file", base64);
    params.append("name", name);
    params.append("phone", phone);

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })
      .then(() => {
        alert("Image uploaded successfully!");
        window.location.href = "success.html";
      })
      .catch((error) => {
        console.error("Upload error:", error);
        alert("Error uploading image. Please try again.");
      })
      .finally(() => {
        // Hide spinner
        spinner.style.display = "none";
      });
  };

  reader.readAsDataURL(file);
});
