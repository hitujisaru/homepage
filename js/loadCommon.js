window.addEventListener("DOMContentLoaded", () => {
  fetch("/homepage/components/header.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
    });

  fetch("/homepage/components/footer.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    });
});
