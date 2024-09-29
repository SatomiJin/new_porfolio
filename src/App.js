import { useTranslation } from "react-i18next";
import LayoutDefault from "./layout/LayoutDefault/LayoutDefault";
import { useEffect } from "react";
import IntroComponent from "./components/IntroComponent/IntroComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";

function App() {
  let { i18n } = useTranslation();
  useEffect(() => {
    let langUser = navigator.language?.split("-")[0];
    let langUserSto = localStorage.getItem("language");
    if (langUserSto) {
      i18n.changeLanguage(langUserSto);
      localStorage.setItem("language", langUserSto);
    } else if (!langUserSto && langUser) {
      i18n.changeLanguage(langUser);
      localStorage.setItem("language", langUser);
    }
  }, []);
  return (
    <div className="App">
      <LayoutDefault />
    </div>
  );
}

export default App;
