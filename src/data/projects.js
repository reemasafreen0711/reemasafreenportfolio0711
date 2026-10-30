export const projects = [
  {
    id: "voice2sign",
    featured: true,
    number: "01",
    category: "AI • Computer Vision • Full-Stack",
    title: "VOICE2SIGN",
    subtitle: "Intelligent Speech & Sign Language Translation System",

    // Add your Voice2Sign image here
    coverImage: "/v2s.jpg",
    images: ["/v2s.jpg"],

    description:
      "An accessibility-focused communication platform supporting both Voice → Sign and Sign → Voice interaction using speech processing, hand tracking and modern web technologies.",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "MediaPipe",
      "MongoDB",
      "REST API",
    ],

    highlights: [
      "Voice → Sign translation",
      "Sign → Voice recognition",
      "Real-time hand tracking",
      "Interactive sign visualization",
    ],

    objective:
      "To develop a communication platform that helps reduce communication barriers between sign language users and people who primarily communicate through speech.",

    features: [
      "Speech-to-text processing",
      "Voice-to-sign translation",
      "Real-time hand gesture recognition",
      "Sign-to-speech conversion",
      "Interactive 3D sign visualization",
      "User authentication and dashboard",
    ],

    contribution:
      "Developed the React frontend, integrated FastAPI REST APIs, implemented speech interaction, connected MediaPipe hand tracking and contributed to the overall user experience.",
  },

  {
    id: "rilax-tiles",
    featured: false,
    number: "02",
    category: "Frontend • UI/UX • Product Experience",
    title: "RILAX TILES",
    subtitle: "Premium Architectural Surfaces Experience",

    // Add your RILAX images here later
    coverImage: "/Rilax Tiles.png",
    images: ["/Rilax Tiles.png"],

    description:
      "A premium product-focused web experience for architectural surfaces, combining responsive layouts, product exploration, comparison features and polished motion interactions.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
    ],

    highlights: [
      "Premium visual design",
      "Responsive product experience",
      "Product comparison",
      "Smooth animations",
    ],

    objective:
      "To create a modern digital experience for presenting architectural surface products in an elegant and visually engaging way.",

    features: [
      "Premium landing page",
      "Responsive product sections",
      "Product exploration",
      "Product comparison functionality",
      "Smooth animations",
      "Reusable React components",
    ],

    contribution:
      "Developed the React frontend, implemented responsive layouts, created reusable components and added motion-based interactions using Framer Motion.",
  },

  {
    id: "task-management",
    featured: false,
    number: "03",
    category: "Full-Stack • REST API • Authentication",
    title: "TASK MANAGEMENT SYSTEM",
    subtitle: "Role-Based Project & Task Management Platform",

    // Add your Task Management images later
    coverImage: "/Task Management.png",
    images: ["/Task Management.png"],

    description:
      "A full-stack task management platform with authentication, role-based access, project management, task assignment, status tracking and dashboard metrics.",

    technologies: ["React", "Laravel", "MySQL", "Sanctum", "REST API", "Git"],

    highlights: [
      "Authentication & authorization",
      "Admin / Member roles",
      "Project management",
      "Task tracking dashboard",
    ],

    objective:
      "To develop a centralized platform for managing projects, assigning tasks and monitoring project progress through a structured role-based system.",

    features: [
      "User registration and login",
      "Protected API routes",
      "Role-based access control",
      "Project management",
      "Task assignment",
      "Task status and priority tracking",
      "Dashboard statistics",
    ],

    contribution:
      "Developed the React frontend, Laravel REST APIs, Sanctum-based authentication flow, MySQL database integration and role-based application workflows.",
  },

  {
    id: "student-management",
    number: "04",
    featured: true,

    category: "Full Stack Development",

    title: "Student Management System",

    subtitle: "A centralized platform for student and academic administration.",

    // Student Management screenshot you sent
    coverImage: "/student management.png",

    images: ["/student management.png"],

    description:
      "A full-stack student management application designed to organize student records, manage departments, maintain attendance and support academic administration through a centralized dashboard.",

    highlights: [
      "Student Records Management",
      "Department Management",
      "Attendance Tracking",
      "Admin Dashboard",
    ],

    technologies: ["React", "Laravel", "PHP", "MySQL", "REST API"],

    objective:
      "To develop a centralized application for managing student information and academic records with an organized and user-friendly interface.",

    features: [
      "Student registration and profile management",
      "Department and course organization",
      "Attendance management",
      "Administrative dashboard",
      "Database-backed student records",
      "Frontend and backend API integration",
    ],

    contribution:
      "Designed and developed the student management application, including frontend components, backend integration and database-driven academic management features.",
  },
];
