import { useEffect } from "react";
import LanguageComponent from "../../../components/LanguageComponent/LanguageComponent";
import "./MobileHeader.scss";
import { useTranslation } from "react-i18next";
function MobileHeader() {
  let { t } = useTranslation();
  useEffect(() => {
    let nav = document.querySelector(".mobile-header_container");
    let topOfNav = nav.offsetTop;

    const fixedNavMB = () => {
      if (window.scrollY >= topOfNav && window.scrollY > 300) {
        nav.classList.add("fixed-nav_mb");
      } else {
        nav.classList.remove("fixed-nav_mb");
      }
    };
    window.addEventListener("scroll", fixedNavMB);
    return () => {
      window.removeEventListener("scroll", fixedNavMB);
    };
  }, []);

  const redirect = (id) => {
    window.location.href = `#${id}`;
  };
  return (
    <div className="mobile-header_container">
      <div className="mobile-menu row">
        <div className="mobile-menu_item">
          <i
            className="bx bx-menu-alt-left"
            type="button"
            id="dropdownMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
            <li>
              <div className="dropdown-item" onClick={() => redirect("intro")}>
                {t("intro")}
              </div>
            </li>
            <li>
              <div className="dropdown-item" onClick={() => redirect("about")}>
                {t("aboutMe")}
              </div>
            </li>
            <li>
              <div className="dropdown-item" onClick={() => redirect("project")}>
                {t("projects")}
              </div>
            </li>
            <li>
              <div className="dropdown-item" onClick={() => redirect("contact")}>
                {t("contact")}
              </div>
            </li>
          </ul>
        </div>
        <div className="mobile-menu_item logo" title="Satomi Jin">
          Satomi Jin
        </div>
        <div className="mobile-menu_item language" title={t("lang")}>
          <LanguageComponent />
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
