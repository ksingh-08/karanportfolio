export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Skilled in creating dynamic and responsive web applications that enhance user experiences.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/portfolio.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Building Bridges Across Digital Frontiers",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Accomplished post-production specialist with a passion for crafting compelling visual narratives.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Exploring opportunities for freelance web development projects to expand my portfolio.",
    description: "Currently Engaged In",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// data/index.ts
// data/index.ts
export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LeetCode Coach",
    des: "AI-powered assistant for solving LeetCode problems with step-by-step guidance.",
    img: "/leetcode.png",
    iconLists: ["/icons/typescript.svg", "/icons/react.svg", "/icons/ai.svg"],
    link: "https://github.com/ksingh-08/LeetcodeCoach.git"
  },
  {
    id: 2,
    title: "ThinkFlow",
    des: "Real-time collaborative note-taking app with multi-user editing and live presence sync.",
    img: "/thinkflow.png",
    iconLists: ["/icons/typescript.svg", "/icons/nextjs.svg", "/icons/firebase.svg"],
    link: "https://github.com/ksingh-08/thinkflow",
    liveLink: "https://thinkflow-navy.vercel.app/"
  },
  {
    id: 3,
    title: "Blog Application",
    des: "Full-stack blog platform with content creation, publishing, and serverless backend using Cloudflare Workers.",
    img: "/blog.png",
    iconLists: ["/icons/react.svg", "/icons/prisma.svg", "/icons/postgresql.svg"],
    link: "https://github.com/ksingh-08/blog-medium-app",
    liveLink: "https://blog-medium-app-three.vercel.app/signup"
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "Personal portfolio website built with Next.js, TailwindCSS, and Aceternity UI for a sleek, responsive design.",
    img: "/portfolio.png",
    iconLists: ["/icons/nextjs.svg", "/icons/tailwindcss.svg", "/icons/aceternity.svg"],
    link: "https://github.com/ksingh-08/karanportfolio.git",
    liveLink: "https://portfolio-chi-teal-22.vercel.app/"
  }
];

export const testimonials = [
  
  {
    quote:
      "As the event head of TEDx LNMIIT, I had the pleasure of witnessing Karan's exceptional talent as a content creator. His ability to conceptualize and produce engaging narratives played a pivotal role in shaping our event's success. His dedication to storytelling and his creative vision enriched our content, captivating our audience and leaving a lasting impression. Karan consistently demonstrated professionalism and innovation, making him a valuable asset to our team.",
    name: "Keshav Agarwal",
    title: "Event Head - TEDxLNMIIT",
    img:"/keshavsir.jpg",
  },
  {
    quote:
      "As the content lead at DevOps Insiders, I had the privilege of collaborating with Karan, who consistently demonstrated outstanding creativity and expertise as a content creator. His ability to craft compelling narratives and deliver engaging content was instrumental in enhancing our online presence and engaging our audience effectively. Karan's dedication to quality and his innovative approach to content creation significantly contributed to our success in delivering valuable insights to our community.",
    name: "Aditya Singh",
    title: "Ex-Content Lead at Devops Insiders",
    img:"/singhsir.jpg",
  },
  {
    quote:
      "As a member of Vivacity, Karan showcased remarkable talent as a content creator. His ability to craft engaging narratives and produce compelling content was instrumental in bringing our cultural fest to life. His creative approach and dedication to excellence were invaluable to our team, leaving a lasting impact on our audience.",
    name: "Vuuren Mohanty",
    title: "Ex-Creative Head of Vivacity LNMIIT, Jaipur",
    img:"/montysir.jpg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   img:"",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   img:"",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Aspiring Full Stack Devloper",
    desc: "As an aspiring full-stack developer, I am passionate about building dynamic web applications,that seamlessly integrate front-end and back-end functionalities. I strive to create intuitive user experiences while expanding my skills in technologies like the MERN stack, Next.js, PostgreSQL, and Prisma, aiming to deliver robust solutions that meet modern digital demands.",
    className: "md:col-span-2",
    thumbnail: "/dev1.svg",
  },
  {
    id: 2,
    title: "Creative Head: Vivacity, LNMIIT",
    desc: "As Creative Head for Vivacity, the annual cultural fest of LNMIIT Jaipur,  I lead innovative initiatives, design captivating experiences, and collaborate with teams to elevate cultural celebrations through creativity and imagination.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Core Member: TedxLNMIIT",
    desc: "As a content creator, I craft compelling narratives, produce engaging videos, and bring ideas to life through visual storytelling, aiming to inspire and captivate audiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Freelance Experience",
    desc: "My freelance work across organizations like DevOps Insiders has allowed me to excel as a content creator. Collaborating on diverse projects, I've crafted engaging narratives, produced compelling content, and tailored creative strategies to meet client objectives. These experiences have enriched my skills in storytelling and content development, contributing to impactful outcomes and client satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/work.svg",
  },
];

