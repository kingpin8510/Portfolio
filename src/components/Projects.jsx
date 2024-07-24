import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";
import igdb from "../assets/igdb.png"
import portfolio from "../assets/portfolio.png"
import store from "../assets/store.png"
import clone from "../assets/clone.png"
import game from "../assets/game.png"

const Projects = () => {
  const projects = [
    {
      img: igdb,
      title: "IGDB",
      desc: " IGDB : Internet Game Database. A game discovery web app ",
      demo: "https://igdb-theta.vercel.app/",
      code: "https://github.com/kingpin8510/IGDb",
    },
    {
      img: portfolio,
      title: "Portfolio",
      desc: "My personal web portfolio : Dynamic and responsive with my description",
      code: "https://github.com/kingpin8510/Personal-Portfolio",
    },
    {
      img: store,
      title: "Vegan-Store Template",
      desc: "A basic store template showcasing a basic store format with all necessary elements",
      code: "https://github.com/kingpin8510/Vegan-Store",
    },
    {
      img: clone,
      title: "E-commerce Clone",
      desc: "E commerce clone inspired by Amazon ecommerce website",
      demo: "https://amazon-clone-two-gray.vercel.app/",
      code: "https://github.com/kingpin8510/Amazon-Clone",
    },
    {
      img: game,
      title: "Space Invaders",
      desc: "A fun retro arcade game designed using pygame library",
      code: "https://github.com/kingpin8510/Space-Invaders",
    },
  ];

  return (
    <section className="bg-primary text-white px-10 py-32" id="projects">
      {/* <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with
            different techstacks. Do Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  duration-500 justify-center flex-col  opacity-0 hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white opacity-50">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5 py-2">
            These are some of my best projects. I have built these with
            different techstacks. Do Check them out !! 
          </p>
        </div>

        <div className="about-img"></div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div className="card relative" key={i}>
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="card__content p-4">
              <p className="card__title text-xl font-bold mb-2">
                {project.title}
              </p>
              <p className="card__description mb-4">{project.desc}</p>
              <div className="flex space-x-4">
                <a
                  href={project.demo}
                  className="card__button bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="card__button bg-gray-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
