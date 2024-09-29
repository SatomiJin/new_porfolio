import "./ProjectsComponent.scss";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperComponent } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { projects } from "./data";
import ProjectItem from "./ProjectItem/ProjectItem";
function ProjectsComponent() {
  let { t } = useTranslation();

  return (
    <div className="projects_container">
      <div className="container">
        <div className="row component_background" data-aos="zoom-in" data-aos-duration="1000">
          <div className="title col-12">{t("projects")}</div>
          <div className="slider col-12">
            <SwiperComponent
              modules={[Navigation, Pagination, Grid, Autoplay]}
              spaceBetween={10}
              grabCursor
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // autoplay={true}
              // loop={true}
              pagination={{ clickable: true, dynamicBullets: true, type: "bullets" }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                620: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="card-list"
            >
              {projects &&
                projects.length > 0 &&
                projects.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ProjectItem data={item} />
                    </SwiperSlide>
                  );
                })}
            </SwiperComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
