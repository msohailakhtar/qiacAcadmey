/* =========================================================
   QIAC ACADEMY
   REUSABLE COMPONENT LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbar-container",
        "/components/navbar.html"
    );

    await loadComponent(
        "footer-container",
        "/components/footer.html"
    );


    initializeNavbar();

    setCurrentYear();

    setActivePage();

});


/* =========================================================
   LOAD COMPONENT
========================================================= */

async function loadComponent(elementId, filePath) {

    const container =
        document.getElementById(elementId);

    if (!container) {
        return;
    }


    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                `Failed to load ${filePath}`
            );

        }


        const html =
            await response.text();


        container.innerHTML = html;


    } catch (error) {

        console.error(
            "QIAC Component Error:",
            error
        );

    }

}


/* =========================================================
   NAVBAR
========================================================= */

function initializeNavbar() {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const navLinks =
        document.getElementById("navLinks");

    const header =
        document.querySelector(".site-header");


    /* Mobile Menu */

    if (menuButton && navLinks) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle("show");


                menuButton.classList.toggle(
                    "open",
                    isOpen
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* Close after navigation */

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks
                            .classList
                            .remove("show");


                        menuButton
                            .classList
                            .remove("open");


                        menuButton
                            .setAttribute(
                                "aria-expanded",
                                "false"
                            );

                    }
                );

            });

    }


    /* Header shadow on scroll */

    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 20) {

                    header.classList
                        .add("scrolled");

                } else {

                    header.classList
                        .remove("scrolled");

                }

            }
        );

    }

}


/* =========================================================
   ACTIVE PAGE
========================================================= */

function setActivePage() {

    const currentPath =
        window.location.pathname;


    const links =
        document.querySelectorAll(
            ".nav-links a[data-page]"
        );


    links.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) return;


        const linkPath =
            new URL(
                href,
                window.location.origin
            ).pathname;


        if (
            linkPath === currentPath ||
            (
                currentPath === "/" &&
                linkPath === "/index.html"
            )
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function setCurrentYear() {

    const year =
        document.getElementById("currentYear");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}
