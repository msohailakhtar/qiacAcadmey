```javascript
/* =========================================================
   QIAC ACADEMY
   REUSABLE COMPONENT SYSTEM
   Version: 2.1

   Handles:
   - Navbar
   - Footer
   - Mobile navigation
   - Scroll effect
   - Active page
   - Root/pages navigation paths
========================================================= */


/* =========================================================
   INITIALIZE COMPONENT SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

    /*
     * Determine whether the current page is inside /pages/
     */

    const isInsidePages =
        window.location.pathname.includes("/pages/");


    /*
     * Component directory
     */

    const componentPath =
        isInsidePages
            ? "../components/"
            : "components/";


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
       NORMALIZE NAVIGATION PATHS
       
       IMPORTANT:
       This MUST happen after navbar.html is loaded.
    ----------------------------------------------------- */

    normalizeNavigationPaths();


    /* -----------------------------------------------------
       INITIALIZE NAVBAR
    ----------------------------------------------------- */

    initializeNavbar();


    /* -----------------------------------------------------
       CURRENT YEAR
    ----------------------------------------------------- */

    setCurrentYear();


    /* -----------------------------------------------------
       ACTIVE PAGE
    ----------------------------------------------------- */

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


        container.innerHTML =
            html;


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
                    navLinks.classList.toggle(
                        "show"
                    );


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


        /* -------------------------------------------------
           CLOSE MOBILE MENU AFTER NAVIGATION
        ------------------------------------------------- */

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


        /*
         * Run once immediately
         */

        handleScroll();


        /*
         * Then monitor scrolling
         */

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


        /*
         * Convert the link into an absolute URL
         * so comparison works from both root and /pages/
         */

        const linkPath =
            new URL(
                href,
                window.location.href
            ).pathname;


        /*
         * Remove active class first
         * in case this function is called again.
         */

        link.classList.remove(
            "active"
        );


        /*
         * Exact page match
         */

        if (
            linkPath === currentPath
        ) {

            link.classList.add(
                "active"
            );

        }


        /*
         * Root index handling
         */

        else if (
            (
                currentPath === "/" ||
                currentPath.endsWith("/")
            )
            &&
            (
                linkPath === "/index.html" ||
                linkPath === "/"
            )
        ) {

            link.classList.add(
                "active"
            );

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


/* =========================================================
   NORMALIZE NAVIGATION PATHS
========================================================= */

function normalizeNavigationPaths() {

    /*
     * Check whether current page is inside /pages/
     */

    const isInsidePages =
        window.location.pathname.includes(
            "/pages/"
        );


    /*
     * Get all navbar links
     */

    const links =
        document.querySelectorAll(
            ".nav-links a"
        );


    links.forEach(link => {

        const href =
            link.getAttribute("href");


        if (!href) {
            return;
        }


        /*
         * -------------------------------------------------
         * PAGE INSIDE /pages/
         * -------------------------------------------------
         */

        if (isInsidePages) {


            /*
             * Home
             *
             * index.html
             * ↓
             * ../index.html
             */

            if (
                href === "index.html"
            ) {

                link.setAttribute(
                    "href",
                    "../index.html"
                );

            }


            /*
             * Other pages
             *
             * pages/about.html
             * ↓
             * ../about.html
             */

            else if (
                href.startsWith(
                    "pages/"
                )
            ) {

                link.setAttribute(
                    "href",
                    href.substring(
                        "pages/".length
                    )
                );

            }

        }

    });

}
```
