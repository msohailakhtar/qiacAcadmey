/* =========================================================
   QIAC ACADEMY
   STUDENT ATTENDANCE PORTAL
   File: assets/js/attendance.js

   Step 6.1 — Part 4

   Connects:
   Students → Courses → Teachers → Attendance

   Existing architecture is NOT changed.
   ========================================================= */


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let selectedStudentId = "";



/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const studentSelect =
    document.getElementById("studentSelect");

const attendanceEmptyState =
    document.getElementById("attendanceEmptyState");

const attendanceDashboard =
    document.getElementById("attendanceDashboard");

const studentName =
    document.getElementById("studentName");

const studentRoll =
    document.getElementById("studentRoll");

const studentClass =
    document.getElementById("studentClass");

const studentSection =
    document.getElementById("studentSection");

const studentGroup =
    document.getElementById("studentGroup");

const studentSectionWrapper =
    document.getElementById("studentSectionWrapper");

const studentGroupWrapper =
    document.getElementById("studentGroupWrapper");

const studentStatus =
    document.getElementById("studentStatus");

const overallAttendance =
    document.getElementById("overallAttendance");

const presentCount =
    document.getElementById("presentCount");

const absentCount =
    document.getElementById("absentCount");

const lateCount =
    document.getElementById("lateCount");

const summaryAttendance =
    document.getElementById("summaryAttendance");

const courseAttendanceGrid =
    document.getElementById("courseAttendanceGrid");

const attendanceTableBody =
    document.getElementById("attendanceTableBody");



/* =========================================================
   INITIALIZE ATTENDANCE PORTAL
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeAttendance
);


function initializeAttendance() {

    populateStudentDropdown();

    if (studentSelect) {

        studentSelect.addEventListener(
            "change",
            handleStudentSelection
        );

    }

}



/* =========================================================
   POPULATE STUDENT DROPDOWN
   ========================================================= */

function populateStudentDropdown() {

    if (!studentSelect) {
        return;
    }

    studentSelect.innerHTML = `
        <option value="">
            Select a student
        </option>
    `;


    if (
        typeof QIAC_STUDENTS === "undefined" ||
        !Array.isArray(QIAC_STUDENTS)
    ) {

        console.error(
            "QIAC_STUDENTS is not available."
        );

        return;

    }


    QIAC_STUDENTS
        .filter(student => student.status === "Active")
        .forEach(student => {

            const option =
                document.createElement("option");

            option.value = student.id;

            option.textContent =
                `${student.rollNumber} — ${student.name}`;

            studentSelect.appendChild(option);

        });

}



/* =========================================================
   HANDLE STUDENT SELECTION
   ========================================================= */

function handleStudentSelection(event) {

    selectedStudentId =
        event.target.value;


    if (!selectedStudentId) {

        showEmptyState();

        return;

    }


    const student =
        getStudentById(selectedStudentId);


    if (!student) {

        showEmptyState();

        return;

    }


    renderStudentDashboard(student);

}



/* =========================================================
   GET STUDENT
   ========================================================= */

function getStudentById(studentId) {

    if (
        typeof QIAC_STUDENTS === "undefined"
    ) {
        return null;
    }


    return QIAC_STUDENTS.find(
        student =>
            student.id === studentId
    ) || null;

}



/* =========================================================
   GET COURSE
   ========================================================= */

function getCourseById(courseId) {

    if (
        typeof QIAC_COURSES === "undefined"
    ) {
        return null;
    }


    return QIAC_COURSES.find(
        course =>
            course.id === courseId
    ) || null;

}



/* =========================================================
   GET TEACHER
   ========================================================= */

function getTeacherById(teacherId) {

    if (
        typeof QIAC_TEACHERS === "undefined"
    ) {
        return null;
    }


    return QIAC_TEACHERS.find(
        teacher =>
            teacher.id === teacherId
    ) || null;

}



/* =========================================================
   GET STUDENT ATTENDANCE
   ========================================================= */

function getStudentAttendance(studentId) {

    if (
        typeof QIAC_ATTENDANCE === "undefined" ||
        !Array.isArray(QIAC_ATTENDANCE)
    ) {

        return [];

    }


    return QIAC_ATTENDANCE.filter(
        record =>
            record.studentId === studentId
    );

}



/* =========================================================
   RENDER STUDENT DASHBOARD
   ========================================================= */

