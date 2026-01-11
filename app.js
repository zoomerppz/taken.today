// Lazy-load images: swap data-src -> src when a <details> opens
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("details").forEach((d) => {
    d.addEventListener("toggle", () => {
      if (!d.open) return;

      d.querySelectorAll("img[data-src]").forEach((img) => {
        if (!img.getAttribute("src")) {
          img.setAttribute("src", img.dataset.src);
        }
      });
    });
  });
});
