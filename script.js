const subscribeForms = document.querySelectorAll(".subscribe-form");

subscribeForms.forEach((subscribeForm) => {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = subscribeForm.querySelector("input");
    const button = subscribeForm.querySelector("button");

    if (!input || !button) {
      return;
    }

    const originalText = button.textContent;
    button.textContent = "Subscribed";
    input.value = "";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
});
