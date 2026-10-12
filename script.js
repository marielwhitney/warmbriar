const heroVideo = document.querySelector(".hero-video");

if (heroVideo && "IntersectionObserver" in window) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let heroIsVisible = false;

  const updateHeroPlayback = () => {
    if (heroIsVisible && !document.hidden && !reducedMotion.matches) {
      heroVideo.play().catch(() => {
        // Autoplay may be unavailable; leave the current frame visible.
      });
    } else {
      heroVideo.pause();
    }
  };

  const heroObserver = new IntersectionObserver(([entry]) => {
    heroIsVisible = entry.isIntersecting;
    updateHeroPlayback();
  });

  heroObserver.observe(heroVideo.closest(".hero"));
  document.addEventListener("visibilitychange", updateHeroPlayback);
  reducedMotion.addEventListener("change", updateHeroPlayback);
}

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
