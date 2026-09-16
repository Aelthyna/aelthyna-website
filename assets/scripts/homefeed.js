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

recent.forEach(article => {
    const item = document.createElement("div");
    item.className = "article-item";
    item.innerHTML = `
        <a href="${article.url}">${article.title}</a>
        <span>${article.date}</span>
        <span class="section-tag">${article.section}</span>
    `;
    list.appendChild(item);
});