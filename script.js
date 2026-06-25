const CHECKOUT_URL = "https://pay.kiwify.com.br/38u72ot";

const checkoutLinks = document.querySelectorAll(".checkout-link");

checkoutLinks.forEach((link) => {
  link.href = CHECKOUT_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const countdownElement = document.getElementById("countdown");

if (countdownElement) {
  let timeInSeconds = 10 * 60;

  function updateCountdown() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    countdownElement.textContent =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

    if (timeInSeconds > 0) {
      timeInSeconds--;
    } else {
      countdownElement.textContent = "00:00";
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}