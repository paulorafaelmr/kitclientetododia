// Troque o link abaixo pelo checkout real da Kiwify, Hotmart ou plataforma escolhida.
const CHECKOUT_URL = "https://pay.kiwify.com.br/38u72ot";

const checkoutLinks = document.querySelectorAll(".checkout-link");

checkoutLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const isPlaceholder = CHECKOUT_URL.includes("seu-checkout-aqui.com");

    if (isPlaceholder) {
      event.preventDefault();
      const checkoutSection = document.querySelector("#checkout");

      if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: "smooth", block: "center" });
        checkoutSection.classList.add("attention");
        setTimeout(() => checkoutSection.classList.remove("attention"), 700);
      }

      console.warn("Substitua CHECKOUT_URL no arquivo script.js pelo link real do checkout.");
      return;
    }

    link.href = CHECKOUT_URL;
  });
});

const style = document.createElement("style");
style.innerHTML = `
  .attention {
    animation: checkoutShake 0.7s ease;
  }

  @keyframes checkoutShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

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