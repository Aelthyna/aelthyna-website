/*const now = new Date();
const formatted = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
document.getElementById("header-date").textContent = `Last updated: ${formatted}`;*/

if (typeof lastUpdated !== "undefined") {
    document.getElementById("header-date").textContent =
        `Last updated: ${lastUpdated}`;
}

const year = new Date().getFullYear();
document.getElementById("footer-date").textContent = `© ${year} Marble Halls`;