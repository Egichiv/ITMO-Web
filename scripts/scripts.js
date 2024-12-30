(function () {
    window.addEventListener("load", () => {
        const loadTime = (performance.now() / 1000).toFixed(3);
        const footer = document.querySelector("footer");
        if (footer) {
            footer.innerHTML = `Page load time is <strong>${loadTime}</strong> seconds.`;
        }
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.color = "orange";
        });

        item.addEventListener("mouseleave", () => {
            item.style.color = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
        if (item.getAttribute("href") === currentPath.split("/").pop()) {
            item.classList.add("active");
        }
    });
});