export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Building ethical,explinable,and useful ai models",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptive like my models-open to global collaboration",
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
    title: "Ai-enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a ai medical system",
    description: "The Inside Scoop",
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

export const projects = [
  {
    id: 1,
    title: "Automated Attendance System",
    des: "An automated attendance system that uses YOLO to detect both faces and ID cards, ensuring secure and accurate attendance logging.",
    img: "/attu.jpg",
    iconLists: ["/py1.svg","/qt.svg"],
    link: "https://github.com/SeninAshraf/Automated-Attendance-System",
  },
  {
    id: 2,
    title: "Intruder Detection System",
    des: "An intruder detection system using YOLO-based face recognition that alerts instantly via Telegram when an unknown face is detected.",
    img: "/intru.jpg",
    iconLists: ["/py1.svg"],
    link: "https://github.com/SeninAshraf/Intruder-Detection",
  },
  {
    id: 3,
    title: "AI Fitness Tracker",
    des: "An AI-powered fitness app using MediaPipe to track body posture in real-time and provide instant feedback on workout form..",
    img: "/ish.jpg",
    iconLists: ["/html.svg"],
    link: "https://github.com/SeninAshraf/Ai-Pose-Estimation-And-Curl-Tracker",
  },
  {
    id: 4,
    title: "Study Planner",
    des: "An Optimizrd Study Planner which contain the PDF notes,schedules,Teacher's advice etc..",
    img: "/stu.jpg",
    iconLists: ["/html.svg"],
    link: "https://github.com/SeninAshraf/study-plan",
  },
];



export const companies = [
  {
    id: 1,
    name: "HTML",
    img: "/html.svg",
    nameImg: "/htmlNamee.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/py1.svg",
    nameImg: "/pythonName.svg",
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
    title: "Web Design",
    desc: "Custom, responsive website design tailored to your brand. From simple landing pages to complex web applications with modern UI/UX principles.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Custom Projects",
    desc: "Bespoke software solutions built to your specifications. Whether you need automation, data processing, or specialized tools, I can develop it.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ai Career Consulting",
    desc: "Expert guidance on implementing AI solutions. From computer vision systems to predictive models, I'll help you leverage AI for your business needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
export const testimonials = [
  {
    image: "/cer1.jpg",
    title: "Mastering NLP and Computer Vision",
    issuer: "Alison",
    date: "January 2025"
  },
  {
    image: "/cer2.jpg",
    title: "Apache PIG 101",
    issuer: "IBM",
    date: "Feb 2025"
  },
  {
    image: "/cer3.jpg",
    title: "R Programing",
    issuer: "Simple Learn",
    date: "Dec 2024"
  },
  // Add more certificates as needed
];