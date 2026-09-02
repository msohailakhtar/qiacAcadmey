/* =========================================================
   QIAC ACADEMY
   REUSABLE COMPONENT SYSTEM
   Version: 2.1
   ---------------------------------------------------------
   Handles:
   • Dynamic Navbar
   • Dynamic Footer
   • Mobile Navigation
   • Navigation Path Normalization
   • Active Page Highlighting
   • Current Year
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
     *
     * Root:
     * components/navbar.html
     *
     * Pages:
     * ../components/navbar.html
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


    /*
     * IMPORTANT
     *
     * Navbar must be loaded before:
     *
     * normalizeNavigationPaths()
     * initializeNavbar()
     * setActivePage()
     */

    normalizeNavigationPaths();

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


    /*
     * If the container does not exist,
     * simply stop without breaking the page.
     */

    if (!container) {

        console.warn(
            `QIAC: Container "${elementId}" not found.`
        );

        return;

    }


    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status} - ${response.statusText}`
            );

        }


        const html =
            await response.text();


        container.innerHTML =
            html;


    } catch (error) {

        console.error(
            `QIAC Component Error: Unable to load "${filePath}"`,
            error
        );

    }

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavbar() {

    const menuButton =
        document.getElementById(
            "mobileMenuBtn"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    const header =
        document.querySelector(
            ".site-header"
        );


    /* -----------------------------------------------------
       SAFETY CHECK
    ----------------------------------------------------- */

    if (!menuButton || !navLinks) {

        console.warn(
            "QIAC: Mobile navigation elements not found."
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuButton && navLinks) {

        /*
         * Mobile menu button
         */

        menuButton.addEventListener(
            "click",
            function (event) {

                /*
                 * Prevent unwanted button behaviour
                 */

                event.preventDefault();

                event.stopPropagation();


                /*
                 * Toggle menu
                 */

                const isOpen =
                    navLinks.classList.toggle(
                        "show"
                    );


                /*
                 * Animate hamburger button
                 */

                menuButton.classList.toggle(
                    "open",
                    isOpen
                );


                /*
                 * Accessibility
                 */

                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                menuButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );

            }
        );


        /* -------------------------------------------------
           CLOSE MENU AFTER CLICKING A LINK
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


                        menuButton.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                    }
                );

            });


        /* -------------------------------------------------
           CLOSE MENU WHEN CLICKING OUTSIDE
        ------------------------------------------------- */

        document.addEventListener(
            "click",
            event => {

                if (
                    !navLinks.contains(event.target) &&
                    !menuButton.contains(event.target)
                ) {

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


                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }

            }
        );


        /* -------------------------------------------------
           CLOSE MENU WITH ESCAPE KEY
        ------------------------------------------------- */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

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


                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }

            }
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    if (header) {

        const handleScroll = () => {

            if (
                window.scrollY > 20
            ) {

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
         * Run once on page load
         */

        handleScroll();


        /*
         * Run while scrolling
         */

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
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
            link.getAttribute(
                "href"
            );


        if (!href) {

            return;

        }


        /*
         * Convert relative URL into
         * an absolute pathname.
         */

        const linkPath =
            new URL(
                href,
                window.location.href
            ).pathname;


        /*
         * Remove previous active state
         */

        link.classList.remove(
            "active"
        );


        /*
         * Normal page matching
         */

        if (
            linkPath === currentPath
        ) {

            link.classList.add(
                "active"
            );

            return;

        }


        /*
         * Handle root index.html
         */

        const isCurrentHome =
            currentPath === "/" ||
            currentPath.endsWith(
                "/index.html"
            );


        const isHomeLink =
            linkPath === "/" ||
            linkPath.endsWith(
                "/index.html"
            );


        if (
            isCurrentHome &&
            isHomeLink
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


    if (!yearElement) {

        return;

    }


    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NORMALIZE NAVIGATION PATHS
========================================================= */

/*
 * The same navbar.html is used on:
 *
 * index.html
 *
 * pages/about.html
 * pages/courses.html
 * pages/lectures.html
 * pages/assessments.html
 * pages/attendance.html
 * pages/contact.html
 *
 *
 * Therefore navigation paths need to be
 * adjusted depending on the current directory.
 */

function normalizeNavigationPaths() {

    const isInsidePages =
        window.location.pathname.includes(
            "/pages/"
        );


    const links =
        document.querySelectorAll(
            ".nav-links a"
        );


    links.forEach(link => {

        const href =
            link.getAttribute(
                "href"
            );


        if (!href) {

            return;

        }


        /* =================================================
           CURRENT PAGE IS INSIDE /pages/
        ================================================= */

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
             * Root-to-pages links
             *
             * pages/about.html
             * ↓
             * about.html
             *
             * pages/courses.html
             * ↓
             * courses.html
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


        /* =================================================
           CURRENT PAGE IS ROOT
        ================================================= */

        else {

            /*
             * Root pages already correctly use:
             *
             * pages/about.html
             * pages/courses.html
             * etc.
             *
             * Therefore no changes are required.
             */

        }

    });

}


/* =========================================================
   MOBILE MENU HELPER
========================================================= */

/*
 * Can be used by other scripts if required.
 */

function closeMobileMenu() {

    const menuButton =
        document.getElementById(
            "mobileMenuBtn"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (navLinks) {

        navLinks.classList.remove(
            "show"
        );

    }


    if (menuButton) {

        menuButton.classList.remove(
            "open"
        );


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

}


/* =========================================================
   QIAC COMPONENT SYSTEM END
========================================================= */
