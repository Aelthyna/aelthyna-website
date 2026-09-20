const paragraphsPerPage = 5;

function renderArticlePage(page) {
    const container = document.getElementById("text-pages");
    container.innerHTML = "";

    const start = (page - 1) * paragraphsPerPage;
    const end = start + paragraphsPerPage;

    const pageParagraphs = textParagraphs.slice(start, end);

    if (pageParagraphs.length === 0) {
        container.innerHTML = `<p class="empty-state">No text has been added yet.</p>`;
        document.getElementById("text-pagination").innerHTML = "";
        return;
    }

    const pageDiv = document.createElement("div");
    pageDiv.className = "text-page";

    pageParagraphs.forEach(text => {
        const p = document.createElement("p");
        p.innerHTML = text;
        pageDiv.appendChild(p);
    });

    container.appendChild(pageDiv);

    renderArticlePagination(page);
}

function renderArticlePagination(currentPage) {
    const pagination = document.getElementById("text-pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(textParagraphs.length / paragraphsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = (i === currentPage) ? "active" : "";
        btn.onclick = () => {
            renderArticlePage(i);
            //window.scrollTo({ top: 0, behavior: "smooth" });
            document.querySelector(".content-box").scrollIntoView({ behavior: "smooth" });
        };
        pagination.appendChild(btn);
    }
}

renderArticlePage(1);