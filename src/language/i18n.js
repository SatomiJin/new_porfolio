import i18next from "i18next";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "vi",
  lng: "vi",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    vi: {
      translation: {
        intro: "Giới Thiệu",
        aboutMe: "Về Tôi",
        projects: "Dự án",
        contact: "Liên hệ",
        introMe:
          "Ya Hallo! Tôi là Đồng Hữu Trọng hoặc bạn có thể gọi tôi là Jin, một FullStack Developer đến từ Việt Nam",
        downloadCV: "Tải CV",
        lang: "Ngôn ngữ",
        aboutMeTitle:
          "Một FullStack Developer tới từ Thành Phố Hồ Chí Minh, Việt Nam",
        aboutMe1:
          "Xin chào, Tôi là Đồng Hữu Trọng (Jin), Một FullStack Developer. Tôi sử dụng ReactJS cho FrontEnd và NodeJS cho BackEnd",
        aboutMe2:
          "Đối với cơ sở dữ liệu, tôi có kinh nghiêm với cơ sở dữ liệu quan hệ (PostgreSQL, SQL Server) và cơ sở dữ liệu NoSQL như MongoDB",
        aboutMe3:
          " Hiện tại, Tôi tập chung vòa ReactJS cùng với Bootstrap 5... Để thiết kế giao diện người dùng.",
        location: "Vị Trí",
        gmail: "Địa Chí Mail",
        phone: "Số Điện Thoại",
        moreContact: "Thêm kết nối",
      },
    },
    en: {
      translation: {
        intro: "Introduction",
        aboutMe: "About Me",
        projects: "Projects",
        contact: "Contact Me",
        introMe:
          "Ya Hallo, I'm Đồng Hữu Trọng or you can call me by Jin, a FullStack Developer from VietNam.",
        downloadCV: "Download CV",
        lang: "Language",
        aboutMeTitle: "FullStack Developer from Ho Chi Minh City, Viet Nam",
        aboutMe1:
          "Hello, I'm Đồng Hữu Trọng (Satomi Jin) a Fullstack developer specializing in Frontend with ReactJS and Backend with NodeJS.",
        aboutMe2:
          "When it comes to databases, I have experience with relational databases like PostgreSQL and SQL Server, as well as NoSQL databases such as MongoDB.",
        aboutMe3:
          "Currently, I am focused on ReactJS along with Bootstrap 5 for designing user interfaces.",
        location: "Location",
        gmail: "Gmail Address",
        phone: "Phone Number",
        moreContact: "More contact",
      },
    },
    zh: {
      translation: {
        intro: "介绍",
        aboutMe: "关于我",
        projects: "项目",
        contact: "联系我",
        introMe:
          "你好！我是 Đồng Hữu Trọng，你也可以叫我 Jin，一名来自越南的全栈开发工程师。",
        downloadCV: "下载简历",
        lang: "语言",
        aboutMeTitle: "来自越南胡志明市的全栈开发工程师",
        aboutMe1:
          "你好，我是 Đồng Hữu Trọng（Jin），一名全栈开发工程师。我在前端使用 ReactJS，在后端使用 NodeJS。",
        aboutMe2:
          "在数据库方面，我有关系型数据库（PostgreSQL, SQL Server）以及 NoSQL 数据库（如 MongoDB）的经验。",
        aboutMe3: "目前，我专注于使用 ReactJS 和 Bootstrap 5 来设计用户界面。",
        location: "位置",
        gmail: "邮箱地址",
        phone: "电话号码",
        moreContact: "更多联系方式",
      },
    },
  },
});

export default i18next;
