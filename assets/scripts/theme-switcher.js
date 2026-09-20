const themes = ["theme-cyberpunk", "theme-pastel-pink", "theme-pastel-green"];

const homeThemeContent = {
    "theme-cyberpunk": {
        src: "assets/images/home/reflect.jpg",
        haiku: ""
    },
    "theme-pastel-pink": {
        src: "assets/images/home/pensive.jpg",
        haiku: ""
    },
    "theme-pastel-green": {
        src: "assets/images/home/beyond.jpg",
        haiku: ""
    }
};

const aboutThemeContent = {
    "theme-cyberpunk": {
        src: "assets/images/about/oblivion.jpg",
        haiku: "Otherworldly echoes,\nImposing pillars of light,\nThe city beckons."
    },
    "theme-pastel-pink": {
        src: "assets/images/about/quiet.jpg",
        haiku: "Under a dusk red-orange,\nFrom time's unswerving passage,\nA moment stolen."
    },
    "theme-pastel-green": {
        src: "assets/images/about/wait.jpg",
        haiku: "As the world grows quiet,\nA faint sensation's whisper,\nDrifts into longing."
    }
};

let currentTheme = parseInt(localStorage.getItem("currentTheme")) || 0;

function updateThemeContent(themeClass) {
    // HOME PAGE
    const homeImg = document.getElementById("home-theme-image");
    const homeCap = document.getElementById("home-theme-haiku");

    if (homeImg && homeCap) {
        const content = homeThemeContent[themeClass];
        if (content) {
            homeImg.src = content.src;
            homeCap.innerHTML = content.haiku.replace(/\n/g, "<br>");
        }
    }

    // ABOUT PAGE
    const aboutImg = document.getElementById("about-theme-image");
    const aboutCap = document.getElementById("about-theme-haiku");

    if (aboutImg && aboutCap) {
        const content = aboutThemeContent[themeClass];
        if (content) {
            aboutImg.src = content.src;
            aboutCap.innerHTML = content.haiku.replace(/\n/g, "<br>");
        }
    }
}

function applyTheme() {
    document.documentElement.classList.remove(...themes);

    const themeClass = themes[currentTheme];
    document.documentElement.classList.add(themeClass);

    localStorage.setItem("currentTheme", currentTheme);

    updateThemeContent(themeClass);
}

/* function applyTheme() {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(themes[currentTheme]);
    localStorage.setItem("currentTheme", currentTheme);
} */

document.getElementById("theme-switcher").onclick = () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme();
};

applyTheme();