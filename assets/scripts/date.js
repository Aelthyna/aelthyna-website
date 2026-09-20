const lastUpdated = "September 20, 2026";

document.getElementById("footer-updated").textContent =
    `Last updated: ${lastUpdated}`;

const year = new Date().getFullYear();
document.getElementById("footer-date").textContent = `© ${year} A Moment's Thought`;