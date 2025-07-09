export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Tech enthusiast with a passion for development.",
    description:
      "17-year-old tech enthusiast with 2 years of web development experience, eager to build and learn.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI Mock Interview web app",
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
    title: "FullStack Ecommerce web application",
    des: "A comprehensive ecommerce platform with full-stack features, enabling users to browse, shop, and manage orders seamlessly.",
    img: "/p1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/node.webp", "mDB.webp"],
    link: "https://mofiyin.vercel.app",
    github: "https://github.com/Enisco29/greencart",
  },
  {
    id: 2,
    title: "Quickblog - A Blogging Application",
    des: "A modern blogging platform for creating, editing, and sharing posts with an intuitive and user-friendly interface.",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/node.webp", "mDB.webp"],
    link: "https://quickblog-theta.vercel.app",
    github: "https://github.com/Enisco29/quickblog",
  },
  {
    id: 3,
    title: "Quickchat - Chatting Web App",
    des: "A real-time chat application enabling seamless communication with modern features and a clean UI.",
    img: "/p3.webp",
    iconLists: ["/re.svg", "/tail.svg", "/node.webp", "mDB.webp"],
    link: "https://quickchat-tan.vercel.app",
    github: "https://github.com/Enisco29/quickchat",
  },
  {
    id: 4,
    title: "UI design of Bookmark Page",
    des: "A visually appealing and interactive UI design for a bookmark landing page, inspired by modern web standards.",
    img: "/p4.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://bookmark-landing-page-master-green.vercel.app",
    github: "https://github.com/Enisco29/bookmark-landing-page-master",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Fisayo was a game-changer for our business. He delivered high-quality results on time and communicated clearly throughout the project. I highly recommend him!",
    img: "martins.jpg",
    name: "MR Martins",
    title: "CEO at Tinzwave",
  },
  {
    quote:
      "Fisayo's expertise and dedication exceeded our expectations. He brought our vision to life with professionalism and creativity. We look forward to future collaborations!",
    img: "ogechuku.jpg",
    name: "MRS Ogechukwu",
    title: "CEO at Melodia Coding Academy",
  },
  {
    quote:
      "Collaborating with Fisayo was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Fisayo's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Fisayo is the ideal partner.",
    img: "profile.svg",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "melodia",
    img: "/melodia.webp",
    nameImg: "",
  },
  {
    id: 2,
    name: "megatek",
    img: "/megatek.webp",
    nameImg: "",
  },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teacher at Melodia Coding Academy",
    desc: "Instructed and mentored students in modern web development, creating engaging lesson plans and hands-on coding projects to foster a strong foundation in programming.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-friendly features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Enisco29",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/ennycodes",
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  //   url: "https://linkedin.com/in/your-profile"
  // },
];
