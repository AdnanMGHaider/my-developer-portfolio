import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectsData from "../ProjectsData";
import ProjectDetailsCard from "./ProjectDetailsCard/ProjectDetailsCard";

const ProjectsCarousel = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
      <ul>
        {ProjectsData.map((project) => (
          <SwiperSlide>
            <ProjectDetailsCard
              id={project.id}
              key={project.id}
              projectNumber={project.projectNumber}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectImgSrc={project.projectImgSrc}
              techUsedInProject={project.projectTech}
            />
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default ProjectsCarousel;
