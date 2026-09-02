/* =========================================================
   QIAC ACADEMY
   Home Page JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const navLinks =
        document.getElementById("navLinks");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });


        // Close menu after clicking a navigation link

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

            });

        });

    }

});
