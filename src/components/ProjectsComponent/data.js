import srMainImage from "../../assets/images/sr_main.png";
import logoImage from "../../assets/images/logo.png";
import salesMainImage from "../../assets/images/sales_main.png";
import todoMainImage from "../../assets/images/todo_main.png";
import cinemaMainImage from "../../assets/images/cinema_main.png";

export const projects = [
  {
    id: 1,
    name: "SCHWARZER RITTER - E-COMMERCE WEBSITE",
    timeLine: "07-2023 - 08-2023",
    desc: "Developed a comprehensive online e-commerce platform that enables users to browse, select, purchase, and manage products seamlessly",
    webUrl: "https://web-sales-lilac.vercel.app/",
    githubUrlFE: "https://github.com/SatomiJin/Web-sales",
    githubUrlBE: "https://github.com/SatomiJin/sales-backend",
    image: srMainImage,
    tech: ["react", "node", "scss", "bootstrap", "postgresql"],
  },
  {
    id: 2,
    name: "WEBSITE BOOKING CARE",
    timeLine: "08-2023 - 09-2023",
    desc: "Designed and developed an online platform called Booking Care that allows users to schedule appointments with healthcare professionals for medical consultations and services.",
    webUrl: "",
    githubUrlFE: "https://github.com/SatomiJin/KoutaCare-Frontend",
    githubUrlBE: "https://github.com/SatomiJin/KoutaCare-backend",
    image: logoImage,
    tech: ["React", "Node", "Redux", "Bootstrap", "postgresql"],
  },
  {
    id: 3,
    name: "E-COMMERCE WEBSITE - V2",
    timeLine: "01/11/2023 - 15/12/2023",
    desc: " Developed a comprehensive online e-commerce platform that enables users to browse,select, purchase, and manage products seamlessly.",
    webUrl: "https://shop.satomijin.id.vn/",
    githubUrlFE: "https://github.com/SatomiJin/Ecommerce-v2-FE",
    githubUrlBE: "https://github.com/SatomiJin/Ecommerce-v2-BE",
    image: salesMainImage,
    tech: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    id: 4,
    name: "TODO PAGE - RESPONSIVE",
    timeLine: "23/05/2024 - 05/06/2024",
    desc: "Developed a responsive To-Do web application with React.js, Node.js, and PostgreSQL, featuring user authentication, role-based access control, and an admin management dashboard.",
    webUrl: "https://todo-fe-mauve.vercel.app/",
    githubUrlFE: "https://github.com/SatomiJin/Todo-FE",
    githubUrlBE: "https://github.com/SatomiJin/Todo-BE",
    image: todoMainImage,
    tech: ["HTML", "CSS", "Bootstrap 5", "PosgreSQL"],
  },
  {
    id: 5,
    name: "WATCHING MOVIE - RESPONSIVE",
    timeLine: "01/08/2024 - 01/09/2024",
    desc: "Developed a responsive watching movie web application with React.js, Node.js, and PostgreSQL, featuring user authentication, role-based access control, and an admin management dashboard.",
    webUrl: "https://cinema-kappa-ten.vercel.app/",
    githubUrlFE: "https://github.com/SatomiJin/cinema-",
    githubUrlBE: "",
    image: cinemaMainImage,
    tech: ["REACTJS", "NODEJS", "BOOTSTRAP 5"],
  },
];
