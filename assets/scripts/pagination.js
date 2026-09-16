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
    
    validArticles.forEach(article => {
        const item = document.createElement("div");
        item.className = "article-item";
        item.innerHTML = `<a href="${article.url}">${article.title}</a> <span>${article.date}</span>`;
        list.appendChild(item);
    });


    /*pageArticles.forEach(article => {
        if (!article) return;
        if (!article.title || !article.url || !article.date) return;

        const item = document.createElement("div");
        item.className = "article-item";
        item.innerHTML = `<a href="${article.url}">${article.title}</a> <span>${article.date}</span>`;
        list.appendChild(item);
    });*/

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
        btn.onclick = () => renderPage(i);
        pagination.appendChild(btn);
    }
}

renderPage(1);