export const skills = [
  {
    id: 1,
    category: "Frontend",
    technologies: [
      { name: "React.js", icon: "/icons/react.svg", proficiency: 90 },
      { name: "Next.js", icon: "/icons/nextjs.svg", proficiency: 85 },
      { name: "TypeScript", icon: "/icons/typescript.svg", proficiency: 80 },
      { name: "JavaScript", icon: "/icons/javascript.svg", proficiency: 95 },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg", proficiency: 90 },
      { name: "HTML/CSS", icon: "/icons/html.svg", proficiency: 95 },
    ],
  },
  {
    id: 2,
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg", proficiency: 85 },
      { name: "Express.js", icon: "/icons/express.svg", proficiency: 80 },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", proficiency: 75 },
      { name: "MongoDB", icon: "/icons/mongodb.svg", proficiency: 80 },
      { name: "Prisma", icon: "/icons/prisma.svg", proficiency: 75 },
      { name: "Firebase", icon: "/icons/firebase.svg", proficiency: 70 },
    ],
  },
  {
    id: 3,
    category: "Tools & Others",
    technologies: [
      { name: "Git/GitHub", icon: "/icons/github.svg", proficiency: 85 },
      { name: "Docker", icon: "/icons/docker.svg", proficiency: 70 },
      { name: "Vercel", icon: "/icons/vercel.svg", proficiency: 80 },
      { name: "Figma", icon: "/icons/figma.svg", proficiency: 75 },
      { name: "AI Integration", icon: "/icons/ai.svg", proficiency: 80 },
      { name: "RESTful APIs", icon: "/icons/api.svg", proficiency: 85 },
    ],
  },
];

export const aboutMe = {
  introduction: "I'm Karan Singh, a passionate full-stack developer with a focus on creating beautiful, responsive, and user-friendly web applications.",
  background: "With a strong foundation in modern web technologies and a keen eye for design, I strive to build applications that not only function flawlessly but also provide exceptional user experiences.",
  expertise: "My expertise spans across the entire web development stack, from crafting intuitive user interfaces with React and Next.js to building robust backend systems with Node.js and various databases.",
  approach: "I approach each project with a problem-solving mindset, focusing on clean code, scalability, and performance optimization. I believe in continuous learning and staying updated with the latest industry trends and best practices.",
  interests: "Beyond coding, I have a passion for creative content creation, which has allowed me to develop a unique perspective on user experience and visual storytelling in my web development projects.",
  goals: "I'm constantly seeking opportunities to collaborate on challenging projects that push my boundaries and allow me to grow as a developer while delivering exceptional value to clients and users.",
  education: "B.Tech in Computer Science and Engineering",
  university: "The LNM Institute of Information Technology, Jaipur",
  graduation: "2024",
  location: "Jaipur, Rajasthan, India",
  languages: ["English (Professional)", "Hindi (Native)"],
  hobbies: ["Content Creation", "UI/UX Design", "Learning New Technologies", "Problem Solving"],
};

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/ksingh-08"
  },
  {
    id: 2,
    img: "/twit.svg",
    url:"https://x.com/k_singh_08"
    
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/karan-singh-774ba1227/"
    
  },
];