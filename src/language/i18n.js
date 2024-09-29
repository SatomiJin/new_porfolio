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
        aboutMeTitle: "Một FullStack Developer tới từ Thành Phố Hồ Chí Minh, Việt Nam",
        aboutMe1:
          "Xin chào, Tôi là Đồng Hữu Trọng (Jin), Một FullStack Developer. Tôi sử dụng ReactJS cho FrontEnd và NodeJS cho BackEnd",
        aboutMe2:
          "Đối với cơ sở dữ liệu, tôi có kinh nghiêm với cơ sở dữ liệu quan hệ (PostgreSQL, SQL Server) và cơ sở dữ liệu NoSQL như MongoDB",
        aboutMe3: " Hiện tại, Tôi tập chung vòa ReactJS cùng với Bootstrap 5... Để thiết kế giao diện người dùng.",
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
        introMe: "Ya Hallo, I'm Đồng Hữu Trọng or you can call me by Jin, a FullStack Developer from Vietnam.",
        downloadCV: "Download CV",
        lang: "Language",
        aboutMeTitle: "FullStack Developer from Ho Chi Minh City, Viet Nam",
        aboutMe1:
          "Hello, I'm Đồng Hữu Trọng (Satomi Jin) a Fullstack developer specializing in Frontend with ReactJS and Backend with NodeJS.",
        aboutMe2:
          "When it comes to databases, I have experience with relational databases like PostgreSQL and SQL Server, as well as NoSQL databases such as MongoDB.",
        aboutMe3: "Currently, I am focused on ReactJS along with Bootstrap 5 for designing user interfaces.",
        location: "Location",
        gmail: "Gmail Address",
        phone: "Phone Number",
        moreContact: "More contact",
      },
    },
  },
});

export default i18next;
