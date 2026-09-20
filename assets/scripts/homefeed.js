const allArticles = [
    ...essays,
    ...projects,
    ...reviews,
    ...thoughts
];

const sorted = allArticles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
);

const recent = sorted.slice(0, 10);

const list = document.getElementById("home-feed");
list.innerHTML = "";

const ul = document.createElement("ul");
ul.className = "article-categories home-feed-list";

recent.forEach(article => {
    const li = document.createElement("li");

    li.innerHTML = `
        <a href="${article.url}">${article.title}</a>
        <p class="article-caption">${article.date} — ${article.section}</p>
    `;

    ul.appendChild(li);
});

list.appendChild(ul);

/* recent.forEach(article => {
    const item = document.createElement("div");
    item.className = "article-item";
    item.innerHTML = `
        <div class="article-title">
            <a href="${article.url}">${article.title}</a>
        </div>
        <div class="article-meta">
            <span>${article.date}</span>
            <span class="section-tag">${article.section}</span>
        </div>
    `;
    list.appendChild(item);
}); */