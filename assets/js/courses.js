/* =========================================================
   QIAC ACADEMY
   COURSES PAGE JAVASCRIPT
   File: assets/js/courses.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const coursesGrid =
        document.getElementById("coursesGrid");

    const coursesEmpty =
        document.getElementById("coursesEmpty");

    const courseCount =
        document.getElementById("courseCount");

    const subjectFilters =
        document.getElementById("subjectFilters");

    const fscGroupWrapper =
        document.getElementById("fscGroupWrapper");


    let selectedClass = "all";
    let selectedGroup = "all";
    let selectedSubject = "all";


    /* =====================================================
       GET SUBJECTS
       ===================================================== */

    function getSubjects() {

        let filteredCourses =
            QIAC_COURSES.filter(course => {

                if (
                    selectedClass !== "all" &&
                    course.className !== selectedClass
                ) {
                    return false;
                }

                if (
                    selectedGroup !== "all" &&
                    course.group !== selectedGroup
                ) {
                    return false;
                }

                return true;

            });


        const subjects = [
            ...new Set(
                filteredCourses.map(course => course.subject)
            )
        ];

        return subjects.sort();

    }


    /* =====================================================
       RENDER SUBJECT FILTERS
       ===================================================== */

    function renderSubjectFilters() {

        const subjects = getSubjects();

        subjectFilters.innerHTML = "";


        const allButton =
            document.createElement("button");

        allButton.className =
            `subject-filter ${
                selectedSubject === "all"
                    ? "active"
                    : ""
            }`;

        allButton.dataset.subject = "all";

        allButton.textContent =
            "All Subjects";

        subjectFilters.appendChild(allButton);


        subjects.forEach(subject => {

            const button =
                document.createElement("button");

            button.className =
                `subject-filter ${
                    selectedSubject === subject
                        ? "active"
                        : ""
                }`;

            button.dataset.subject =
                subject;

            button.textContent =
                subject;

            subjectFilters.appendChild(button);

        });


        subjectFilters
            .querySelectorAll(".subject-filter")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        selectedSubject =
                            button.dataset.subject;

                        renderSubjectFilters();

                        renderCourses();

                    }
                );

            });

    }


    /* =====================================================
       FILTER COURSES
       ===================================================== */

    function getFilteredCourses() {

        return QIAC_COURSES.filter(course => {

            const classMatch =
                selectedClass === "all" ||
                course.className === selectedClass;


            const groupMatch =
                selectedGroup === "all" ||
                course.group === selectedGroup;


            const subjectMatch =
                selectedSubject === "all" ||
                course.subject === selectedSubject;


            return (
                classMatch &&
                groupMatch &&
                subjectMatch
            );

        });

    }


    /* =====================================================
       COURSE CARD
       ===================================================== */

    function createCourseCard(course) {

        const card =
            document.createElement("article");

        card.className =
            "course-card";


        card.innerHTML = `

            <div class="course-card-top">

                <span class="course-level">
                    ${course.level}
                </span>

                <span class="course-status">
                    ${course.status}
                </span>

            </div>


            <div class="course-icon">
                ${getSubjectIcon(course.subject)}
            </div>


            <div class="course-class">
                ${course.className}
                ${course.className === "F.Sc"
                    ? ` • ${course.group}`
                    : ""}
            </div>


            <h3>
                ${course.subject}
            </h3>


            <div class="course-teacher">

                <span class="teacher-icon">
                    ◉
                </span>

                <span>
                    ${course.teacherName}
                </span>

            </div>


            <div class="course-id">
                COURSE ID:
                <strong>
                    ${course.id}
                </strong>
            </div>


            <div class="course-features">

                <span>Lectures</span>

                <span>Notes</span>

                <span>Assignments</span>

                <span>Tests</span>

            </div>


            <a
                href="lectures.html?course=${encodeURIComponent(course.id)}"
                class="course-link">

                View Course

                <span>→</span>

            </a>

        `;


        return card;

    }


    /* =====================================================
       SUBJECT ICONS
       ===================================================== */

    function getSubjectIcon(subject) {

        const icons = {

            "Mathematics": "∑",

            "Physics": "Φ",

            "Chemistry": "⚗",

            "Biology": "⌬",

            "English": "A",

            "Urdu": "ا",

            "Computer Science": "</>",

            "Islamiat": "☪",

            "Pakistan Studies": "★",

            "General / Additional Subject": "◆"

        };


        return icons[subject] || "◆";

    }


    /* =====================================================
       RENDER COURSES
       ===================================================== */

    function renderCourses() {

        const courses =
            getFilteredCourses();


        coursesGrid.innerHTML = "";


        if (courses.length === 0) {

            coursesEmpty.classList.add("show");

            courseCount.textContent =
                "No programs found";

            return;

        }


        coursesEmpty.classList.remove("show");


        courses.forEach(course => {

            coursesGrid.appendChild(
                createCourseCard(course)
            );

        });


        courseCount.textContent =
            `Showing ${courses.length} ${
                courses.length === 1
                    ? "program"
                    : "programs"
            }`;

    }


    /* =====================================================
       CLASS FILTER
       ===================================================== */

    document
        .querySelectorAll(".class-filter")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".class-filter"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );


                    button.classList.add(
                        "active"
                    );


                    selectedClass =
                        button.dataset.class;


                    selectedGroup = "all";

                    selectedSubject = "all";


                    updateFscGroupVisibility();

                    renderSubjectFilters();

                    renderCourses();

                }
            );

        });


    /* =====================================================
       F.SC GROUP FILTER
       ===================================================== */

    document
        .querySelectorAll(".group-filter")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".group-filter"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );


                    button.classList.add(
                        "active"
                    );


                    selectedGroup =
                        button.dataset.group;


                    selectedSubject =
                        "all";


                    renderSubjectFilters();

                    renderCourses();

                }
            );

        });


    /* =====================================================
       F.SC GROUP VISIBILITY
       ===================================================== */

    function updateFscGroupVisibility() {

        if (selectedClass === "F.Sc") {

            fscGroupWrapper.classList.add(
                "visible"
            );

        } else {

            fscGroupWrapper.classList.remove(
                "visible"
            );

        }

    }


    /* =====================================================
       INITIALIZE
       ===================================================== */

    updateFscGroupVisibility();

    renderSubjectFilters();

    renderCourses();

});
