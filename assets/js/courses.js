/* =========================================================
   QIAC ACADEMY
   COURSES PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCoursePage();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeCoursePage() {

    const grid =
        document.getElementById(
            "courseGrid"
        );

    const empty =
        document.getElementById(
            "courseEmpty"
        );


    if (!grid) {
        return;
    }


    renderCourses(
        "all",
        grid,
        empty
    );


    initializeFilters(
        grid,
        empty
    );

}


/* =========================================================
   RENDER COURSES
========================================================= */

function renderCourses(
    filter,
    grid,
    empty
) {

    let courses =
        QIAC_COURSES;


    if (filter !== "all") {

        courses =
            QIAC_COURSES.filter(
                course =>
                    course.program === filter
            );

    }


    grid.innerHTML = "";


    if (!courses.length) {

        empty.classList.add(
            "show"
        );

        return;

    }


    empty.classList.remove(
        "show"
    );


    courses.forEach(
        (course, index) => {

            const card =
                createCourseCard(
                    course
                );


            card.style.animationDelay =
                `${index * 70}ms`;


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   COURSE CARD
========================================================= */

function createCourseCard(course) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "course-card";


    article.dataset.courseId =
        course.id;


    article.innerHTML = `

        <div class="course-card-top">

            <span class="course-program">
                ${course.program}
            </span>

            <span class="course-icon">
                ${course.icon}
            </span>

        </div>


        <div class="course-card-body">

            <span class="course-category">
                ${course.category}
            </span>

            <h3>
                ${course.subject}
            </h3>

            <p>
                ${course.description}
            </p>


            <div class="course-meta">

                <div>

                    <span>
                        LEVEL
                    </span>

                    <strong>
                        ${course.level}
                    </strong>

                </div>


                <div>

                    <span>
                        DURATION
                    </span>

                    <strong>
                        ${course.duration}
                    </strong>

                </div>

            </div>


            <div class="course-features">

                ${course.features
                    .map(
                        feature =>
                            `<span>✓ ${feature}</span>`
                    )
                    .join("")
                }

            </div>

        </div>


        <div class="course-card-footer">

            <span>
                ${course.id}
            </span>

            <a
                href="contact.html"
                class="course-link">

                Enquire →

            </a>

        </div>

    `;


    return article;

}


/* =========================================================
   FILTERS
========================================================= */

function initializeFilters(
    grid,
    empty
) {

    const buttons =
        document.querySelectorAll(
            ".program-filter-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                renderCourses(
                    filter,
                    grid,
                    empty
                );

            }
        );

    });

}
