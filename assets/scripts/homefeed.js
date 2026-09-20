const allArticles = [
    ...anime_reviews,
    ...manga_reviews
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