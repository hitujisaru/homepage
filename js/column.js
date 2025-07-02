const posts = [
  {
    title: "手帳に1日1知識",
    date: "2025-07-02",
    folder: "20250702",
    thumbnail: "/images/column/20250702-thumb.png",
    description: "最近の習慣"
  },
  {
    title: "コラム記事の投稿方法",
    date: "2025-06-19",
    folder: "20250619",
    thumbnail: "/images/column/20250619-thumb.jpg",
    description: "コラム投稿方法"
  },
  {
    title: "人生はじめてのコラム投稿！",
    date: "2025-06-17",
    folder: "20250617",
    thumbnail: "/images/column/20250617-thumb.jpg",
    description: "自己紹介、意気込み等"
  },
  {
    title: "サンプル",
    date: "2025-06-10",
    folder: "20250610", // ← フォルダ名だけでOK
    thumbnail: "/images/column/20250610-thumb.jpg",
    description: "記事の概要や説明"
  }
];

function renderPosts(order = "desc") {
  const container = document.getElementById("column-cards");
  container.innerHTML = "";

  const sorted = [...posts].sort((a, b) => {
    return order === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  sorted.forEach(post => {
    const card = document.createElement("a");
    card.className = "column-card";
    card.href = `posts/${post.folder}.html`; // ← 自動でURL生成
    card.innerHTML = `
      <img src="${post.thumbnail}" alt="${post.title}" class="column-thumb">
      <div class="column-card-body">
        <h3>${post.title}</h3>
        <p class="column-date">${post.date}</p>
        <p class="column-description">${post.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("sort-order");

  if (selector) {
    // 一覧ページならソート機能付きで全件表示
    selector.addEventListener("change", () => {
      renderPosts(selector.value);
    });
    renderPosts("desc");
  } else {
    // トップページなら最新3件のみ表示
    renderPosts("desc", 3);
  }
});



//最新記事3つ取得する関数
function renderPosts(order = "desc", count = null) {
  const container = document.getElementById("column-cards");
  if (!container) return;

  container.innerHTML = "";

  const sorted = [...posts].sort((a, b) => {
    return order === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  const limited = count ? sorted.slice(0, count) : sorted;

  limited.forEach(post => {
    const card = document.createElement("a");
    card.className = "column-card";
    card.href = `posts/${post.folder}.html`;
    card.innerHTML = `
      <img src="${post.thumbnail}" alt="${post.title}" class="column-thumb">
      <div class="column-card-body">
        <h3>${post.title}</h3>
        <p class="column-date">${post.date}</p>
        <p class="column-description">${post.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

