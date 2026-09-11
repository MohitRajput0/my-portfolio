import profileImage from "../assets/profile/profile.jpg";
// ============================================================================
// CENTRALIZED PORTFOLIO DATA
// Edit everything about this site — name, links, skills, projects, education,
// certifications, training — right here. No UI component needs to change.
// ============================================================================

const portfolioData = {
  personal: {
    name: "Mohit Kumar",
    firstName: "Mohit",
    title: "Computer Science Student",
    dynamicTitles: [
      "Cloud & Full-Stack Developer",
      "DevOps Enthusiast",
      "AI-Powered App Builder",
    ],
    badge: "Computer Science Engineering Student",
    tagline:
      "I build real-world applications across cloud infrastructure, full-stack development, AI-powered systems, and automation.",
    email: "mohitkudra@gmail.com",
    phone: "+91-9304866909",
    location: "Phagwara, Punjab, India",
    profileImage: profileImage,
    resume: "/resume.pdf",
  },

  social: {
    github: "https://github.com/MohitRajput0",
    linkedin: "https://www.linkedin.com/in/mohitkumaarsinghh/",
    email: "mailto:mohitkudra@gmail.com",
  },

  about: {
    intro:
      "I'm a third-year Computer Science Engineering student at Lovely Professional University, currently building production-style systems across cloud infrastructure, full-stack development, and applied AI.",
    focus:
      "My recent work centers on Infrastructure-as-Code deployments on AWS, and full-stack applications that use retrieval-augmented generation to make documents searchable and understandable.",
    interests: [
      "Cloud Infrastructure & DevOps",
      "Full-Stack Development",
      "AI-Powered Applications",
      "Data Structures & Algorithms",
    ],
    status: "B.Tech CSE · 3rd Year · Lovely Professional University",
  },

  skills: {
    languages: ["C++", "JavaScript", "Python"],
    frameworks: ["HTML", "CSS", "React"],
    cloud: ["AWS S3", "AWS EC2"],
    databases: ["MySQL", "PostgreSQL", "SQL"],
    tools: ["Docker"],
    fundamentals: ["DBMS", "Computer Networks", "OOP", "SQL"],
    softSkills: ["Problem Solving", "Team Player", "Learning Agility"],
  },

  projects: [
    {
      id: "cloudforge",
      name: "CloudForge",
      subtitle: "Automated Cloud Deployment Platform",
      description:
        "An automated cloud deployment platform designed to simplify application delivery by automating deployment, infrastructure provisioning, and cloud operations.",
      problem:
        "Manual deployment workflows slow teams down and introduce inconsistency between environments.",
      solution:
        "An integrated CI/CD and Infrastructure-as-Code pipeline that takes code from commit to a running, monitored service on AWS with minimal manual intervention.",
      status: "In Development",
      date: "Sep 2026 – Present",
      technologies: [
        "Docker",
        "GitHub Actions",
        "AWS",
        "Terraform",
        "ECS",
        "ECR",
        "VPC",
        "IAM",
        "CloudWatch",
        "CI/CD",
        "IaC",
      ],
      features: [
        "End-to-end CI/CD pipeline using GitHub Actions and Docker",
        "Automated build, test, and containerization stages",
        "Deployment to AWS ECS with images managed via Amazon ECR",
        "Infrastructure provisioned with Terraform (IaC)",
        "VPC, networking, IAM, and load balancing configuration",
        "Monitoring and troubleshooting via AWS CloudWatch",
      ],
      architecture: [
        "Code",
        "Build",
        "Test",
        "Docker",
        "Amazon ECR",
        "AWS ECS",
        "Load Balancer",
        "CloudWatch",
      ],
      github: "https://github.com/MohitRajput0",
      liveDemo: null,
      featured: true,
    },
    {
      id: "digibook",
      name: "Digi Book",
      subtitle: "AI-Powered Cloud Academic Resource Platform",
      description:
        "A cloud-based academic resource platform designed to simplify the storage, discovery, and understanding of educational documents through AI-powered learning features.",
      problem:
        "Students accumulate large volumes of academic documents that are hard to search, summarize, and learn from efficiently.",
      solution:
        "A full-stack platform that stores documents in the cloud and layers AI features — summarization, Q&A, and semantic search — on top using retrieval-augmented generation.",
      status: "In Development",
      date: "Aug 2026 – Present",
      technologies: [
        "React.js",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "AWS S3",
        "AWS EC2",
        "Gemini API",
        "RAG",
        "pgvector",
        "PyMuPDF",
        "Docker",
        "REST APIs",
      ],
      features: [
        "Full-stack app built with React.js, FastAPI, and PostgreSQL",
        "Document storage on AWS S3, containerized with Docker",
        "PDF summarization and automated MCQ generation",
        "Document Q&A powered by the Gemini API and RAG",
        "Semantic search using vector embeddings and PostgreSQL pgvector",
        "Text extraction pipeline built on PyMuPDF",
      ],
      architecture: [
        "User",
        "React Frontend",
        "FastAPI",
        "PyMuPDF",
        "Embeddings",
        "pgvector",
        "RAG + Gemini",
        "AI Response",
      ],
      github: "https://github.com/MohitRajput0",
      liveDemo: null,
      featured: true,
    },
  ],

  problemSolving: {
    headline: "400+ Coding Problems Solved",
    platforms: ["Code Tantra", "NeoColab", "LeetCode"],
    areas: [
      "DSA Using C++",
      "Algorithmic Problem Solving",
      "Complexity Analysis",
      "Data Structures",
    ],
    codingProfiles: {
      leetcode: null,
      codeTantra: null,
      neoColab: null,
    },
  },

  training: [
    {
      title: "DSA Using C++",
      organization: "Lovely Professional University",
      date: "Jun 2026 – Jul 2026",
      link: null,
      points: [
        "Structured training in Data Structures and Algorithms using C++",
        "Applied concepts to build a Student Record Management System",
        "Implemented storing, searching, updating, and deleting operations",
        "Strengthened complexity analysis and efficient programming skills",
      ],
    },
  ],

  certifications: [
    {
      name: "Oracle Cloud Infrastructure AI Foundations Associate",
      organization: "Oracle University",
      platform: "Oracle MyLearn",
      date: "Aug 2026",
      link: null,
    },
    {
      name: "Oracle AI Database Foundations Associate",
      organization: "Oracle University",
      platform: "Oracle MyLearn",
      date: "Aug 2026",
      link: null,
    },
    {
      name: "Database Management System Part 1",
      organization: "Infosys Springboard",
      platform: null,
      date: "Aug 2026",
      link: null,
    },
    {
      name: "Programming Using CPP",
      organization: "Infosys Springboard",
      platform: null,
      date: "Aug 2025",
      link: null,
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "Aug 2024 – Present",
      score: "CGPA: 7.23",
      primary: true,
    },
    {
      degree: "Intermediate",
      field: null,
      institution: "Children's Garden School",
      location: "Bhabhua, Bihar",
      date: "Apr 2023 – Mar 2024",
      score: "72.40%",
      primary: false,
    },
    {
      degree: "Matriculation",
      field: null,
      institution: "DAV Public School",
      location: "Pusauli, Bihar",
      date: "Apr 2020 – Mar 2021",
      score: "83.60%",
      primary: false,
    },
  ],

  achievements: [],
};

export default portfolioData;
