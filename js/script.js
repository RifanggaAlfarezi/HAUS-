// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

function goToCheckout(menuName) {
  // Simpan nama menu ke URL jika perlu
  window.location.href = `checkout.html?menu=${encodeURIComponent(menuName)}`;
}

// Ini untuk perubahan harga ketika di pilih
function updatePrice() {
  const orderType = document.getElementById("orderType");
  const selectedPrice = parseInt(orderType.value);
  const otherFees = 5000;

  // Update item price
  document.getElementById("itemPrice").innerText =
    "Rp" + selectedPrice.toLocaleString();

  // Update subtotal
  document.getElementById("subtotal").innerText =
    "Rp" + selectedPrice.toLocaleString();

  // Update total price
  const total = selectedPrice + otherFees;
  document.getElementById("total").innerText = "Rp" + total.toLocaleString();
}