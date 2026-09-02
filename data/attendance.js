/* =========================================================
   QIAC ACADEMY
   STUDENT ATTENDANCE DATA
   File: data/attendance.js

   Attendance connects:
   Students → Courses → Teachers

   IMPORTANT:
   courseId and teacherId MUST match
   data/courses.js and data/teachers.js
   ========================================================= */

const QIAC_ATTENDANCE = [

    /* =====================================================
       STUDENT STU-001
       CLASS 9
       ===================================================== */

    {
        id: "ATT-001",
        studentId: "STU-001",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-002",
        studentId: "STU-001",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-003",
        studentId: "STU-001",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Absent"
    },

    {
        id: "ATT-004",
        studentId: "STU-001",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Present"
    },

    {
        id: "ATT-005",
        studentId: "STU-001",
        courseId: "QIAC-9-PHY",
        teacherId: "T-B",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-006",
        studentId: "STU-001",
        courseId: "QIAC-9-PHY",
        teacherId: "T-B",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-007",
        studentId: "STU-001",
        courseId: "QIAC-9-PHY",
        teacherId: "T-B",
        date: "2026-09-03",
        status: "Present"
    },

    {
        id: "ATT-008",
        studentId: "STU-001",
        courseId: "QIAC-9-PHY",
        teacherId: "T-B",
        date: "2026-09-04",
        status: "Late"
    },


    /* =====================================================
       STUDENT STU-002
       CLASS 9
       ===================================================== */

    {
        id: "ATT-009",
        studentId: "STU-002",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-010",
        studentId: "STU-002",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Absent"
    },

    {
        id: "ATT-011",
        studentId: "STU-002",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Present"
    },

    {
        id: "ATT-012",
        studentId: "STU-002",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Present"
    },


    /* =====================================================
       STUDENT STU-003
       CLASS 9
       ===================================================== */

    {
        id: "ATT-013",
        studentId: "STU-003",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-014",
        studentId: "STU-003",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-015",
        studentId: "STU-003",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Present"
    },

    {
        id: "ATT-016",
        studentId: "STU-003",
        courseId: "QIAC-9-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Late"
    },


    /* =====================================================
       STUDENT STU-004
       CLASS 10
       ===================================================== */

    {
        id: "ATT-017",
        studentId: "STU-004",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-018",
        studentId: "STU-004",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-019",
        studentId: "STU-004",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Present"
    },

    {
        id: "ATT-020",
        studentId: "STU-004",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Absent"
    },


    /* =====================================================
       STUDENT STU-005
       CLASS 10
       ===================================================== */

    {
        id: "ATT-021",
        studentId: "STU-005",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-022",
        studentId: "STU-005",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-023",
        studentId: "STU-005",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Late"
    },

    {
        id: "ATT-024",
        studentId: "STU-005",
        courseId: "QIAC-10-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Present"
    },


    /* =====================================================
       STUDENT STU-006
       F.Sc PRE-ENGINEERING
       ===================================================== */

    {
        id: "ATT-025",
        studentId: "STU-006",
        courseId: "QIAC-FSC-PE-MATH",
        teacherId: "T-A",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-026",
        studentId: "STU-006",
        courseId: "QIAC-FSC-PE-MATH",
        teacherId: "T-A",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-027",
        studentId: "STU-006",
        courseId: "QIAC-FSC-PE-MATH",
        teacherId: "T-A",
        date: "2026-09-03",
        status: "Absent"
    },

    {
        id: "ATT-028",
        studentId: "STU-006",
        courseId: "QIAC-FSC-PE-MATH",
        teacherId: "T-A",
        date: "2026-09-04",
        status: "Present"
    },


    /* =====================================================
       STUDENT STU-007
       F.Sc PRE-MEDICAL
       Biology → Teacher D
       ===================================================== */

    {
        id: "ATT-029",
        studentId: "STU-007",
        courseId: "QIAC-FSC-PM-BIO",
        teacherId: "T-D",
        date: "2026-09-01",
        status: "Present"
    },

    {
        id: "ATT-030",
        studentId: "STU-007",
        courseId: "QIAC-FSC-PM-BIO",
        teacherId: "T-D",
        date: "2026-09-02",
        status: "Present"
    },

    {
        id: "ATT-031",
        studentId: "STU-007",
        courseId: "QIAC-FSC-PM-BIO",
        teacherId: "T-D",
        date: "2026-09-03",
        status: "Present"
    },

    {
        id: "ATT-032",
        studentId: "STU-007",
        courseId: "QIAC-FSC-PM-BIO",
        teacherId: "T-D",
        date: "2026-09-04",
        status: "Present"
    }

];
