import { useTranslation } from "react-i18next";
import "./ContactComponent.scss";
function ContactComponent() {
  let { t } = useTranslation();
  return (
    <div id="contact" className="contact_container">
      <div className="container">
        <div className="row component_background" data-aos="flip-right" data-aos-duration="1000">
          <div className="contact_title col-12">{t("contact")}</div>
          <div className="contact_items">
            <div className="item">
              <div className="item_title">
                <i className="bx bxs-location-plus"></i> Location
              </div>
              <div className="item_value">Thu Duc, Ho Chi Minh City</div>
            </div>{" "}
            <div className="item">
              <div className="item_title">
                <i className="bx bxl-gmail"></i> {t("gmail")}
              </div>
              <div className="item_value">trongdh0904@gmail.com</div>
            </div>
            <div className="item">
              <div className="item_title">
                <i className="bx bx-mobile-alt"></i> {t("phone")}
              </div>
              <div className="item_value">+84 349186599</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
