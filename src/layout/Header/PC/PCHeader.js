import { useEffect } from "react";
import "./PCHeader.scss";
import { useTranslation } from "react-i18next";
import LanguageComponent from "../../../components/LanguageComponent/LanguageComponent";
const PCHeader = () => {
  let { t } = useTranslation();
  useEffect(() => {
    let nav = document.querySelector(".pc-header_container");
    let topOfNav = nav.offsetTop;
    const fixedNav = () => {
      if (window.scrollY >= topOfNav && window.scrollY > 300) {
        nav.classList.add("fixed-nav");
      } else {
        nav.classList.remove("fixed-nav");
      }
    };
    window.addEventListener("scroll", fixedNav);

    return () => {
      window.removeEventListener("scroll", fixedNav);
    };
  }, []);
  const redirect = (id) => {
    window.location.href = `#${id}`;
  };
  return (
    <div className="pc-header_container">
      <div className="row">
        <div className="header_item col-2">Satomi Jin</div>
        <div className="header_item col-2" onClick={() => redirect("intro")}>
          {t("intro")}
        </div>
        <div className="header_item col-2" onClick={() => redirect("about")}>
          {t("aboutMe")}
        </div>
        <div className="header_item col-2" onClick={() => redirect("project")}>
          {t("projects")}
        </div>
        <div className="header_item col-2" onClick={() => redirect("contact")}>
          {t("contact")}
        </div>
        <div className="header_item col-2">
          <LanguageComponent />
        </div>
      </div>
    </div>
  );
};

export default PCHeader;
