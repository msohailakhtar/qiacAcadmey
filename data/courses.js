/* =========================================================
   QIAC ACADEMY
   COURSES DATA
   File: data/courses.js

   Course IDs connect:
   Courses → Lectures → Assignments → Tests
   → Attendance → Student Progress
   ========================================================= */

const QIAC_COURSES = [

    /* =====================================================
       CLASS 9
       ===================================================== */

    {
        id: "QIAC-9-MATH",
        className: "Class 9",
        subject: "Mathematics",
        teacherId: "T-A",
        teacherName: "Teacher A",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-9-PHY",
        className: "Class 9",
        subject: "Physics",
        teacherId: "T-B",
        teacherName: "Teacher B",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-9-CHEM",
        className: "Class 9",
        subject: "Chemistry",
        teacherId: "T-C",
        teacherName: "Teacher C",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-9-BIO",
        className: "Class 9",
        subject: "Biology",
        teacherId: "T-D",
        teacherName: "Teacher D",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-9-ENG",
        className: "Class 9",
        subject: "English",
        teacherId: "T-E",
        teacherName: "Teacher E",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-9-URDU",
        className: "Class 9",
        subject: "Urdu",
        teacherId: "T-F",
        teacherName: "Teacher F",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-9-CS",
        className: "Class 9",
        subject: "Computer Science",
        teacherId: "T-G",
        teacherName: "Teacher G",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-9-ISL",
        className: "Class 9",
        subject: "Islamiat",
        teacherId: "T-H",
        teacherName: "Teacher H",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-9-PAK",
        className: "Class 9",
        subject: "Pakistan Studies",
        teacherId: "T-I",
        teacherName: "Teacher I",
        level: "Matric",
        group: "General",
        status: "Active"
    },


    /* =====================================================
       CLASS 10
       ===================================================== */

    {
        id: "QIAC-10-MATH",
        className: "Class 10",
        subject: "Mathematics",
        teacherId: "T-A",
        teacherName: "Teacher A",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-10-PHY",
        className: "Class 10",
        subject: "Physics",
        teacherId: "T-B",
        teacherName: "Teacher B",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-10-CHEM",
        className: "Class 10",
        subject: "Chemistry",
        teacherId: "T-C",
        teacherName: "Teacher C",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-10-BIO",
        className: "Class 10",
        subject: "Biology",
        teacherId: "T-D",
        teacherName: "Teacher D",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-10-ENG",
        className: "Class 10",
        subject: "English",
        teacherId: "T-E",
        teacherName: "Teacher E",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-10-URDU",
        className: "Class 10",
        subject: "Urdu",
        teacherId: "T-F",
        teacherName: "Teacher F",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-10-CS",
        className: "Class 10",
        subject: "Computer Science",
        teacherId: "T-G",
        teacherName: "Teacher G",
        level: "Matric",
        group: "Science",
        status: "Active"
    },

    {
        id: "QIAC-10-ISL",
        className: "Class 10",
        subject: "Islamiat",
        teacherId: "T-H",
        teacherName: "Teacher H",
        level: "Matric",
        group: "General",
        status: "Active"
    },

    {
        id: "QIAC-10-PAK",
        className: "Class 10",
        subject: "Pakistan Studies",
        teacherId: "T-I",
        teacherName: "Teacher I",
        level: "Matric",
        group: "General",
        status: "Active"
    },


    /* =====================================================
       F.SC — PRE-ENGINEERING
       ===================================================== */

    {
        id: "QIAC-FSC-PE-MATH",
        className: "F.Sc",
        subject: "Mathematics",
        teacherId: "T-A",
        teacherName: "Teacher A",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-PHY",
        className: "F.Sc",
        subject: "Physics",
        teacherId: "T-B",
        teacherName: "Teacher B",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-CHEM",
        className: "F.Sc",
        subject: "Chemistry",
        teacherId: "T-C",
        teacherName: "Teacher C",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-ENG",
        className: "F.Sc",
        subject: "English",
        teacherId: "T-E",
        teacherName: "Teacher E",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-URDU",
        className: "F.Sc",
        subject: "Urdu",
        teacherId: "T-F",
        teacherName: "Teacher F",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-ISL",
        className: "F.Sc",
        subject: "Islamiat",
        teacherId: "T-H",
        teacherName: "Teacher H",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PE-PAK",
        className: "F.Sc",
        subject: "Pakistan Studies",
        teacherId: "T-I",
        teacherName: "Teacher I",
        level: "Intermediate",
        group: "Pre-Engineering",
        status: "Active"
    },


    /* =====================================================
       F.SC — PRE-MEDICAL
       ===================================================== */

    {
        id: "QIAC-FSC-PM-BIO",
        className: "F.Sc",
        subject: "Biology",
        teacherId: "T-D",
        teacherName: "Teacher D",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-PHY",
        className: "F.Sc",
        subject: "Physics",
        teacherId: "T-B",
        teacherName: "Teacher B",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-CHEM",
        className: "F.Sc",
        subject: "Chemistry",
        teacherId: "T-C",
        teacherName: "Teacher C",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-ENG",
        className: "F.Sc",
        subject: "English",
        teacherId: "T-E",
        teacherName: "Teacher E",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-URDU",
        className: "F.Sc",
        subject: "Urdu",
        teacherId: "T-F",
        teacherName: "Teacher F",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-ISL",
        className: "F.Sc",
        subject: "Islamiat",
        teacherId: "T-H",
        teacherName: "Teacher H",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    },

    {
        id: "QIAC-FSC-PM-PAK",
        className: "F.Sc",
        subject: "Pakistan Studies",
        teacherId: "T-I",
        teacherName: "Teacher I",
        level: "Intermediate",
        group: "Pre-Medical",
        status: "Active"
    }

];
