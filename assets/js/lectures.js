/* =========================================================
   QIAC ACADEMY
   DAILY LECTURES PORTAL
   File: assets/js/lectures.js
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    const classFilter =
        document.getElementById("classFilter");

    const subjectFilter =
        document.getElementById("subjectFilter");

    const teacherFilter =
        document.getElementById("teacherFilter");

    const groupFilter =
        document.getElementById("groupFilter");

    const lecturesGrid =
        document.getElementById("lecturesGrid");

    const lecturesEmpty =
        document.getElementById("lecturesEmpty");

    const lectureCount =
        document.getElementById("lectureCount");

    const resetFilters =
        document.getElementById("resetFilters");


    /* =====================================================
       FILTER STATE
       ===================================================== */

    let selectedClass = "all";

    let selectedSubject = "all";

    let selectedTeacher = "all";

    let selectedGroup = "all";


    /* =====================================================
       URL COURSE FILTER
       Allows courses.html to send:

       lectures.html?course=QIAC-9-MATH
       ===================================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const courseFromURL =
        urlParams.get("course");


    /* =====================================================
       SUBJECT OPTIONS
       ===================================================== */

    function updateSubjectOptions() {

        let courses =
            QIAC_COURSES;


        if (selectedClass !== "all") {

            courses =
                courses.filter(
                    course =>
                        course.className ===
                        selectedClass
                );

        }


        if (selectedGroup !== "all") {

            courses =
                courses.filter(
                    course =>
                        course.group ===
                        selectedGroup
                );

        }


        const subjects = [
            ...new Set(
                courses.map(
                    course =>
                        course.subject
                )
            )
        ].sort();


        subjectFilter.innerHTML = `

            <option value="all">
                All Subjects
            </option>

        `;


        subjects.forEach(subject => {

            subjectFilter.innerHTML += `

                <option value="${subject}">
                    ${subject}
                </option>

            `;

        });


        if (
            subjects.includes(
                selectedSubject
            )
        ) {

            subjectFilter.value =
                selectedSubject;

        } else {

            selectedSubject = "all";

            subjectFilter.value =
                "all";

        }

    }


    /* =====================================================
       TEACHER OPTIONS
       ===================================================== */

    function updateTeacherOptions() {

        let courses =
            QIAC_COURSES;


        if (selectedClass !== "all") {

            courses =
                courses.filter(
                    course =>
                        course.className ===
                        selectedClass
                );

        }


        if (selectedSubject !== "all") {

            courses =
                courses.filter(
                    course =>
                        course.subject ===
                        selectedSubject
                );

        }


        if (selectedGroup !== "all") {

            courses =
                courses.filter(
                    course =>
                        course.group ===
                        selectedGroup
                );

        }


        const teacherIds = [
            ...new Set(
                courses.map(
                    course =>
                        course.teacherId
                )
            )
        ];


        teacherFilter.innerHTML = `

            <option value="all">
                All Teachers
            </option>

        `;


        teacherIds.forEach(id => {

            const teacher =
                QIAC_TEACHERS.find(
                    teacher =>
                        teacher.id === id
                );


            if (!teacher) return;


            teacherFilter.innerHTML += `

                <option value="${teacher.id}">
                    ${teacher.name}
                </option>

            `;

        });


        teacherFilter.value =
            selectedTeacher;

    }


    /* =====================================================
       GET FILTERED LECTURES
       ===================================================== */

    function getFilteredLectures() {

        return QIAC_LECTURES.filter(
            lecture => {


                const classMatch =
                    selectedClass === "all" ||
                    lecture.className ===
                    selectedClass;


                const subjectMatch =
                    selectedSubject === "all" ||
                    lecture.subject ===
                    selectedSubject;


                const teacherMatch =
                    selectedTeacher === "all" ||
                    lecture.teacherId ===
                    selectedTeacher;


                const groupMatch =
                    selectedGroup === "all" ||
                    lecture.group ===
                    selectedGroup;


                return (
                    classMatch &&
                    subjectMatch &&
                    teacherMatch &&
                    groupMatch
                );

            }
        );

    }


    /* =====================================================
       FORMAT DATE
       ===================================================== */

    function formatDate(dateString) {

        const date =
            new Date(
                dateString + "T00:00:00"
            );


        return date.toLocaleDateString(
            "en-US",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

    }


    /* =====================================================
       FIND TEACHER
       ===================================================== */

    function getTeacher(teacherId) {

        return QIAC_TEACHERS.find(
            teacher =>
                teacher.id === teacherId
        );

    }


    /* =====================================================
       CREATE LECTURE CARD
       ===================================================== */

    function createLectureCard(
        lecture
    ) {

        const teacher =
            getTeacher(
                lecture.teacherId
            );


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "lecture-card";


        card.innerHTML = `

            <div class="lecture-card-header">

                <span class="lecture-class">

                    ${lecture.className}

                    ${
                        lecture.group
                            ? ` • ${lecture.group}`
                            : ""
                    }

                </span>

                <span class="lecture-status">
                    ${lecture.status}
                </span>

            </div>


            <div class="lecture-number">

                LECTURE ${String(
                    lecture.lectureNumber
                ).padStart(2, "0")}

            </div>


            <h3>
                ${lecture.title}
            </h3>


            <div class="lecture-meta">

                <span>
                    ${lecture.subject}
                </span>

                <span>
                    ${lecture.chapter}
                </span>

            </div>


            <div class="lecture-teacher">

                <span class="teacher-symbol">
                    ◉
                </span>

                <span>
                    ${
                        teacher
                            ? teacher.name
                            : "Faculty"
                    }
                </span>

            </div>


            <p class="lecture-description">

                ${lecture.description}

            </p>


            <div class="lecture-date-row">

                <span>
                    📅 ${formatDate(lecture.date)}
                </span>

                <span>
                    ⏱ ${lecture.duration}
                </span>

            </div>


            <div class="lecture-actions">


                <a
                    href="${lecture.videoUrl}"
                    target="_blank"
                    rel="noopener"
                    class="lecture-action primary">

                    ▶ Watch Lecture

                </a>


                <a
                    href="${lecture.notesUrl}"
                    target="_blank"
                    rel="noopener"
                    class="lecture-action">

                    Notes

                </a>


                <a
                    href="${lecture.assignmentUrl}"
                    target="_blank"
                    rel="noopener"
                    class="lecture-action">

                    Assignment

                </a>


            </div>

        `;


        return card;

    }


    /* =====================================================
       RENDER LECTURES
       ===================================================== */

    function renderLectures() {

        const lectures =
            getFilteredLectures();


        lecturesGrid.innerHTML = "";


        if (
            lectures.length === 0
        ) {

            lecturesEmpty.classList.add(
                "show"
            );


            lectureCount.textContent =
                "No lectures found";


            return;

        }


        lecturesEmpty.classList.remove(
            "show"
        );


        lectures
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .forEach(
                lecture => {

                    lecturesGrid.appendChild(
                        createLectureCard(
                            lecture
                        )
                    );

                }
            );


        lectureCount.textContent =
            `Showing ${lectures.length} ${
                lectures.length === 1
                    ? "lecture"
                    : "lectures"
            }`;

    }


    /* =====================================================
       UPDATE FILTERS
       ===================================================== */

    function updateFilters() {

        updateSubjectOptions();

        updateTeacherOptions();

        renderLectures();

    }


    /* =====================================================
       CLASS CHANGE
       ===================================================== */

    classFilter.addEventListener(
        "change",
        () => {

            selectedClass =
                classFilter.value;

            selectedSubject =
                "all";

            selectedTeacher =
                "all";

            updateFilters();

        }
    );


    /* =====================================================
       SUBJECT CHANGE
       ===================================================== */

    subjectFilter.addEventListener(
        "change",
        () => {

            selectedSubject =
                subjectFilter.value;

            selectedTeacher =
                "all";

            updateTeacherOptions();

            renderLectures();

        }
    );


    /* =====================================================
       TEACHER CHANGE
       ===================================================== */

    teacherFilter.addEventListener(
        "change",
        () => {

            selectedTeacher =
                teacherFilter.value;

            renderLectures();

        }
    );


    /* =====================================================
       GROUP CHANGE
       ===================================================== */

    groupFilter.addEventListener(
        "change",
        () => {

            selectedGroup =
                groupFilter.value;

            selectedSubject =
                "all";

            selectedTeacher =
                "all";

            updateFilters();

        }
    );


    /* =====================================================
       RESET
       ===================================================== */

    resetFilters.addEventListener(
        "click",
        () => {

            selectedClass = "all";

            selectedSubject = "all";

            selectedTeacher = "all";

            selectedGroup = "all";


            classFilter.value = "all";

            subjectFilter.value = "all";

            teacherFilter.value = "all";

            groupFilter.value = "all";


            updateFilters();

        }
    );


    /* =====================================================
       INITIAL LOAD
       ===================================================== */

    updateFilters();


    /* =====================================================
       COURSE ID FROM COURSES PAGE
       ===================================================== */

    if (courseFromURL) {

        const course =
            QIAC_COURSES.find(
                item =>
                    item.id ===
                    courseFromURL
            );


        if (course) {

            selectedClass =
                course.className;

            selectedSubject =
                course.subject;

            selectedTeacher =
                course.teacherId;

            selectedGroup =
                course.group || "all";


            classFilter.value =
                selectedClass;

            groupFilter.value =
                selectedGroup;


            updateFilters();


            subjectFilter.value =
                selectedSubject;

            teacherFilter.value =
                selectedTeacher;


            renderLectures();

        }

    }

});
