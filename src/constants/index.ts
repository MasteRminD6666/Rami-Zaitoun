export const links = {
  contactEmail: "ramikhzaitoun@gmail.com",
  sourceCode: "",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 7,
    name: "Skills",
    href: "#skills-growth",
  },
  {
    id: 8,
    name: "Process",
    href: "#process",
  },
  {
    id: 5,
    name: "Experience",
    href: "#work",
  },
  {
    id: 6,
    name: "Certificate",
    href: "#certificate",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },

] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Rami Zaitoun",
    position: "Frontend Developer",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEc1vG2rrRUAA/profile-displayphoto-shrink_100_100/B4DZXF.3rIGkAU-/0/1742783348085?e=1778112000&v=beta&t=jihZYXbxF2q3eWOFYnuZmduPvUEyMIN8vzM08wLN1WA",
    review:
      "Rami Zaitoun delivers high-quality frontend solutions with strong attention to detail, performance, and user experience."
  },
] as const;

export const myProjects = [
  {
    title: "EFAWATEERCOM | Payment Portal",
    desc: " it's a Payment Gateway It aggregates all your financial obligations utilities (water/electricity), telecom, government fees, traffic fines, university tuition, and even private school fees into one place",
    subdesc:
      "Built as a unique Payment Gateway app with Angular, Tailwind CSS, TypeScript, ionic.",
    href: "https://efawateercom.jo/",
    texture: "/textures/project/efawateercom.mp4",
    logo: "",
    logoVideo: "https://objectstore.madfoat.com/efawateercom-website/assets/logo.mp4",
    logoStyle: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/angular.svg",
      },
      {
        id: 2,
        name: "PrimeNG",
        path: "/assets/PrimeNG.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Ionic",
        path: "/assets/ionic.svg",
      },
    ],
  },
  {
    title: "TADARB | LMS",
    desc: "built Tadarb, a large-scale learning platform created for Saudi Vision 2030. I was responsible for making a fast and easy-to-use system that hosts more than 1,150 professional courses for thousands of people. My main goal was to take complex technology and turn it into a smooth, simple experience.",
    subdesc:
      "I made sure that every user could learn and improve their skills without any technical frustration or delays.",
    href: "https://www.tadarab.com/",
    texture: "/textures/project/tadarb.mp4",
    logo: "/assets/tadarb.png",
    logoClassName: "h-auto w-29",
    logoFilter:
      "brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(6297%) hue-rotate(349deg) brightness(95%) contrast(110%)",
    logoStyle: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Nuxt",
        path: "/assets/nuxt.svg",
      },
    ],
  },
  {
    title: "leaserAvenue | Beauty Salon Management System",
    desc: "I developed a custom management system for LaserAvenue to handle their daily operations and high-end client services. I built a smooth booking and scheduling system that makes it easy for customers to set appointments and for the staff to manage their time.",
    subdesc:
      "I also created a secure and user-friendly admin dashboard for the staff to manage appointments, clients, and services efficiently.",
    href: "https://smileavenueclinics.com/",
    texture: "/textures/project/leaserAvenu.mp4",
    logo: "/assets/LaserAvenue.png",
    logoClassName: "h-auto w-30",
    logoReplaceBlackWithWhite: true,
    logoStyle: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Vuesax",
        path: "/assets/vuesax.svg",
      },
    ],
  },
  {
    title: "Ertyad | LMS",
    desc: "Ertyad LMS (KSA Vision 2030) Developed a premier national training platform providing courses. scalable infrastructure that empowers Saudi citizens through continuous, accessible professional development.",
    subdesc:"",
    href: "https://www.ertyad.com/",
    texture: "/textures/project/Ertyad.mp4",
    logo: "/assets/Ertyad.png",
    logoClassName: "h-auto w-12",
    logoReplaceBlackWithWhite: true,
    logoFilter: "brightness(0) invert(1)",
    logoStyle: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/vue.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Vuetify",
        path: "/assets/v-logo.svg",
      },
    ],
  },
  {
    title: "SASL - Saudi Professional Accreditation for Lawyers",
    desc: "I developed the official certification and LMS platform for SASL, designed to manage the professional accreditation of lawyers in Saudi Arabia",
    subdesc:
      "My goal was to remove the technical complexity from professional licensing",
    href: "https://sasl.sba.gov.sa/",
    texture: "/textures/project/SASL.mp4",
    logo: "/assets/SASL-logo-new.svg",
    logoClassName: "h-auto w-20",
    logoStyle: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "React Native",
        path: "/assets/react-native-1.svg",
      },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "ARABWORK",
    pos: "Frontend Developer",
    duration: "Mar 2024 - Present · 2 yrs 2 mos",
    location: "Amman, Jordan · On-site",
    title:
      "Building and scaling front-end systems for production platforms with a strong focus on performance, clean architecture, and polished user experience.",
    skills: ["React.js", "Next.js", "TypeScript"],
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQGOIEOAPq7Qkg/company-logo_100_100/company-logo_100_100/0/1696420446880/arabwork_logo?e=1778112000&v=beta&t=H2IfgBjoqq-hckgyiU4j-wLb1xfeFA5-zf2SAdNn2SU",
    companyUrl: "https://www.linkedin.com/company/78982912/",
    media: ["/assets/Arabwork1.jpg", "/assets/Arabwork2.jpg"],
    animation: "victory",
  },
  {
    id: 2,
    name: "MadfoatCom",
    pos: "Frontend Developer",
    duration: "Jun 2023 - Jun 2024 · 1 yr 1 mo",
    location: "King Hussein Business Park · Hybrid",
    title:
      "Delivered features for a high-scale real-time bill presentment and payment ecosystem, helping users complete utility and government payments smoothly across web interfaces.",
    skills: ["Angular", "JavaScript", "TypeScript", "Ionic"],
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQHJoUpiNnTq1g/company-logo_100_100/B4DZcDmDiQG8AY-/0/1748111998288?e=1778112000&v=beta&t=-Op1PCOihIXb4HCcWsB3Q6z1M-Ei9gjkT_YPSpQTwa0",
    companyUrl: "https://www.linkedin.com/company/2434030/",
    media: [],
    animation: "clapping",
  },
  {
    id: 3,
    name: "Agents On Cloud",
    pos: "Frontend Developer",
    duration: "Dec 2021 - May 2023 · 1 yr 6 mos",
    location: "King Hussein Business Park · On-site",
    title:
      "Built and maintained enterprise front-end products, translating complex business requirements into intuitive user experiences and scalable UI components.",
    skills: ["JavaScript", "Nuxt.js", "Vue.js", "REST APIs"],
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQHH_MbG8kmvbQ/company-logo_100_100/company-logo_100_100/0/1639217780337?e=1778112000&v=beta&t=0CJR5UjbwnQ1L1mhjXyujYnX3UOPbIWODD-VuFIdjvM",
    companyUrl: "https://www.linkedin.com/company/77586449/",
    media: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQGaiBzPRqbjCQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1691350954778?e=1776848400&v=beta&t=A4Hcuqgb2-QZfQRlBuCPY34sbhWT74-8igFRAVhY5H0",
      "https://media.licdn.com/dms/image/v2/D4D2DAQHED2_3Ffqgsg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1691350840231?e=1777453200&v=beta&t=RHzNP_8pEmPj07jsPBtILcEBqv8ws8R6X8fFtF2wr8I",
      "https://media.licdn.com/dms/image/v2/D4D2DAQHCOnoXTWYqvg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1691350890098?e=1777453200&v=beta&t=iqqktznmMZEnxQTAAojyig_PkMLHGZKFABg6mu_Ml7Y",
    ],
    animation: "salute",
  },
  {
    id: 4,
    name: "ASAC (Abdul Aziz Al Ghurair School)",
    pos: "Full Stack Developer Intern",
    duration: "Jun 2021 - Jan 2022 · 8 mos",
    location: "Amman, Jordan",
    title:
      "Completed an intensive, career-focused training journey and delivered real full-stack projects with a strong foundation in modern web development workflows.",
    skills: ["Time Management", "JavaScript", "Node.js", "React"],
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEiq6rJiiBpxQ/company-logo_100_100/company-logo_100_100/0/1736066847910/asacltuc_logo?e=1778112000&v=beta&t=MihVPE5AOdchRaq8p7yTMhKfuw0x5n7kPrg8RaWziig",
    companyUrl: "https://www.linkedin.com/company/37536654/",
    media: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQFGVItEiovdxQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1691350506581?e=1776848400&v=beta&t=tVYmb4xd1AiYvxS-NnNArQNgAD4Lk1IvAXJNikj4kQc",
      "https://media.licdn.com/dms/image/v2/D4D2DAQE1a4KU8ZhoHw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1691350461122?e=1776848400&v=beta&t=HfqJYM2ks1wiPrAMoSp8IMVsR7tApCThLljRKLVQjI4",
      "https://media.licdn.com/dms/image/v2/D4D2DAQFlc--SK130CQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1691350550458?e=1776848400&v=beta&t=A2SbzOqDwJDvZg-oW1xhUNfsUXbSwcUYxArSenGDbKs",
    ],
    animation: "idle",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/MasteRminD6666",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.svg",
    url: "https://www.linkedin.com/in/rami-zaitoun-655255266/",
  },
] as const;
