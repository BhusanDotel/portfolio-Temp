import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ProjectContainer.css";
import { projectDetails } from "./ProjectsDetail";
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const cardRenderArray = projectDetails.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        name={project.name}
        description={project.description}
        image={project.image}
        srcCode={project.srcCode}
        url={project.URL}
        className={project._className}
        inView={animate}
      />
    );
  });

  return (
    <div className="project-root-container">
      <h1 className="project-title">Projects.</h1>
      <p className="project-paragraph">
        These projects showcase my proficiency, providing tangible examples of
        my skills. I offer concise explanations and include links to view the
        actual work. It's a way of demonstrating my ability to tackle complex
        challenges, utilize various tools, and ensure the successful completion
        of tasks.
      </p>
      <div ref={ref} className="projects-card-container">
        {cardRenderArray}
      </div>
    </div>
  );
}

export default ProjectContainer;
