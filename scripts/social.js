const socialLinks = document.querySelectorAll(".social-icons a");

socialLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.05)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});