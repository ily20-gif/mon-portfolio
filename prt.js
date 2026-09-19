const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");


/* ================= NAVIGATION ================= */

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetPage = button.dataset.page;

        // Remove active from buttons
        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Hide all pages
        pages.forEach(page => {
            page.classList.remove("active");
        });


        // Show selected page
        document
            .querySelector(`#${targetPage}`)
            .classList.add("active");

    });

});


/* ================= SIDEBAR MOBILE ================= */

sidebarToggle.addEventListener("click", () => {

    sidebar.classList.toggle("open");


    const icon = sidebarToggle.querySelector("i");

    if (sidebar.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});