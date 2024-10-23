import React from "react";
import Navbar from "../components/Navbar";
import projectsmain from "../assets/projects/projectsmain.png";
import logo from "../assets/projects/logo.png";
import Footer from "../components/Footer";
import courses from "../assets/courses/courses.png";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import bgImage from "../assets/projects/bgImage.png";
import neom from "../assets/projects/neom.png";
import africa from "../assets/projects/africa.png";
import netherland from "../assets/projects/netherland.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.jpg";
import ProjectQuery from "../components/ProjectQuery";

const projectData = [
  {
    subtitle: "BIM",
    title: "NEOM - LOGISTICS PARK LANDSCAPE PROJECT",
    image: neom,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "Netherlands Housing Units Digital Twins",
    image: africa,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "KWA-ZULU NATAL DEPARTMENT OF WORKS South Africa",
    image: netherland,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "Etihad Rail Shelters",
    image: project4,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "USA  story Country House",
    image: project5,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "Facade project",
    image: project6,
    courseLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex h-[90vh] my-10">
        <div
          style={{
            background: "linear-gradient(to bottom right, #0067BF, #DD2D66)",
          }}
          className="w-1/2 flex justify-center items-center  relative"
        >
          {/* <img src={bgImage} alt="logo" className="w-full h-full" /> */}
          <div className="flex flex-col gap-5  m-16 absolute">
            <h1 className="text-5xl font-bold text-white">
              NEOM - LOGISTICS PARK LANDSCAPE PROJECT
            </h1>
            <h1 className="text-lg font-bold text-white">
              A Benchmark in Advanced BIM Implementation
            </h1>
            <h1 className="text-2xl text-white">
              The NEOM Logistics Park project stands as a testament to our
              expertise in handling complex and challenging projects with
              precision and excellence. The successful implementation of
              Building Information Modeling (BIM) at Level of Detail (LOD) 500
              during the as-built stage with all COBie data integration is one
              of our significant achievements. This high level of detail
              encompassed various aspects of the project, ensuring unparalleled
              accuracy and integration.
            </h1>
          </div>
        </div>
        <div className=" w-1/2 flex  justify-end ">
          <img src={neom} alt="projectsmain" className="w-full" />
        </div>
      </div>

      <div className="my-1 px-32 mt-20">
        <h1 className="text-3xl font-bold mb-2">Our Top Projects</h1>
      </div>

      <div className=" relative min-h-[130vh]  justify-center flex ">
        <div className=" absolute w-[75%] z-10 py-5 gap-6 grid grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard
              subtitle={project.subtitle}
              title={project.title}
              image={project.image}
              courseLink={project.courseLink}
            />
          ))}
        </div>
        <div className="w-[30%] z-0 -left-10 top-64 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 top-80 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      {/* <div className=" relative min-h-[70vh]  justify-center flex ">
        <div className="flex space-x-8 absolute w-[75%] z-10 py-5 justify-between">
          {projectData.map((project) => (
            <ProjectCard
              subtitle={project.subtitle}
              title={project.title}
              image={project.image}
              courseLink={project.courseLink}
            />
          ))}
        </div>
        <div className="w-[30%] z-0 -left-10 top-64 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 top-80 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div> */}
      <ProjectQuery />
      <Footer />
    </div>
  );
};

export default Projects;
