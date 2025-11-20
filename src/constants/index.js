import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  zikrme,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  CC,
  MySQL,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  socialApp,
  youtube,
  ecommerce,
  chatapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  { 
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full stack Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: CC,
  },
  {
    name: "MySql",
    icon: MySQL,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
{
  title: "Full Stack Developer",
  company_name: "ZikrMe",
  icon: zikrme,       // your imported icon
  iconBg: "#383E56",
  date: "May 2025 - Present",
  points: [
    "Developed an interactive restaurant and hotel booking module with advanced search, filtering, and sorting features, improving user engagement by 45%.",
    "Built a dynamic reservation system enabling users to select date, time, and seating preferences, reducing booking errors and enhancing usability.",
    "Optimized frontend performance with React hooks, reusable components, and efficient API integrations, improving page responsiveness by 40%.",
    "Collaborated with backend and design teams to deliver scalable and user-friendly features.",
  ],
},
  {
  title: "Full Stack Developer",
  company_name: "Freelancing",
  icon: meta,       // your imported icon
  iconBg: "#383E56",
  date: "June 2025 - July 2025",
  points: [
    "Designed and developed an offline inventory management desktop application for multi-department workflows, employee operations, and lot-based product tracking.",
    "Engineered a dynamic multi-department inventory system with lot tracking, payment logs, and product stage management, improving operational efficiency by 50%.",
    "Developed auto lot generation and cross-department product movement tracking for seamless workflow automation.",
    "Worked on a full desktop environment using React.js, Electron, Node.js, Express.js, Knex.js, and MySQL for smooth offline data handling.",
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
  name: "Real-time Chat App",
  description:
    "A real-time chatting platform enabling multiple users to communicate instantly with dynamic avatar profiles generated using the Multiavatar API.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "socket.io", color: "pink-text-gradient" },
  ],
  image: chatapp,   // your image import variable
  source_code_link: "https://github.com/Raghu-Daksh/flasko-chat-app",
},
{
  name: "Social Media Application",
  description:
    "A social media platform that allows users to log in with Google, view articles, post their own articles, and explore content shared by others.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "css", color: "green-text-gradient" },
    { name: "google-auth", color: "pink-text-gradient" },
  ],
  image: socialApp,   // your image import variable
  source_code_link: "https://flasko.netlify.app/",
}
  ,
  {
  name: "YouTube Clone",
  description:
    "A YouTube-like platform where users can log in with Google and explore videos using the YouTube Data API, offering a familiar and intuitive streaming experience.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "scss", color: "green-text-gradient" },
    { name: "youtube-api", color: "pink-text-gradient" },
  ],
  image: youtube,   // your image import variable
  source_code_link: "https://github.com/Raghu-Daksh/youtube-clone",
}
  ,
{
  name: "E-Commerce Web App",
  description:
    "A fully responsive e-commerce web application featuring category-based product browsing, advanced filtering, product search, sorting, and a detailed product view with an image carousel. Built using reusable components to deliver a smooth and modern shopping experience.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "css", color: "green-text-gradient" },
    { name: "ecommerce-ui", color: "pink-text-gradient" },
  ],
  image: ecommerce,     // your project image import
  source_code_link: "https://flaskoshop.onrender.com",   // add your GitHub link
}


];

export { services, technologies, experiences, testimonials, projects };
