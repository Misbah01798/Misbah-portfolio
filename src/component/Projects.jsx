"use client";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";


const projectsData = [
  {
    id: 1,
    title: "Easy Shop Website",
    description: "Project shop description",
    image: 'https://i.ibb.co/gMBYQXx/10.png',
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Misbah01798/Easy-shop-client.git",
    previewUrl: "https://assignment-ten-auth-7a38c.web.app/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: 'https://i.ibb.co/Lgpg7M3/7.png',
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Misbah01798/My-portfolio",
    previewUrl: "https://misbah-uddin-30ae8.web.app/",
  },
  {
    id: 3,
    title: "Biology Coaching Home",
    description: "Project 3 description",
    image:'https://i.ibb.co/7tmD0LT/11.png',
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Misbah01798/biology-web-1.git",
    previewUrl: "https://assignment-nine-biology.web.app/",
  },
  
  {
    id: 4,
    title: "Resole Restaurent",
    description: "Resrautent Full stack Website",
    image:'https://i.ibb.co/kKkV8xs/9.png',
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Misbah01798/resole-rastarent-2.git",
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
