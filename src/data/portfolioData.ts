export const portfolioData = {
  name: 'Siddharth',
  shortName: 'Siddharth',
  title: 'Aspiring Software Developer',
  tagline: 'Building clean, efficient software — one commit at a time.',
  about: {
    intro:
    'I am a Computer Science student and aspiring software developer. I am learning C#, Java, web development, and ASP.NET MVC. I enjoy creating practical projects and improving my programming skills.',
    
    goal:
    'My goal is to start my career as a software developer, work on real-world projects, and continuously improve my technical and problem-solving skills.',
    interests:[
    'Web Development',
    'C# and Java Programming',
    'ASP.NET MVC',
    'Building Practical Projects'
  ],

   profileImage: '/assets/images/sidProfile (2).jpeg',
    profileFallback: "https://img.rocket.new/generatedImages/rocket_gen_img_17660a7f7-1784050502571.png"
  },
  contact: {
    email: 'awasthisiddharth21@gamil.com',
    phone: '+91 7701931556',
    location: 'Kanpur, Uttar Pradesh, India',
    github: 'https://github.com/ItsSidPro',
    linkedin: 'https://www.linkedin.com/in/siddharth1980/'
  },
  resume: '/assets/Siddharth.pdf',
  skills: [
  { name: 'C#', icon: 'CodeBracketIcon', level: 85, color: '#9B59B6', category: 'Language' },
  { name: 'Java', icon: 'CommandLineIcon', level: 78, color: '#E74C3C', category: 'Language' },
  { name: 'HTML', icon: 'GlobeAltIcon', level: 90, color: '#E67E22', category: 'Web' },
  { name: 'CSS', icon: 'SwatchIcon', level: 85, color: '#3498DB', category: 'Web' },
  { name: 'JavaScript', icon: 'BoltIcon', level: 80, color: '#F1C40F', category: 'Web' },
 
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
    github: 'https://github.com/ArnavOG/StudentManagementSystem',
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
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Government Polytechnic Sikandra, Kanpur Dehat, UP',
    location: 'Kanpur Dehat, uttar Pradesh, India',
    year: '2024 - Expected 2027 .Currently pursuing',
    description:
    'Currently pursuing my diploma and learning programming, web development, databases, and software development.',
    grade: 'CGPA: 8.2 / 10',
    icon: 'AcademicCapIcon'
  },
  {
    id: 2,
    degree: 'Higher Secondary (12th)',
    institution: 'Jugraj Singh Inter College, Gurdahi Khurd, Kanpur Dehat',
    location: 'Kanpur Dehat, uttar Pradesh, India',
    year: '2024',
    description:
    'Completed my 12th education in Science stream with Mathematics. Developed a strong foundation in Mathematics, Science, and basic computer concepts.',
    grade: 'Percentage: 79%',
    icon: 'BookOpenIcon'
  },
 {
    id: 2,
    degree: 'High School (10th)',
    institution: 'Jugraj Singh Inter College, Gurdahi Khurd, Kanpur Dehat',
    location: 'Kanpur Dehat, uttar Pradesh, India',
    year: '2022',
    description:
    'Science stream with Computer Science as elective subject. Developed foundational programming skills in C++ and Python.',
    grade: 'Percentage: 79%',
    icon: 'BookOpenIcon'
  }]

};