/* =========================================================
   QIAC ACADEMY
   REUSABLE COMPONENT SYSTEM
   Version: 2.0
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    /*
     * Determine whether the current page is inside /pages/
     */

    const isInsidePages =
        window.location.pathname.includes("/pages/");


    const componentPath =
        isInsidePages ? "../components/" : "components/";


    /* -----------------------------------------------------
       LOAD NAVBAR
    ----------------------------------------------------- */

    await loadComponent(
        "navbar-container",
        `${componentPath}navbar.html`
    );


    /* -----------------------------------------------------
       LOAD FOOTER
    ----------------------------------------------------- */

    await loadComponent(
        "footer-container",
        `${componentPath}footer.html`
    );


    /* -----------------------------------------------------
       INITIALIZE
    ----------------------------------------------------- */

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
                `Unable to load component: ${filePath}`
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
   NAVIGATION
========================================================= */

function initializeNavbar() {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const navLinks =
        document.getElementById("navLinks");

    const header =
        document.querySelector(".site-header");


    /* -----------------------------------------------------
       MOBILE MENU
    ----------------------------------------------------- */

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
                    String(isOpen)
                );

            }
        );


        /* Close menu after navigation */

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "show"
                        );


                        menuButton.classList.remove(
                            "open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* -----------------------------------------------------
       SCROLL EFFECT
    ----------------------------------------------------- */

    if (header) {

        const handleScroll = () => {

            if (window.scrollY > 20) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        };


        handleScroll();


        window.addEventListener(
            "scroll",
            handleScroll
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


        if (!href) {
            return;
        }


        const linkPath =
            new URL(
                href,
                window.location.origin
            ).pathname;


        if (
            linkPath === currentPath ||
            (
                currentPath.endsWith("/") &&
                linkPath.endsWith("/index.html")
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

    const yearElement =
        document.getElementById(
            "currentYear"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}