function renderStudentDashboard(student) {

    attendanceEmptyState.hidden = true;

    attendanceDashboard.hidden = false;


    renderStudentInformation(student);


    const attendanceRecords =
        getStudentAttendance(student.id);


    renderOverallStatistics(
        attendanceRecords
    );


    renderCourseAttendance(
        attendanceRecords
    );


    renderAttendanceHistory(
        attendanceRecords
    );

}



/* =========================================================
   RENDER STUDENT INFORMATION
   ========================================================= */

function renderStudentInformation(student) {

    studentName.textContent =
        student.name || "Student";

    studentRoll.textContent =
        `Roll No: ${student.rollNumber || "—"}`;

    studentClass.textContent =
        `Class: ${student.className || "—"}`;


    /* -----------------------------------------------------
       SECTION
       ----------------------------------------------------- */

    if (student.section) {

        studentSection.textContent =
            `Section: ${student.section}`;

        studentSectionWrapper.style.display =
            "inline-flex";

    } else {

        studentSectionWrapper.style.display =
            "none";

    }


    /* -----------------------------------------------------
       GROUP
       ----------------------------------------------------- */

    if (student.group) {

        studentGroup.textContent =
            `Group: ${student.group}`;

        studentGroupWrapper.style.display =
            "inline-flex";

    } else {

        studentGroupWrapper.style.display =
            "none";

    }


    /* -----------------------------------------------------
       STATUS
       ----------------------------------------------------- */

    studentStatus.textContent =
        student.status || "Active";

}



/* =========================================================
   OVERALL ATTENDANCE STATISTICS
   ========================================================= */

function renderOverallStatistics(records) {

    let present = 0;

    let absent = 0;

    let late = 0;


    records.forEach(record => {

        const status =
            String(record.status)
                .toLowerCase();


        if (status === "present") {

            present++;

        } else if (status === "absent") {

            absent++;

        } else if (status === "late") {

            late++;

        }

    });


    const total =
        records.length;


    /*
       Attendance percentage:
       Present + Late = attended classes

       Late is counted as attendance because
       the student attended the class.
    */

    const attended =
        present + late;


    const percentage =
        total > 0
            ? (attended / total) * 100
            : 0;


    presentCount.textContent =
        present;


    absentCount.textContent =
        absent;


    lateCount.textContent =
        late;


    overallAttendance.textContent =
        `${formatPercentage(percentage)}%`;


    summaryAttendance.textContent =
        `${formatPercentage(percentage)}%`;

}



/* =========================================================
   COURSE-WISE ATTENDANCE
   ========================================================= */

function renderCourseAttendance(records) {

    courseAttendanceGrid.innerHTML = "";


    if (!records.length) {

        courseAttendanceGrid.innerHTML = `
            <div class="course-attendance-empty">
                No attendance records are available
                for this student.
            </div>
        `;

        return;

    }


    /*
       Group attendance records by courseId.
    */

    const courseGroups = {};


    records.forEach(record => {

        if (!courseGroups[record.courseId]) {

            courseGroups[record.courseId] = [];

        }


        courseGroups[record.courseId].push(record);

    });


    Object.keys(courseGroups)
        .forEach(courseId => {

            const courseRecords =
                courseGroups[courseId];


            const course =
                getCourseById(courseId);


            if (!course) {
                return;
            }


            const teacher =
                getTeacherById(
                    course.teacherId
                );


            let present = 0;

            let absent = 0;

            let late = 0;


            courseRecords.forEach(record => {

                const status =
                    String(record.status)
                        .toLowerCase();


                if (status === "present") {

                    present++;

                } else if (status === "absent") {

                    absent++;

                } else if (status === "late") {

                    late++;

                }

            });


            const total =
                courseRecords.length;


            const attended =
                present + late;


            const percentage =
                total > 0
                    ? (attended / total) * 100
                    : 0;


            const card =
                document.createElement("article");


            card.className =
                "course-attendance-card";


            card.innerHTML = `

                <div class="course-card-top">

                    <div class="course-card-info">

                        <span class="course-card-label">
                            ${escapeHTML(course.className)}
                            ${course.group
                                ? ` • ${escapeHTML(course.group)}`
                                : ""}
                        </span>

                        <h3>
                            ${escapeHTML(course.subject)}
                        </h3>

                        <span class="course-card-teacher">
                            ${escapeHTML(
                                teacher
                                    ? getTeacherDisplayName(teacher)
                                    : course.teacherName || "Teacher"
                            )}
                        </span>

                    </div>

                    <strong
                        class="course-attendance-percentage"
                    >
                        ${formatPercentage(percentage)}%
                    </strong>

                </div>


                <div class="course-attendance-bar">

                    <div
                        class="course-attendance-progress"
                        style="width: ${percentage}%"
                    ></div>

                </div>


                <div class="course-attendance-details">

                    <div class="course-attendance-detail">

                        <span>
                            Present
                        </span>

                        <strong>
                            ${present}
                        </strong>

                    </div>


                    <div class="course-attendance-detail">

                        <span>
                            Absent
                        </span>

                        <strong>
                            ${absent}
                        </strong>

                    </div>


                    <div class="course-attendance-detail">

                        <span>
                            Late
                        </span>

                        <strong>
                            ${late}
                        </strong>

                    </div>

                </div>

            `;


            courseAttendanceGrid.appendChild(card);

        });

}



