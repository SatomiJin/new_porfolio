import { useTranslation } from "react-i18next";
import "./AboutMeComponent.scss";
function AboutMeComponent() {
  let { t } = useTranslation();
  return (
    <div className="about-me_container">
      <div className="container">
        <div className="row component_background" data-aos="fade-right" data-aos-duration="1000">
          <div className="content-left col-lg-6 col-md-6 col-sm-12">
            <div className="content-left_title">{t("aboutMe")}</div>
            <div className="content-left_text">
              <div className="text_item-title">{t("aboutMeTitle")}</div>
              <div className="text_item">{t("aboutMe1")}</div>
              <div className="text_item">{t("aboutMe2")}</div>
              <div className="text_item">{t("aboutMe3")}</div>
            </div>
          </div>
          <div className="content-right col-lg-6 col-md-6 col-sm-12">
            <div className="image"></div>
            <div id="project"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeComponent;
