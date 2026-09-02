/* =========================================================
   QIAC ACADEMY
   ASSESSMENTS DATA
   File: data/assessments.js

   Every assessment is connected to:

   studentId
   courseId
   teacherId

   This allows us to calculate:
   marks
   percentage
   performance
   course progress
   ========================================================= */


const QIAC_ASSESSMENTS = [

    /* =====================================================
       STUDENT 001 — CLASS 9 MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "TEST-001",

        studentId: "STU-001",

        courseId: "QIAC-9-MATH",

        teacherId: "T-A",

        type: "Test",

        title: "Chapter 1 Test",

        chapter: "Chapter 1",

        date: "2026-09-10",

        totalMarks: 50,

        obtainedMarks: 43,

        percentage: 86,

        grade: "A",

        status: "Checked",

        feedback:
            "Very good conceptual understanding. " +
            "Work on solving questions more efficiently."

    },


    {
        id: "QUIZ-001",

        studentId: "STU-001",

        courseId: "QIAC-9-MATH",

        teacherId: "T-A",

        type: "Quiz",

        title: "Real Numbers Quiz",

        chapter: "Chapter 1",

        date: "2026-09-08",

        totalMarks: 20,

        obtainedMarks: 18,

        percentage: 90,

        grade: "A+",

        status: "Checked",

        feedback:
            "Excellent performance."

    },


    {
        id: "ASSIGN-001",

        studentId: "STU-001",

        courseId: "QIAC-9-MATH",

        teacherId: "T-A",

        type: "Assignment",

        title: "Real Numbers Assignment",

        chapter: "Chapter 1",

        date: "2026-09-09",

        totalMarks: 20,

        obtainedMarks: 17,

        percentage: 85,

        grade: "A",

        status: "Checked",

        feedback:
            "Good work. Improve presentation of mathematical steps."

    },


    /* =====================================================
       STUDENT 001 — CLASS 9 PHYSICS
       TEACHER B
       ===================================================== */

    {
        id: "TEST-002",

        studentId: "STU-001",

        courseId: "QIAC-9-PHY",

        teacherId: "T-B",

        type: "Test",

        title: "Introduction to Physics Test",

        chapter: "Chapter 1",

        date: "2026-09-11",

        totalMarks: 50,

        obtainedMarks: 39,

        percentage: 78,

        grade: "B+",

        status: "Checked",

        feedback:
            "Good understanding. Revise numerical problems."

    },


    /* =====================================================
       STUDENT 004 — CLASS 10 MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "TEST-003",

        studentId: "STU-004",

        courseId: "QIAC-10-MATH",

        teacherId: "T-A",

        type: "Test",

        title: "Quadratic Equations Test",

        chapter: "Chapter 1",

        date: "2026-09-12",

        totalMarks: 50,

        obtainedMarks: 46,

        percentage: 92,

        grade: "A+",

        status: "Checked",

        feedback:
            "Excellent mathematical reasoning."

    },


    /* =====================================================
       STUDENT 006 — F.SC PRE-ENGINEERING MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "TEST-004",

        studentId: "STU-006",

        courseId: "QIAC-FSC-PE-MATH",

        teacherId: "T-A",

        type: "Test",

        title: "Functions Test",

        chapter: "Chapter 1",

        date: "2026-09-13",

        totalMarks: 50,

        obtainedMarks: 41,

        percentage: 82,

        grade: "A",

        status: "Checked",

        feedback:
            "Good understanding of functions. " +
            "Practice graphical questions."

    }

];
