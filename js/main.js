window.addEventListener("DOMContentLoaded", () => {
  // スライドショー処理
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  const showSlide = () => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  };

  showSlide(); // 最初の表示
  setInterval(showSlide, 7000); // 7秒ごとに切り替え
});


// コラム取得
fetch("/column/column.json")
  .then(res => res.json())
  .then(data => {
    const colEl = document.getElementById("column-cards");
    data.slice(0, 3).forEach(item => {
      colEl.innerHTML += `
        <a href="${item.url}" class="column-card">
          <img src="${item.image}" alt="" class="column-thumb">
          <div class="column-card-body">
            <h3>${item.title}</h3>
            <div class="column-date">${item.date}</div>
          </div>
        </a>`;
    });
  });
