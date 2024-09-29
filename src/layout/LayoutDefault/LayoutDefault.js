import AboutMeComponent from "../../components/AboutMeComponent/AboutMeComponent";
import ButtonContactComponent from "../../components/ButtonContactComponent/ButtonContactComponent";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import IntroComponent from "../../components/IntroComponent/IntroComponent";
import ProjectsComponent from "../../components/ProjectsComponent/ProjectsComponent";
import Footer from "../Footer/Footer";
import MobileHeader from "../Header/Mobile/MobileHeader";
import PCHeader from "../Header/PC/PCHeader";
import "./LayoutDefault.scss";
const LayoutDefault = () => {
  return (
    <div className="layout-default_container">
      <ButtonContactComponent />
      <div className="pc-header">
        <PCHeader />
      </div>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="container">
        <IntroComponent />
        <AboutMeComponent />
        <ProjectsComponent />
        <ContactComponent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default LayoutDefault;
