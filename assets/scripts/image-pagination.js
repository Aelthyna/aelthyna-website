const imagesPerPage = 5;

function renderImagePage(page) {
    const list = document.getElementById("image-list");
    list.innerHTML = "";

    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    const pageImages = images.slice(start, end);

    const validImages = pageImages.filter(img => img && img.src && img.alt);

    if (validImages.length === 0) {
        list.innerHTML = `<p class="empty-state">No images have been added yet.</p>`;
        document.getElementById("image-pagination").innerHTML = "";
        return;
    }

    validImages.forEach(img => {
        const figure = document.createElement("figure");
        figure.className = "article-image";

        figure.innerHTML = `
            <img src="${img.src}" alt="${img.alt}">
            <figcaption>${img.caption || ""}</figcaption>
        `;

        list.appendChild(figure);
    });

    renderImagePagination(page);
}

function renderImagePagination(currentPage) {
    const pagination = document.getElementById("image-pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = (i === currentPage) ? "active" : "";
        btn.onclick = () => {
            renderImagePage(i);
            //window.scrollTo({ top: 0, behavior: "smooth" });
            document.querySelector(".content-box").scrollIntoView({ behavior: "smooth" });
        }
        pagination.appendChild(btn);
    }
}

renderImagePage(1);