import {
  css,
  html,
  js,
  nextjs,
  tailwind,
  reactjs,
  materialui,
  docker,
} from "../public/assets/skills/index.js";

import {
  sajibVai,
  simonVai,
  sayeem,
  shafin,
  jubayer,
  riduan,
} from "../public/assets/feedback/index.js";

import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FiGitlab, FiTwitter, FiMail } from "react-icons/fi";
export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "",
  },
  {
    id: "about",
    title: "About",
    link: "",
  },
  {
    id: "resume",
    title: "Resume",
    link: "",
  },
  {
    id: "contact",
    title: "Contact",
    link: "",
  },
  {
    id: "blog",
    title: "Blog",
    link: "https://medium.com/@mnijhum",
  },
];

export const skills = [
  {
    id: "skill-1",
    icon: js,
    title: "Javascript",
  },
  {
    id: "skill-2",
    icon: reactjs,
    title: "ReactJS",
  },
  {
    id: "skill-3",
    icon: nextjs,
    title: "NextJs",
  },
  {
    id: "skill-4",
    icon: materialui,
    title: "Material UI",
  },
  {
    id: "skill-5",
    icon: tailwind,
    title: "Tailwind",
  },
  {
    id: "skill-6",
    icon: html,
    title: "HTML",
  },
  {
    id: "skill-7",
    icon: css,
    title: "CSS",
  },
  {
    id: "skill-8",
    icon: docker,
    title: "Docker",
  },
];

export const education = [
  {
    id: "graduation",
    name: "BSc in Computer Science & Engineering",
    institute: "BRAC University",
    grade: "CGPA 3.64/4.00",
    time: "2017-2021",
  },
  {
    id: "HSC",
    name: "Higher Secondary Certificate",
    institute: "Govt. Gurudoyal College, Kishoreganj",
    grade: "GPA 5.00/5.00",
    time: "2014-2016",
  },
];

export const experiences = [
  {
    id: "job-2",
    title: "Software Engineer",
    institute: "InterCloud Limited",
    contributions: [
      { name: "Working as a full time Frontend Developer" },
      {
        name: "Designed and Developed Brilliant Ticketing System frontend for customer support.",
      },
      {
        name: "Contributed building an Electronic Document Management System (EDMS).",
      },
      { name: "Contributed rebuilding Brilliant Admin Portal Frontend" },
    ],
    time: "May 2022 - Present",
  },
  {
    id: "job-1",
    title: "Jr Software Engineer",
    institute: "Together Initiatives (p) Ltd.",
    contributions: [
      {
        name: "Built Backend of a Point of Sale (Pos) Software using Spring Boot",
      },
      {
        name: "Contributed optimizing ROBI's Robotic Process Automation (RPA) using python",
      },
    ],
    time: "November 2021 - February 2022",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Mushfikunnabi brings not only his professional theatrical skill but also his special ability to empathize with competing interests, egos, ages, backgrounds, and competencies to any organization he joins.",
    name: "Jahidul Momin",
    title: "Assistant Manager",
    company: "Intercloud Limited",
    img: sajibVai,
    profile: "https://www.linkedin.com/in/jahidul-momin-63979b9b",
  },
  {
    id: "feedback-2",
    content:
      "A quick learning person always ready to learn new things. I wish him all the best.",
    name: "Simon Islam",
    title: "Software Engineer",
    company: "Intercloud Limited",
    img: simonVai,
    profile: "https://simonislam.com",
  },
  {
    id: "feedback-3",
    content:
      "I am really enjoying working with Nijhum at Intercloud Limited. Whenever he can, he is willing to assist others. I give him a thumbs-up!",
    name: "Sayeem Md Abdullah",
    title: "Software Engineer",
    company: "Intercloud Limited",
    img: sayeem,
    profile: "https://sayeem.me",
  },
  {
    id: "feedback-4",
    content:
      "Nijhum is dedicated to his work. Professionally, he is continuously seeking out opportunities to grow and try new approaches.",
    name: "Shafin Hasnat",
    title: "Software Engineer",
    company: "Intercloud Limited",
    img: shafin,
    profile: "https://shafinhasnat.me",
  },
  {
    id: "feedback-5",
    content:
      "Nijhum, one my close friend, is a kind hearted and cheerfull person. May he be succeed in every way.",
    name: "Sadat Jubayer",
    title: "Software Engineer",
    company: "Worksober",
    img: jubayer,
    profile: "https://smjubayer.me",
  },
  {
    id: "feedback-6",
    content:
      "I am confident that Nijhum would be a valuable member of any tech industry.",
    name: "Jonayed Ahmed Riduan",
    title: "Software Engineer I",
    company: "Neural Semiconductor Limited",
    img: riduan,
    profile: "https://www.linkedin.com/in/jonayed-ahmed-riduan-847878193/",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <BsGithub aria-label="Github" className="fill-white text-xl" />,
    link: "https://github.com/mnijhum",
  },
  {
    id: "social-media-2",
    icon: <FiGitlab aria-label="Gitlab" className="fill-white text-xl" />,
    link: "https://gitlab.com/mnijhum",
  },
  {
    id: "social-media-3",
    icon: <BsLinkedin aria-label="LinkedIn" className="fill-white text-xl" />,
    link: "https://www.linkedin.com/in/mnijhum/",
  },
  {
    id: "social-media-4",
    icon: (
      <CiFacebook
        aria-label="Facebook"
        className="fill-white text-xl rounded-md bg-black"
      />
    ),
    link: "https://www.facebook.com/m.nijhum",
  },
  {
    id: "social-media-5",
    icon: <BsInstagram aria-label="Instagram" className="fill-white text-xl" />,
    link: "https://www.instagram.com/m.nijhum",
  },
  {
    id: "social-media-6",
    icon: <FiMail aria-label="Gmail" className="fill-white text-xl" />,
    link: "mailto:m.nijhum0@gmail.com",
  },
  {
    id: "social-media-7",
    icon: <FiTwitter aria-label="Twitter" className="fill-white text-xl" />,
    link: "https://twitter.com/m_nijhum",
  },
];

// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];

// export const footerLinks = [
//   {
//     title: "Useful Links",
//     links: [
//       {
//         name: "Content",
//         link: "https://www.hoobank.com/content/",
//       },
//       {
//         name: "How it Works",
//         link: "https://www.hoobank.com/how-it-works/",
//       },
//       {
//         name: "Create",
//         link: "https://www.hoobank.com/create/",
//       },
//       {
//         name: "Explore",
//         link: "https://www.hoobank.com/explore/",
//       },
//       {
//         name: "Terms & Services",
//         link: "https://www.hoobank.com/terms-and-services/",
//       },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       {
//         name: "Help Center",
//         link: "https://www.hoobank.com/help-center/",
//       },
//       {
//         name: "Partners",
//         link: "https://www.hoobank.com/partners/",
//       },
//       {
//         name: "Suggestions",
//         link: "https://www.hoobank.com/suggestions/",
//       },
//       {
//         name: "Blog",
//         link: "https://www.hoobank.com/blog/",
//       },
//       {
//         name: "Newsletters",
//         link: "https://www.hoobank.com/newsletters/",
//       },
//     ],
//   },
//   {
//     title: "Partner",
//     links: [
//       {
//         name: "Our Partner",
//         link: "https://www.hoobank.com/our-partner/",
//       },
//       {
//         name: "Become a Partner",
//         link: "https://www.hoobank.com/become-a-partner/",
//       },
//     ],
//   },
// ];

// export const clients = [
//   {
//     id: "client-1",
//     logo: airbnb,
//   },
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
//   },
// ];
