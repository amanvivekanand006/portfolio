import React from "react";
import "./Projects.css";
import img1 from './images/land.jpg'
import img2 from './images/banner.png'
import img3 from './images/img3.jpg'


const projects = [
  {
    image : img1,
    title: "Online Examination Website",
    description: "An Online Examination System that enables seamless test creation, automated submissions, and teacher-led evaluations. It simplifies exam management while providing real-time grading and feedback for students.",
    link: "https://online-examination-website-frontend.vercel.app/",
    live: "Poject is Live! Click to checkout the Website"
  },
  {
    image : img2,
    title: "Ecommerce Project",
    description: "A Small eCommerce Website built with Django for backend functionality, integrated with a GitHub-based frontend template. It provides a practical hands-on experience in managing products, orders, and user authentication.",
    link: "#"
  },
  {
    image : img3,
    title: "QuestBoard",
    description: "COMMING SOON.....",
    link: "#"
  }
];

const ProjectCard = () => {
  return (
    <div className="view_work">
      <div className="view_work_title"><h1>My Work</h1></div>
    <div className="project-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onClick={() => window.open(project.link, "_blank")}
        >
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p id="highlight-live">{project.live}</p>
        </div>
      ))}
    </div>


    </div>
  );
};

export default ProjectCard;
