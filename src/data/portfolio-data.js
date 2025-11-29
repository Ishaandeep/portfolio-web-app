export const personalInfo = {
  name: "Ishaan Deep",
  title: "Software Engineer",
  tagline: "Building scalable microservices and AI-driven applications in the fintech domain",
  email: "ishaandeep5@gmail.com",
  phone: "+91-8797942953",
  location: "India",
  profileImage: "/portfolio-web-app/ishaan-pic.jpeg",
  resumePDF: "/portfolio-web-app/IshaanDeep_Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/ishaan-deep-6294361ba/",
    github: "https://github.com/Ishaandeep",
    twitter: "https://x.com/ishaan_5deep",
    portfolio: "https://ishaandeep.github.io/portfolio-web-app/",
  },
};

export const about = {
  description: `Passionate Software Engineer with expertise in building scalable microservices and AI-driven applications. 
  Experienced in the fintech domain with a strong focus on creating robust backend systems and innovative solutions. 
  Skilled in full-stack development with a particular emphasis on microservices architecture, cloud technologies, 
  and artificial intelligence integration. Committed to writing clean, maintainable code and delivering high-impact solutions.`,

  highlights: [
    "Microservices Architecture",
    "AI-Driven Applications",
    "Scalable Backend Systems",
    "Full-Stack Development",
    "Fintech Domain Expertise",
  ],
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
  Frontend: ["React", "Next.js", "Vue.js", "TailwindCSS", "Redux"],
  Backend: ["FastAPI", "Django", "Microservices", "REST API", "Node.js", "Express.js"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Linux"],
  "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LLMs"],
};

export const experience = [
  {
    id: 1,
    title: "Software Development Engineer (SDE)",
    company: "Finstinct.ai",
    location: "Remote",
    period: "May 25 - Present",
    description: "Leading the development of scalable microservices and AI-driven applications in the fintech domain.",
    achievements: [
      "Led the development of a new product, collaborating with cross-functional teams to handle all application modules.",
      "Leveraged Redis caching to optimize frequent data retrieval and reduce API response latency.",
      "Implemented RabbitMQ-based asynchronous task queues to orchestrate background jobs in inter-service communication.",
      "Developed and integrated REST APIs to enable seamless communication between multiple microservices.",
      "Improved system efficiency through workflow orchestration, reducing manual intervention and deployment time",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "AWS",
      "Azure",
      "MongoDB",
      "SQL",
      "Redis",
      "RabbitMQ",
      "REST API",
      "Microservices",
    ],
  },
  {
    id: 2,
    title: "Software Development Engineer - Intern",
    company: "Finstinct.ai",
    location: "Remote",
    period: "Jan 25 - Apr 25",
    description: "Contributed to building core rendering engine.",
    achievements: [
      "Engineered core components of an in-house Python-based video rendering engine, leveraging NumPy, OpenCV, and PyCairo for high-performance frame generation.",
      "Developed synchronous animation modules and optimized rendering logic, improving both speed and visual quality.",
      "Enhanced system performance through CPU utilization optimization and intelligent caching strategies.",
      "Collaborated with cross-functional teams in Agile environment",
      "Delivered interactive iframe-driven CTA workflows, coordinating with product and design teams for seamless integration into client video experiences.",
    ],
    technologies: ["Python", "Javascript", "FastAPI", "SQL", "MongoDB", "NumPy", "OpenCV", "PyCairo"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Wardrobe Recommendation System",
    description:
      "AI-powered wardrobe management and outfit recommendation system using computer vision and machine learning. Helps users organize their wardrobe digitally and get personalized styling suggestions.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js", "MongoDB"],
    features: [
      "Computer vision-based clothing detection and categorization",
      "ML-powered outfit recommendations based on weather and occasion",
      "User preference learning through collaborative filtering",
      "Virtual wardrobe visualization interface",
    ],
    github: "https://github.com/ishaandeep/wardrobe-recommendation",
  },
  {
    id: 2,
    title: "AI Health Care Detection Research Project",
    description:
      "Research-focused healthcare application leveraging AI for early disease detection and diagnosis. Implements deep learning models for medical image analysis and predictive healthcare analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    technologies: ["Python", "PyTorch", "OpenCV", "TensorFlow", "Logistic Regression", "Support Vector Machine"],
    features: [
      "Deep learning models for medical image classification",
      "Early disease detection with 96% accuracy",
      "Proposed a model to detect diseases at an early stage using Logistic Regression and Support Vector Machine",
    ],
    github: "https://github.com/ishaandeep/ai-healthcare",
  },
  {
    id: 3,
    title: "Awesmart MERN Website",
    description: "A Website using MERN stack for Financial firm Awesmart.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "TailwindCSS", "HTML", "CSS"],
    features: ["A Full Stack Website", "Responsive design with excellent UX"],
    github: "https://github.com/ishaandeep/awesmart",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "University Name",
    period: "2019 - 2023",
    gpa: "X.XX/4.0",
    achievements: [
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Cloud Computing",
      "Academic Excellence Award",
      "Published research paper on AI in Healthcare",
    ],
  },
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "MongoDB Certified Developer",
  "TensorFlow Developer Certificate",
  "Kubernetes Application Developer",
];

export const achievements = [
  {
    title: "Hackathon Winner",
    description: "Won 1st place at XYZ Hackathon for AI-powered healthcare solution",
    year: "2023",
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to major open-source projects with 100+ contributions",
    year: "2022-Present",
  },
];
