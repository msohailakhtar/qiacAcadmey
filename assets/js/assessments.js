/* =========================================================
   QIAC ACADEMY
   STUDENT ASSESSMENT & PROGRESS
   File: assets/js/assessments.js
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    const studentSelect =
        document.getElementById(
            "studentSelect"
        );

    const dashboard =
        document.getElementById(
            "dashboard"
        );

    const dashboardEmpty =
        document.getElementById(
            "dashboardEmpty"
        );


    const studentName =
        document.getElementById(
            "studentName"
        );

    const studentInfo =
        document.getElementById(
            "studentInfo"
        );

    const overallPercentage =
        document.getElementById(
            "overallPercentage"
        );

    const assessmentTotal =
        document.getElementById(
            "assessmentTotal"
        );

    const testTotal =
        document.getElementById(
            "testTotal"
        );

    const bestScore =
        document.getElementById(
            "bestScore"
        );

    const coursePerformance =
        document.getElementById(
            "coursePerformance"
        );

    const assessmentTableBody =
        document.getElementById(
            "assessmentTableBody"
        );

    const feedbackList =
        document.getElementById(
            "feedbackList"
        );


    /* =====================================================
       POPULATE STUDENTS
       ===================================================== */

    QIAC_STUDENTS.forEach(student => {

        const option =
            document.createElement(
                "option"
            );

        option.value =
            student.id;

        option.textContent =
            `${student.rollNumber} — ${student.name}`;

        studentSelect.appendChild(
            option
        );

    });


    /* =====================================================
       GET COURSE
       ===================================================== */

    function getCourse(courseId) {

        return QIAC_COURSES.find(
            course =>
                course.id === courseId
        );

    }


    /* =====================================================
       GET TEACHER
       ===================================================== */

    function getTeacher(teacherId) {

        return QIAC_TEACHERS.find(
            teacher =>
                teacher.id === teacherId
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
       CALCULATE OVERALL
       ===================================================== */

    function calculateOverall(
        assessments
    ) {

        if (!assessments.length) {
            return 0;
        }


        const totalMarks =
            assessments.reduce(
                (sum, item) =>
                    sum +
                    item.totalMarks,
                0
            );


        const obtainedMarks =
            assessments.reduce(
                (sum, item) =>
                    sum +
                    item.obtainedMarks,
                0
            );


        if (totalMarks === 0) {
            return 0;
        }


        return (
            obtainedMarks /
            totalMarks *
            100
        );

    }


    /* =====================================================
       COURSE PERFORMANCE
       ===================================================== */

    function renderCoursePerformance(
        assessments
    ) {

        coursePerformance.innerHTML = "";


        const courseMap = {};


        assessments.forEach(
            assessment => {

                if (
                    !courseMap[
                        assessment.courseId
                    ]
                ) {

                    courseMap[
                        assessment.courseId
                    ] = [];

                }


                courseMap[
                    assessment.courseId
                ].push(assessment);

            }
        );


        Object.keys(courseMap)
            .forEach(courseId => {


                const course =
                    getCourse(courseId);


                if (!course) return;


                const records =
                    courseMap[courseId];


                const percentage =
                    calculateOverall(
                        records
                    );


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "course-performance-card";


                card.innerHTML = `

                    <div class="course-performance-top">

                        <div>

                            <span>
                                ${course.className}
                            </span>

                            <h4>
                                ${course.subject}
                            </h4>

                        </div>

                        <strong>
                            ${percentage.toFixed(1)}%
                        </strong>

                    </div>


                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="width:${percentage}%">
                        </div>

                    </div>


                    <div class="course-performance-meta">

                        <span>
                            ${course.teacherName}
                        </span>

                        <span>
                            ${records.length}
                            ${
                                records.length === 1
                                    ? "assessment"
                                    : "assessments"
                            }
                        </span>

                    </div>

                `;


                coursePerformance.appendChild(
                    card
                );

            });

    }


    /* =====================================================
       ASSESSMENT TABLE
       ===================================================== */

    function renderAssessmentTable(
        assessments
    ) {

        assessmentTableBody.innerHTML =
            "";


        assessments
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .forEach(
                assessment => {


                    const course =
                        getCourse(
                            assessment.courseId
                        );


                    const row =
                        document.createElement(
                            "tr"
                        );


                    row.innerHTML = `

                        <td>

                            <strong>
                                ${assessment.title}
                            </strong>

                            <small>
                                ${assessment.type}
                            </small>

                        </td>


                        <td>
                            ${
                                course
                                    ? course.subject
                                    : "—"
                            }
                        </td>


                        <td>
                            ${formatDate(
                                assessment.date
                            )}
                        </td>


                        <td>
                            ${
                                assessment.obtainedMarks
                            }
                            /
                            ${
                                assessment.totalMarks
                            }
                        </td>


                        <td>
                            ${
                                assessment.percentage
                            }%
                        </td>


                        <td>

                            <span class="grade-badge">
                                ${
                                    assessment.grade
                                }
                            </span>

                        </td>


                        <td>

                            <span class="checked-badge">
                                ${
                                    assessment.status
                                }
                            </span>

                        </td>

                    `;


                    assessmentTableBody
                        .appendChild(row);

                }
            );

    }


    /* =====================================================
       FEEDBACK
       ===================================================== */

    function renderFeedback(
        assessments
    ) {

        feedbackList.innerHTML = "";


        assessments
            .filter(
                assessment =>
                    assessment.feedback
            )
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .forEach(
                assessment => {


                    const course =
                        getCourse(
                            assessment.courseId
                        );


                    const teacher =
                        getTeacher(
                            assessment.teacherId
                        );


                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "feedback-item";


                    item.innerHTML = `

                        <div class="feedback-mark">
                            “
                        </div>

                        <div>

                            <p>
                                ${assessment.feedback}
                            </p>

                            <div class="feedback-meta">

                                <strong>
                                    ${
                                        teacher
                                            ? teacher.name
                                            : "Teacher"
                                    }
                                </strong>

                                <span>
                                    ${
                                        course
                                            ? course.subject
                                            : ""
                                    }
                                </span>

                            </div>

                        </div>

                    `;


                    feedbackList.appendChild(
                        item
                    );

                }
            );

    }


    /* =====================================================
       LOAD DASHBOARD
       ===================================================== */

    function loadDashboard(
        studentId
    ) {

        const student =
            QIAC_STUDENTS.find(
                item =>
                    item.id ===
                    studentId
            );


        if (!student) {

            dashboard.classList.remove(
                "show"
            );

            dashboardEmpty.classList.add(
                "show"
            );

            return;

        }


        const assessments =
            QIAC_ASSESSMENTS.filter(
                item =>
                    item.studentId ===
                    studentId
            );


        studentName.textContent =
            student.name;


        studentInfo.textContent =
            `${student.rollNumber} • ${
                student.className
            } • Section ${
                student.section
            }${
                student.group
                    ? ` • ${student.group}`
                    : ""
            }`;


        const overall =
            calculateOverall(
                assessments
            );


        overallPercentage.textContent =
            `${overall.toFixed(1)}%`;


        assessmentTotal.textContent =
            assessments.length;


        testTotal.textContent =
            assessments.filter(
                item =>
                    item.type === "Test"
            ).length;


        const best =
            assessments.length
                ? Math.max(
                    ...assessments.map(
                        item =>
                            item.percentage
                    )
                )
                : 0;


        bestScore.textContent =
            `${best}%`;


        renderCoursePerformance(
            assessments
        );


        renderAssessmentTable(
            assessments
        );


        renderFeedback(
            assessments
        );


        dashboardEmpty.classList.remove(
            "show"
        );

        dashboard.classList.add(
            "show"
        );

    }


    /* =====================================================
       STUDENT CHANGE
       ===================================================== */

    studentSelect.addEventListener(
        "change",
        () => {

            loadDashboard(
                studentSelect.value
            );

        }
    );


});
