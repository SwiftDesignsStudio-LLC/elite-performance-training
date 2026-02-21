/* Smooth scrolling navigation */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* Consultation form */
const form = document.getElementById("consult-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const button = form.querySelector("button");

        button.innerText = "Submitting...";
        button.disabled = true;

        setTimeout(() => {
            form.innerHTML = `
      <div style="
        background:#020617;
        border:2px solid #22c55e;
        padding:30px;
        border-radius:12px;">
        <h2>You're Booked!</h2>
        <p>Thanks ${name} 💪</p>
        <p>A coach will contact you within 24 hours.</p>
      </div>
      `;
        }, 1400);
    });
}