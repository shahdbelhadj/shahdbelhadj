import React from 'react';
import { projects } from '../constants'; // Ensure this file exports 'projects'
import { Link } from 'react-router-dom';
import CTA from '../components/CTA'; // Assuming CTA is a component in the same folder
import { arrow } from '../assets/icons';


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I have worked on multiple academic projects that demonstrate my ability to create functional applications, utilizing both front-end and back-end technologies to solve practical problems.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
  
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
