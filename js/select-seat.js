document.getElementById("seatForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const seat = document.querySelector('input[name="seat"]:checked').value;
  localStorage.setItem("seatType", seat);
  window.location.href = "user-info.html";
});

document.getElementById('seatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="seat"]:checked').value;
  localStorage.setItem('seatType', selected);
  window.location.href = 'user-info.html';
});

const seatForm = document.getElementById('seatForm');
seatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const selectedSeat = document.querySelector('input[name="seat"]:checked').value;
  localStorage.setItem('seatType', selectedSeat);
  window.location.href = 'user-info.html';
});
