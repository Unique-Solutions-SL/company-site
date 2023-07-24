// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import swiftui from "./assets/images/Skills/swiftui.png";
import flutter from "./assets/images/Skills/flutter.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import java from "./assets/images/Skills/java.jpg";
import kotlin from "./assets/images/Skills/kotlin.webp";
import laravel from "./assets/images/Skills/laravel.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo1.png";
import services_logo3 from "./assets/images/Services/logo1.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import Skills from "./components/Skills";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "App Development",
    title1: "Web Development",
    firstName: "Unique",
    LastName: "Solutions",
    btnText: "Hire Us",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experience in development",
      },
      {
        count: "100+",
        text: "Projects Worked in our career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "OUR TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Frontend (web)",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Backend (web & mobile)",
        logo: nodejs,
      },
      {
        name: "Laravel",
        para: "Backend (web & mobile)",
        logo: laravel,
      },
      {
        name: "React Native",
        para: "Mobile (ios & android)",
        logo: reactjs,
      },
      {
        name: "Flutter",
        para: "Mobile (ios & android)",
        logo: flutter,
      },
      {
        name: "Swift UI",
        para: "Mobile (ios)",
        logo: swiftui,
      },
      {
        name: "Java",
        para: "Mobile (android)",
        logo: java,
      },
      {
        name: "Kotlin",
        para: "Mobile (android)",
        logo: kotlin,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT WE OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Our company excels in web development, creating stunning and user-friendly websites that captivate and engage your audience. We leverage the latest technologies and industry best practices to deliver exceptional results. Enhance your online presence with our expert web development services. Contact us today.",
        logo: services_logo1,
      },
      {
        title: "Mobile Development",
        para: "",
        logo: services_logo2,
      },
      {
        title: "E-Commerce Development",
        para: "IOur company excels in e-commerce development, creating powerful online stores with seamless functionality and visually appealing designs. We provide secure payment integration, efficient inventory management, and user-friendly interfaces. Elevate your online retail presence with our expert e-commerce development services. Contact us today.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "OUR CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "nimofad@gmail.com",
        icon: GrMail,
        link: "mailto:nimofad@gmail.com",
      },
      {
        text: "+94 71 557 7077",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
