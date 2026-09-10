export const portfolioData = {
  name: 'Siddharth Awasthi',
  shortName: 'Siddharth',
  title: 'Aspiring Software Developer',
  tagline: 'Building clean, efficient software — one commit at a time.',
  about: {
    intro:
    'I am a passionate software developer with a strong foundation in object-oriented programming and web technologies. I enjoy building practical applications that solve real problems.',
    goal:
    'My goal is to join a forward-thinking engineering team where I can contribute to meaningful products, grow my technical depth, and collaborate with talented developers.',
    interests: [
    'Full-stack Web Development',
    'Object-Oriented Design',
    'Clean Code & Best Practices',
    'Open Source Contributions'],

    profileImage: '/profile.jpg',
    profileFallback: "https://img.rocket.new/generatedImages/rocket_gen_img_17660a7f7-1784050502571.png"
  },
  contact: {
    email: 'siddharth.awasthi@email.com',
    phone: '+91 98765 43210',
    location: 'India',
    github: 'https://github.com/siddharthawasthi',
    linkedin: 'https://linkedin.com/in/siddharthawasthi'
  },
  resume: '/resume.pdf',
  skills: [
  { name: 'C#', icon: 'CodeBracketIcon', level: 85, color: '#9B59B6', category: 'Language' },
  { name: 'Java', icon: 'CommandLineIcon', level: 78, color: '#E74C3C', category: 'Language' },
  { name: 'HTML', icon: 'GlobeAltIcon', level: 90, color: '#E67E22', category: 'Web' },
  { name: 'CSS', icon: 'SwatchIcon', level: 85, color: '#3498DB', category: 'Web' },
  { name: 'JavaScript', icon: 'BoltIcon', level: 80, color: '#F1C40F', category: 'Web' },
  { name: 'React', icon: 'CubeTransparentIcon', level: 75, color: '#00D4FF', category: 'Framework' },
  { name: 'ASP.NET MVC', icon: 'ServerIcon', level: 70, color: '#5C2D91', category: 'Framework' },
  { name: 'SQL', icon: 'CircleStackIcon', level: 72, color: '#27AE60', category: 'Database' },
  { name: 'Git', icon: 'ArrowPathIcon', level: 80, color: '#F05032', category: 'Tool' },
  { name: 'GitHub', icon: 'CloudArrowUpIcon', level: 82, color: '#8892A4', category: 'Tool' }],

  projects: [
  {
    id: 1,
    name: 'Student Management System',
    description:
    'A console-based application for managing student records, including enrollment, grade tracking, and report generation. Implements file handling for persistent data storage.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c57d4149-1767190930951.png",
    technologies: ['C#', 'OOP', 'File Handling', 'Console App'],
    github: 'https://github.com/siddharthawasthi/student-management',
    demo: null
  },
  {
    id: 2,
    name: 'College Management System',
    description:
    'A comprehensive system for managing college operations — departments, faculty, courses, and students. Built with strong object-oriented design principles and modular architecture.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1190944d7-1772351148685.png",
    technologies: ['C#', 'OOP', 'File Handling', 'Modular Design'],
    github: 'https://github.com/siddharthawasthi/college-management',
    demo: null
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description:
    'This very portfolio — built with React, HTML, CSS, and JavaScript. Fully responsive, animated, and designed to make a strong first impression on recruiters.',
    image: "https://images.unsplash.com/photo-1733977459324-1fd22d548f68",
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/siddharthawasthi/portfolio',
    demo: '#'
  }],

  education: [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'XYZ University',
    location: 'India',
    year: '2022 – 2025',
    description:
    'Studied core computer science subjects including Data Structures, Algorithms, Database Management, Software Engineering, and Web Development.',
    grade: 'CGPA: 8.2 / 10',
    icon: 'AcademicCapIcon'
  },
  {
    id: 2,
    degree: 'Higher Secondary (12th)',
    institution: 'ABC Senior Secondary School',
    location: 'India',
    year: '2020 – 2022',
    description:
    'Science stream with Computer Science as elective subject. Developed foundational programming skills in C++ and Python.',
    grade: 'Percentage: 82%',
    icon: 'BookOpenIcon'
  }]

};