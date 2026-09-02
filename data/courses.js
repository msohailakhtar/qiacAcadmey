/* =========================================================
   QIAC ACADEMY
   COURSE DATABASE
   Version: 1.0

   This structure will later feed:
   - Courses
   - Daily Lectures
   - Assignments
   - Assessments
   - Attendance
   - Student Progress
========================================================= */

const QIAC_COURSES = [

    /* =====================================================
       9TH CLASS
    ===================================================== */

    {
        id: "QIAC-9-MATH",

        program: "9th Class",

        programCode: "CLASS-09",

        subject: "Mathematics",

        shortName: "Mathematics",

        category: "Matric",

        description:
            "Concept-focused Mathematics coaching designed to strengthen fundamentals, problem-solving skills and examination preparation.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "∑",

        features: [
            "Conceptual learning",
            "Chapter-wise lectures",
            "Regular assignments",
            "Test preparation"
        ]

    },


    {
        id: "QIAC-9-PHY",

        program: "9th Class",

        programCode: "CLASS-09",

        subject: "Physics",

        shortName: "Physics",

        category: "Matric",

        description:
            "Physics coaching focused on concepts, numerical problem solving and strong preparation for board examinations.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "Φ",

        features: [
            "Conceptual understanding",
            "Numerical practice",
            "Chapter tests",
            "Board preparation"
        ]

    },


    {
        id: "QIAC-9-CHEM",

        program: "9th Class",

        programCode: "CLASS-09",

        subject: "Chemistry",

        shortName: "Chemistry",

        category: "Matric",

        description:
            "Structured Chemistry learning with emphasis on concepts, equations, problem solving and examination preparation.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "⚗",

        features: [
            "Concept building",
            "Important reactions",
            "Practice questions",
            "Regular assessment"
        ]

    },


    /* =====================================================
       10TH CLASS
    ===================================================== */

    {
        id: "QIAC-10-MATH",

        program: "10th Class",

        programCode: "CLASS-10",

        subject: "Mathematics",

        shortName: "Mathematics",

        category: "Matric",

        description:
            "Advanced Mathematics preparation with conceptual teaching, intensive practice and board examination support.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "∫",

        features: [
            "Advanced concepts",
            "Past paper practice",
            "Chapter tests",
            "Board preparation"
        ]

    },


    {
        id: "QIAC-10-PHY",

        program: "10th Class",

        programCode: "CLASS-10",

        subject: "Physics",

        shortName: "Physics",

        category: "Matric",

        description:
            "Comprehensive Physics preparation combining conceptual understanding with numerical and examination practice.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "⚡",

        features: [
            "Conceptual lectures",
            "Numerical problems",
            "Test preparation",
            "Past papers"
        ]

    },


    {
        id: "QIAC-10-CHEM",

        program: "10th Class",

        programCode: "CLASS-10",

        subject: "Chemistry",

        shortName: "Chemistry",

        category: "Matric",

        description:
            "Complete Chemistry preparation with conceptual lectures, practical understanding and examination-focused practice.",

        teacher: "Faculty Member",

        level: "Secondary",

        duration: "Academic Year",

        status: "Active",

        icon: "⚗",

        features: [
            "Conceptual learning",
            "Important reactions",
            "MCQ practice",
            "Board preparation"
        ]

    },


    /* =====================================================
       F.SC
    ===================================================== */

    {
        id: "QIAC-FSC-MATH",

        program: "F.Sc",

        programCode: "FSC",

        subject: "Mathematics",

        shortName: "Mathematics",

        category: "Intermediate",

        description:
            "Higher-level Mathematics coaching emphasizing conceptual clarity, analytical thinking and examination preparation.",

        teacher: "Faculty Member",

        level: "Intermediate",

        duration: "Academic Year",

        status: "Active",

        icon: "∂",

        features: [
            "Advanced Mathematics",
            "Problem solving",
            "Conceptual lectures",
            "Test series"
        ]

    },


    {
        id: "QIAC-FSC-PHY",

        program: "F.Sc",

        programCode: "FSC",

        subject: "Physics",

        shortName: "Physics",

        category: "Intermediate",

        description:
            "F.Sc Physics preparation focused on theoretical concepts, numerical problem solving and examination performance.",

        teacher: "Faculty Member",

        level: "Intermediate",

        duration: "Academic Year",

        status: "Active",

        icon: "Ψ",

        features: [
            "Theory",
            "Numerical problems",
            "Concept building",
            "Assessment"
        ]

    },


    {
        id: "QIAC-FSC-CHEM",

        program: "F.Sc",

        programCode: "FSC",

        subject: "Chemistry",

        shortName: "Chemistry",

        category: "Intermediate",

        description:
            "Comprehensive F.Sc Chemistry preparation combining conceptual understanding with structured examination practice.",

        teacher: "Faculty Member",

        level: "Intermediate",

        duration: "Academic Year",

        status: "Active",

        icon: "Ω",

        features: [
            "Conceptual learning",
            "Reaction mechanisms",
            "MCQs",
            "Board preparation"
        ]

    },


    /* =====================================================
       ENTRY TEST
    ===================================================== */

    {
        id: "QIAC-ET-MATH",

        program: "Entry Test",

        programCode: "ENTRY-TEST",

        subject: "Mathematics",

        shortName: "Mathematics",

        category: "Entry Test",

        description:
            "Intensive Mathematics preparation for university admission and competitive entry tests.",

        teacher: "Faculty Member",

        level: "Entry Test",

        duration: "Intensive Program",

        status: "Active",

        icon: "Σ",

        features: [
            "MCQ strategies",
            "Timed practice",
            "Past entry tests",
            "Mock examinations"
        ]

    },


    {
        id: "QIAC-ET-PHY",

        program: "Entry Test",

        programCode: "ENTRY-TEST",

        subject: "Physics",

        shortName: "Physics",

        category: "Entry Test",

        description:
            "Entry Test Physics preparation with intensive MCQ practice, conceptual revision and timed assessments.",

        teacher: "Faculty Member",

        level: "Entry Test",

        duration: "Intensive Program",

        status: "Active",

        icon: "Δ",

        features: [
            "Concept revision",
            "MCQ practice",
            "Timed tests",
            "Mock exams"
        ]

    },


    {
        id: "QIAC-ET-CHEM",

        program: "Entry Test",

        programCode: "ENTRY-TEST",

        subject: "Chemistry",

        shortName: "Chemistry",

        category: "Entry Test",

        description:
            "Focused Chemistry preparation for competitive entry tests through concept revision and intensive MCQ practice.",

        teacher: "Faculty Member",

        level: "Entry Test",

        duration: "Intensive Program",

        status: "Active",

        icon: "λ",

        features: [
            "Rapid revision",
            "MCQ practice",
            "Timed assessments",
            "Mock tests"
        ]

    }

];
