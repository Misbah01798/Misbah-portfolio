"use client";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";
import img1 from '../assets/projects/10.png'
import img2 from '../assets/projects/7.png'
import img3 from '../assets/projects/11.png'
import img4 from '../assets/projects/9.png'

const projectsData = [
  {
    id: 1,
    title: "Easy Shop Website",
    description: "Project shop description",
    image: {img1},
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: {img2},
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Misbah01798/My-portfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Biology Coaching Home",
    description: "Project 3 description",
    image: {img3},
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 4,
    title: "Resole Restaurent",
    description: "Resrautent Full stack Website",
    image: {img4},
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://assignment-11-a280f.web.app",
  }
  
];

const Projects= () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTab
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTab
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTab
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
