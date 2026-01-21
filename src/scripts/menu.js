document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("open");
        document.body.style.overflow = "";
    });
});
