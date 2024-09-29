import { useTranslation } from "react-i18next";
import "./IntroComponent.scss";
import CV from "../../assets/CV/DongHuuTrong_CV.pdf";
function IntroComponent() {
  let { t } = useTranslation();
  return (
    <div id="intro" className="intro-component_container">
      <div className="container">
        <div className="row" data-aos="fade-left" data-aos-duration="1000">
          <div className="content-left col-lg-5 col-md-5 col-sm-12">
            <div className="content-left_image"></div>
          </div>
          <div className="content-right col-lg-7 col-md-7 col-sm-12">
            <div className="content-right_title">FullStack ReactJS/NodeJS Developer</div>
            <div className="content-right_text">{t("introMe")}</div>
            <div className="content-right_social">
              <i className="bx bxl-github"></i>
              <i className="bx bxl-facebook-circle"></i>
            </div>
            <div className="button_wrapper" id="about">
              <a href={CV} download="DongHuuTrong-CV">
                <button type="btn" className="btn btn_download">
                  {t("downloadCV")} .pdf
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
