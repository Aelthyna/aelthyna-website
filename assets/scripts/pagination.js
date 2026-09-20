const articlesPerPage = 10;

function renderPage(page) {
    const list = document.getElementById("article-list");
    list.innerHTML = "";

    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    const pageArticles = articles.slice(start, end);

    const validArticles = pageArticles.filter(a => a && a.title && a.url && a.date);

    if (validArticles.length === 0) {
        list.innerHTML = `<p class="empty-state">Nothing has been archived in this section yet.</p>`;
        document.getElementById("pagination").innerHTML = "";
        return;
    }

    // ⭐ Create category-style list
    const ul = document.createElement("ul");
    ul.className = "article-categories review-list";

    validArticles.forEach(article => {
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="${article.url}">${article.title}</a>
            <p class="article-caption">${article.date} — ${article.section}</p>
        `;

        ul.appendChild(li);
    });

    list.appendChild(ul);

    renderPagination(page);
}

function renderPagination(currentPage) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = (i == currentPage) ? "active" : "";
        btn.onclick = () => {
            renderImagePage(i);
            //window.scrollTo({ top: 0, behavior: "smooth" });
            document.querySelector(".content-box").scrollIntoView({ behavior: "smooth" });
        }
        pagination.appendChild(btn);
    }
}

renderPage(1);