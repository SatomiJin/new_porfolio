import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../language/language";
function LanguageComponent() {
  let { i18n } = useTranslation();

  const changeLanguage = (item) => {
    i18n.changeLanguage(item.code);
    localStorage.setItem("language", item.code);
  };
  return (
    <div className="language-component">
      <div className="btn-group">
        <div className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {LANGUAGES.map((item) => {
            return item.code === i18n.language && item.label;
          })}
        </div>
        <ul className="dropdown-menu">
          {LANGUAGES.map((item, index) => {
            return (
              <li key={index} onClick={() => changeLanguage(item)} className="dropdown-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LanguageComponent;
