import { useState } from "react";
import "./ButtonContactComponent.scss";
import { useTranslation } from "react-i18next";
function ButtonContactComponent() {
  let [isOpen, setIsOpen] = useState(false);
  let { t } = useTranslation();
  const openContact = () => {
    let buttonWrapper = document.querySelector(".button_wrapper");
    let ins = buttonWrapper.querySelector(".instagram");
    let tiktok = buttonWrapper.querySelector(".tiktok");
    let github = buttonWrapper.querySelector(".github");

    if (!isOpen) {
      ins.classList.add("active");
      tiktok.classList.add("active");
      github.classList.add("active");
      setIsOpen(true);
    } else {
      ins.classList.remove("active");
      tiktok.classList.remove("active");
      github.classList.remove("active");
      setIsOpen(false);
    }
  };

  const redirectLink = (name) => {
    if (name === "ins" && isOpen) window.location.href = "https://www.instagram.com/koutarousatomi/";
    if (name === "tik" && isOpen) window.location.href = "https://www.tiktok.com/@satomikoutarou";
    if (name === "git" && isOpen) window.location.href = "https://github.com/SatomiJin";
  };

  return (
    <div className="button-contact_container">
      <div
        className="button_wrapper"
        title={t("moreContact")}
        onClick={(e) => {
          e.stopPropagation();
          openContact();
        }}
      >
        {isOpen ? <i className="bx bxl-dropbox"></i> : <i className="bx bxs-box"></i>}
        <div className="item instagram" onClick={() => redirectLink("ins")}>
          <i className="bx bxl-instagram"></i>
        </div>
        <div className="item tiktok" onClick={() => redirectLink("tik")}>
          <i className="bx bxl-tiktok"></i>
        </div>
        <div className="item github" onClick={() => redirectLink("git")}>
          <i className="bx bxl-github"></i>
        </div>
      </div>
    </div>
  );
}

export default ButtonContactComponent;