/* =========================================================
   ATTENDANCE HISTORY
   ========================================================= */

function renderAttendanceHistory(records) {

    attendanceTableBody.innerHTML = "";


    if (!records.length) {

        attendanceTableBody.innerHTML = `

            <tr>

                <td
                    colspan="4"
                    style="text-align:center;"
                >
                    No attendance records available.
                </td>

            </tr>

        `;

        return;

    }


    /*
       Sort newest date first.
    */

    const sortedRecords =
        [...records].sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );


    sortedRecords.forEach(record => {

        const course =
            getCourseById(
                record.courseId
            );


        const teacher =
            course
                ? getTeacherById(
                    course.teacherId
                )
                : null;


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${formatDate(record.date)}
            </td>

            <td>

                <span
                    class="attendance-course-name"
                >
                    ${
                        course
                            ? escapeHTML(course.subject)
                            : "Unknown Course"
                    }
                </span>

            </td>

            <td>

                <span
                    class="attendance-teacher-name"
                >
                    ${
                        teacher
                            ? escapeHTML(
                                getTeacherDisplayName(teacher)
                            )
                            : course
                                ? escapeHTML(
                                    course.teacherName
                                )
                                : "—"
                    }
                </span>

            </td>

            <td>

                <span
                    class="attendance-status ${getStatusClass(record.status)}"
                >
                    ${escapeHTML(record.status)}
                </span>

            </td>

        `;


        attendanceTableBody.appendChild(row);

    });

}



/* =========================================================
   TEACHER DISPLAY NAME
   ========================================================= */

function getTeacherDisplayName(teacher) {

    if (!teacher) {
        return "Teacher";
    }


    /*
       Supports different teacher data structures.

       Example possibilities:
       teacher.name
       teacher.teacherName
       teacher.fullName
    */

    return (
        teacher.name ||
        teacher.teacherName ||
        teacher.fullName ||
        "Teacher"
    );

}



/* =========================================================
   STATUS CSS CLASS
   ========================================================= */

function getStatusClass(status) {

    const normalized =
        String(status)
            .toLowerCase()
            .trim();


    if (normalized === "present") {

        return "present";

    }


    if (normalized === "absent") {

        return "absent";

    }


    if (normalized === "late") {

        return "late";

    }


    return "";

}



/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(dateString) {

    if (!dateString) {
        return "—";
    }


    const date =
        new Date(`${dateString}T00:00:00`);


    if (Number.isNaN(date.getTime())) {

        return dateString;

    }


    return date.toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}



/* =========================================================
   FORMAT PERCENTAGE
   ========================================================= */

function formatPercentage(value) {

    if (!Number.isFinite(value)) {

        return "0";

    }


    return Number(value)
        .toFixed(1)
        .replace(/\.0$/, "");

}



/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* =========================================================
   SHOW EMPTY STATE
   ========================================================= */

function showEmptyState() {

    attendanceEmptyState.hidden = false;

    attendanceDashboard.hidden = true;

}



/* =========================================================
   DEBUG HELPER
   ========================================================= */

function debugAttendanceData() {

    console.log(
        "QIAC Students:",
        typeof QIAC_STUDENTS !== "undefined"
            ? QIAC_STUDENTS
            : "Not loaded"
    );


    console.log(
        "QIAC Courses:",
        typeof QIAC_COURSES !== "undefined"
            ? QIAC_COURSES
            : "Not loaded"
    );


    console.log(
        "QIAC Attendance:",
        typeof QIAC_ATTENDANCE !== "undefined"
            ? QIAC_ATTENDANCE
            : "Not loaded"
    );

}
