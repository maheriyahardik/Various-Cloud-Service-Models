document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle menu visibility
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
    function showContent(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
    
    // Close menu when a link is clicked (for better UX) and show the corresponding section
    navItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page jump
            const sectionId = this.getAttribute("href").substring(1); // Get section ID from href
            showContent(sectionId);
            navLinks.classList.remove("active"); // Close menu after click
        });
    });

    // Show default section when the page loads
    showContent("iaas");
    
});

// Function to show a specific content section
function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll(".content").forEach(section => {
        section.style.display = "none";
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}
