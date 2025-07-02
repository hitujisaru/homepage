document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "必須項目をすべて入力してください。";
      status.style.color = "red";
      return;
    }

    const confirmed = window.confirm("本当に送信しますか？");
    if (!confirmed) return;

    try {
      const formData = {
        name,
        email,
        subject,
        message,
      };

      const response = await fetch("https://formspree.io/f/mjkrobqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        status.textContent = "お問い合わせを送信しました。ありがとうございました！";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "送信に失敗しました。もう一度お試しください。";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "エラーが発生しました。通信環境をご確認ください。";
      status.style.color = "red";
    }
  });
});
