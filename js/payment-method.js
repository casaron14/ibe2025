const paymentDetails = {
  mobile: {
    image: 'mobile-money-qr.jpg',
    text: '15611485',
  },
  bank: {
    image: 'images/bank-transfer-qr.png',
    text: '1234567890',
  },
  crypto: {
    image: 'BEP-20 USDT.jpg',
    text: '0xa7a60652233a9e28cfba155a8e8fbc7a28c89b6b',
  },
  binancePay: {
    VIP: {
      image: 'binance-vip-qr.jpg',
      text: ' ',
    },
    Normal: {
      image: 'binance-normal-qr.jpg',
      text: ' ',
    }
  }
};

let currentToCopy = "";

function showImage(method) {
  const popup = document.getElementById('imagePopup');
  const image = document.getElementById('popupImage');
  const details = document.getElementById('paymentDetails');
  document.getElementById('paymentForm').style.display = 'block';

  let seatType = localStorage.getItem('seatType') || 'Normal';

  if (method === 'binancePay') {
    image.src = paymentDetails[method][seatType].image;
    currentToCopy = paymentDetails[method][seatType].text;
  } else {
    image.src = paymentDetails[method].image;
    currentToCopy = paymentDetails[method].text;
  }

  details.textContent = currentToCopy;
  popup.classList.remove('hidden');

  localStorage.setItem("paymentMethod", method);
}

function hidePopup() {
  document.getElementById('imagePopup').classList.add('hidden');
}

function copyToClipboard() {
  navigator.clipboard.writeText(currentToCopy)
    .then(() => alert("Payment detail copied to clipboard!"))
    .catch(err => alert("Copy failed: " + err));
}

document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  if (localStorage.getItem("paymentMethod")) {
    window.location.href = "reference.html";
  } else {
    alert("Please select a payment method before continuing.");
  }
});
