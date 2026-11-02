// All portfolio content. Projects, certificates and skills are mock data for the class project;
// the contact details (Facebook, Gmail) are real.

export const profile = {
  first: "Rovilyn",
  last: "Castrodes",
  age: 21,
  location: "Guio-ang, Guindulman, Bohol",
  course: "BSCS 3B",
  roles: ["BSCS 3B Student", "Web Developer", "UI Designer", "Problem Solver"],
  heroText: "Creating websites that are simple, functional and user-friendly — solutions people actually enjoy using.",
  bio: "I'm a 21-year-old BS Computer Science student (3B) from Guio-ang, Guindulman, Bohol. I focus on front-end development: turning ideas into clean, responsive websites with React and Tailwind CSS, and connecting them to databases with PHP and MySQL. I love learning new tools and always try to give my best in every project.",
  email: "rovilyn.castrodes@bisu.edu.ph",
  facebook: { name: "Castrodes Rovilyn", url: "https://www.facebook.com/urlyniee/" },
};

const icon = (n, v = "original") => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}/${n}-${v}.svg`;

export const techStack = [
  ["HTML", icon("html5")],
  ["CSS", icon("css3")],
  ["JavaScript", icon("javascript")],
  ["React", icon("react")],
  ["Tailwind CSS", icon("tailwindcss")],
  ["Vite", icon("vitejs")],
  ["Node.js", icon("nodejs")],
  ["PHP", icon("php")],
  ["MySQL", icon("mysql")],
  ["Java", icon("java")],
  ["Python", icon("python")],
  ["Firebase", icon("firebase")],
  ["Git", icon("git")],
  ["Figma", icon("figma")],
  ["VS Code", icon("vscode")],
].map(([name, src]) => ({ name, src }));

export const projects = [
  {
    id: "guindulman-tourism",
    title: "Guindulman Tourism Hub",
    kind: "landing",
    description: "A tourism website that showcases the beaches, caves and heritage spots of Guindulman, with an interactive map, travel tips and a simple booking inquiry form for local resorts.",
    tech: ["React", "Tailwind CSS", "Vite", "Leaflet"],
    features: ["Interactive map of tourist spots", "Photo galleries for each destination", "Inquiry form that emails resort owners", "Fully responsive on phones"],
  },
  {
    id: "calamay-shop",
    title: "Calamay Online Shop",
    kind: "shop",
    description: "An online store for Bohol's famous calamay and other kakanin, where customers browse products, add to cart and order for pickup or delivery within Guindulman.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    features: ["Product catalog with categories", "Cart and checkout flow", "Order tracking for customers", "Admin page for new orders"],
  },
  {
    id: "health-records",
    title: "Barangay Health Records",
    kind: "dashboard",
    description: "A records system for a barangay health center to manage patient profiles, check-up history and vaccination schedules, replacing paper logbooks.",
    tech: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
    features: ["Patient search and profiles", "Vaccination reminders", "Monthly reports with charts", "Role-based login for staff"],
  },
  {
    id: "task-tracker",
    title: "TaskMate Planner",
    kind: "mobile",
    description: "A student planner web app for tracking subjects, deadlines and group tasks, with reminders and a progress view for each week.",
    tech: ["React", "Firebase", "PWA"],
    features: ["Add subjects and deadlines", "Push reminders before due dates", "Weekly progress chart", "Works offline as a PWA"],
  },
  {
    id: "weather-bohol",
    title: "Bohol Weather Dashboard",
    kind: "weather",
    description: "A dashboard that shows real-time weather, rainfall and typhoon advisories for every town in Bohol, pulled from a public weather API.",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    features: ["Search any town in Bohol", "7-day forecast", "Rainfall and wind charts", "Typhoon advisory banner"],
  },
  {
    id: "quiz-app",
    title: "QuizBee for Kids",
    kind: "quiz",
    description: "A colorful quiz game for elementary pupils covering math, science and Filipino, with timers, scores and a class leaderboard for teachers.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    features: ["Timed multiple-choice rounds", "Instant feedback per answer", "Teacher leaderboard", "Question bank editor"],
  },
];

export const certificates = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
  { title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "UI/UX Design Fundamentals", issuer: "Online Workshop", year: "2025" },
  { title: "Python for Beginners", issuer: "Online Course", year: "2024" },
  { title: "Campus Web Design Contest — 2nd Place", issuer: "CS Days 2025", year: "2025" },
];

export const stats = [
  { label: "Total Projects", value: projects.length, note: "Innovative web solutions crafted" },
  { label: "Certificates", value: certificates.length, note: "Skills validated" },
  { label: "Years of Experience", value: 3, note: "Continuous learning journey" },
];
