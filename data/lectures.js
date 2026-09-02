/* =========================================================
   QIAC ACADEMY
   DAILY LECTURES DATA
   File: data/lectures.js

   Architecture:

   Lecture
      ↓
   courseId
      ↓
   Course
      ↓
   teacherId
      ↓
   Teacher
   ========================================================= */


const QIAC_LECTURES = [

    /* =====================================================
       CLASS 9 — MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "LECT-001",

        courseId: "QIAC-9-MATH",

        teacherId: "T-A",

        className: "Class 9",

        subject: "Mathematics",

        title: "Introduction to Real Numbers",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-05",

        duration: "45 min",

        description:
            "Introduction to real numbers, number systems, " +
            "and basic mathematical concepts.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    {
        id: "LECT-002",

        courseId: "QIAC-9-MATH",

        teacherId: "T-A",

        className: "Class 9",

        subject: "Mathematics",

        title: "Real Numbers and Number Systems",

        chapter: "Chapter 1",

        lectureNumber: 2,

        date: "2026-09-07",

        duration: "50 min",

        description:
            "Understanding rational numbers, irrational numbers, " +
            "and the real number system.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       CLASS 9 — PHYSICS
       TEACHER B
       ===================================================== */

    {
        id: "LECT-003",

        courseId: "QIAC-9-PHY",

        teacherId: "T-B",

        className: "Class 9",

        subject: "Physics",

        title: "Introduction to Physics",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-05",

        duration: "42 min",

        description:
            "Introduction to physics, physical quantities, " +
            "measurements, and applications.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       CLASS 9 — CHEMISTRY
       TEACHER C
       ===================================================== */

    {
        id: "LECT-004",

        courseId: "QIAC-9-CHEM",

        teacherId: "T-C",

        className: "Class 9",

        subject: "Chemistry",

        title: "Introduction to Chemistry",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-06",

        duration: "44 min",

        description:
            "Introduction to chemistry and the role of chemistry " +
            "in science and everyday life.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       CLASS 10 — MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "LECT-005",

        courseId: "QIAC-10-MATH",

        teacherId: "T-A",

        className: "Class 10",

        subject: "Mathematics",

        title: "Quadratic Equations",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-05",

        duration: "48 min",

        description:
            "Introduction to quadratic equations and their " +
            "basic mathematical structure.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       CLASS 10 — PHYSICS
       TEACHER B
       ===================================================== */

    {
        id: "LECT-006",

        courseId: "QIAC-10-PHY",

        teacherId: "T-B",

        className: "Class 10",

        subject: "Physics",

        title: "Simple Harmonic Motion",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-06",

        duration: "46 min",

        description:
            "Introduction to oscillatory motion and simple " +
            "harmonic motion.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       F.SC PRE-ENGINEERING — MATHEMATICS
       TEACHER A
       ===================================================== */

    {
        id: "LECT-007",

        courseId: "QIAC-FSC-PE-MATH",

        teacherId: "T-A",

        className: "F.Sc",

        subject: "Mathematics",

        group: "Pre-Engineering",

        title: "Functions and Their Graphs",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-08",

        duration: "55 min",

        description:
            "Introduction to mathematical functions, domains, " +
            "ranges, and graphical representation.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    },


    /* =====================================================
       F.SC PRE-MEDICAL — BIOLOGY
       TEACHER D
       ===================================================== */

    {
        id: "LECT-008",

        courseId: "QIAC-FSC-PM-BIO",

        teacherId: "T-D",

        className: "F.Sc",

        subject: "Biology",

        group: "Pre-Medical",

        title: "Introduction to Biology",

        chapter: "Chapter 1",

        lectureNumber: 1,

        date: "2026-09-08",

        duration: "50 min",

        description:
            "Introduction to biology and the fundamental concepts " +
            "of biological sciences.",

        videoUrl:
            "https://www.youtube.com/",

        notesUrl:
            "#",

        assignmentUrl:
            "#",

        status: "Published"

    }

];
