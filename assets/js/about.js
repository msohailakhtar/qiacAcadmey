/* =========================================================
   QIAC ACADEMY
   ABOUT PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeAboutAnimations();

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeAboutAnimations() {

    const elements =
        document.querySelectorAll(
            ".purpose-card, " +
            ".value-card, " +
            ".timeline-item, " +
            ".why-item"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add(
                "reveal-visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        element.classList.add(
            "reveal"
        );

        observer.observe(element);

    });

}
