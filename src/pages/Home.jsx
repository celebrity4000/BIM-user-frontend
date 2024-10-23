import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import laptop from "../assets/home/laptop.png";
import info from "../assets/home/info.jpg";
import wave from "../assets/home/wave.png";
import avatars from "../assets/home/avatars.png";
import { GoArrowUpRight, GoCheckCircleFill } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import CourseCard from "../components/CourseCard";
import courses from "../assets/courses/courses.png";
import project1 from "../assets/home/project1.png";
import project2 from "../assets/home/project2.png";
import project3 from "../assets/home/project3.png";
import project4 from "../assets/home/project4.png";
import project5 from "../assets/home/project5.png";
import icon1 from "../assets/home/icon1.png";
import icon2 from "../assets/home/icon2.png";
import icon3 from "../assets/home/icon3.png";
import icon4 from "../assets/home/icon4.png";
import icon5 from "../assets/home/icon5.png";
import icon6 from "../assets/home/icon6.png";
import icon7 from "../assets/home/icon7.png";
import icon8 from "../assets/home/icon8.png";
import peoplegroup from "../assets/home/peoplegroup.png";
import peoplegroup2 from "../assets/home/peoplegroup2.png";
import { FaQuoteLeft } from "react-icons/fa";
import testimonial from "../assets/home/testimonial.png";
import blogmain from "../assets/home/blogmain.png";
import blog from "../assets/home/blog.png";
import { FaRegHeart } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi";
import one from "../assets/home/1.png";
import two from "../assets/home/2.png";
import three from "../assets/home/3.png";
import four from "../assets/home/4.png";
import five from "../assets/home/5.png";
import six from "../assets/home/6.png";
import seven from "../assets/home/7.png";
import mainbg from "../assets/home/main.jpg";
import onlinetraining from "../assets/home/online.jpg";
import offlinetraining from "../assets/home/offline.jpg";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import projectgroup from "../assets/home/projectgroup.png";
import course3 from "../assets/courses/course3.png";
import course4 from "../assets/courses/course4.png";
import landscape from "../assets/home/landscape.png";
import blog4 from "../assets/blogs/blog4.jpg";
import blog5 from "../assets/blogs/blog5.png";
import blog6 from "../assets/blogs/blog6.png";
import review1 from "../assets/home/review1.png";
import review2 from "../assets/home/review2.png";
import review3 from "../assets/home/review3.png";
import { useNavigate } from "react-router-dom";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    title: "BIM Outsource & Consulting Services",
    desc: "Join us as we harness the power of technology to create solutions that inspire, empower, and shape the world of tomorrow. Together, let's innovate, let's explore, and let's build a future where possibilites are limitless.",
    url: mainbg,
    caption: "Slide 1",
  },
  {
    title: "Offline BIM Certification Program!",
    desc: "Our training dives deep into practical, real-world projects, providing you with in-depth experience and skills that employers value.",
    url: offlinetraining,
    caption: "Slide 2",
  },
  {
    title: "Online BIM Certification Program!",
    desc: "Our training dives deep into practical, real-world projects, providing you with in-depth experience and skills that employers value.",
    url: onlinetraining,
    caption: "Slide 3",
  },
];

const blogPosts = [
  {
    id: "1",
    title: "What is BIM and why is it important",
    description:
      "Building Information Modeling (BIM) is a digital representation of the physical and functional characteristics of a facility. It is a shared knowledge resource for information about a facility,",
    image: blog4,
    author: "Syed Amaan Quadri",
    Date: "22 Jun, 2024",
    content: `<div>
  <h2>What is BIM?</h2>
  <p>Building Information Modeling (BIM) is a digital representation of the physical and functional characteristics of a facility. It is a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its lifecycle from inception onward. BIM involves creating and managing digital models of buildings and infrastructure, incorporating not just geometry but also spatial relationships, geographic information, quantities and properties of building components, and much more.</p>
  
  <h3>Why is BIM Important?</h3>
  <ul>
    <li><strong>Enhanced Collaboration and Communication:</strong> BIM facilitates better collaboration among project stakeholders. It allows architects, engineers, contractors, and clients to work together more efficiently by providing a shared 3D model that can be accessed and modified in real-time. This reduces misunderstandings and ensures everyone is on the same page.</li>
    <li><strong>Improved Visualization:</strong> With BIM, stakeholders can visualize the project in a detailed 3D model before construction begins. This helps in identifying potential issues early in the design phase, reducing costly changes and rework during construction.</li>
    <li><strong>Accurate and Consistent Information:</strong> BIM provides a single source of truth for all project data. This means that all changes are automatically updated across the model, ensuring that everyone has access to the most accurate and up-to-date information. This reduces errors and inconsistencies in the project documentation.</li>
    <li><strong>Cost and Time Savings:</strong> By improving coordination and reducing errors, BIM can significantly lower project costs and timelines. It allows for more efficient planning and resource management, leading to faster project completion and reduced waste.</li>
    <li><strong>Better Project Outcomes:</strong> BIM enhances the overall quality of the project by providing detailed and accurate information. This leads to better decision-making, improved construction quality, and increased client satisfaction.</li>
    <li><strong>Lifecycle Management:</strong> BIM is not just limited to the design and construction phases. It extends to the entire lifecycle of a building, including operation and maintenance. Facility managers can use BIM models to manage building performance, maintenance schedules, and renovations more effectively.</li>
    <li><strong>Sustainability:</strong> BIM enables the integration of sustainable design practices by allowing for the analysis of energy performance, material usage, and environmental impact. This helps in creating more efficient and environmentally friendly buildings.</li>
    <li><strong>Risk Management:</strong> BIM helps in identifying and mitigating risks early in the project lifecycle. By simulating different scenarios and analyzing potential impacts, project teams can develop strategies to avoid or minimize risks.</li>
  </ul>
</div>`,
  },
  {
    id: "2",
    title: "BIM standards and protocols",
    description:
      "Building Information Modeling (BIM) is transforming the construction industry by improving collaboration,",
    image: blog6,
    author: "Syed Amaan Quadri",
    Date: "22 Jun, 2024",
    content: `<div>
  <h2>Understanding BIM Standards and Protocols</h2>
  <p>Building Information Modeling (BIM) is transforming the construction industry by improving collaboration, accuracy, and efficiency. However, to fully leverage BIM’s potential, it's crucial to adhere to established standards and protocols. These guidelines ensure consistency, quality, and interoperability across projects.</p>
  
  <h3>What Are BIM Standards and Protocols?</h3>
  <p>BIM standards and protocols are structured frameworks that define the processes, workflows, and data formats to be used in BIM projects. They provide a common language and methodology for all stakeholders, ensuring that BIM practices are consistent, reliable, and efficient.</p>

  <h4>Key BIM Standards</h4>
  <ul>
    <li><strong>ISO 19650:</strong> The ISO 19650 series is an international standard for managing information over the lifecycle of a built asset using BIM. It is based on the UK’s BS 1192 and PAS 1192 standards and provides guidelines for collaborative processes for information management.</li>
    <li><strong>BS 1192:</strong> This British Standard outlines the collaborative production of architectural, engineering, and construction information. It sets out a methodology for managing the production, distribution, and quality of construction information.</li>
    <li><strong>PAS 1192 Series:</strong> Publicly Available Specifications (PAS) 1192 series include several parts that cover various aspects of BIM implementation, such as capital/delivery phase (PAS 1192-2), operational phase (PAS 1192-3), and security-minded BIM (PAS 1192-5).</li>
    <li><strong>COBie (Construction Operations Building Information Exchange):</strong> COBie is a data schema for holding and sharing building information. It ensures that asset data is collected and exchanged in a structured format, facilitating efficient management of building information from design through to operation.</li>
    <li><strong>IFC (Industry Foundation Classes):</strong> IFC is an open standard for BIM data that ensures interoperability between different software applications. It allows for the exchange of BIM models and data without the loss of information.</li>
  </ul>

  <h4>Essential BIM Protocols</h4>
  <ul>
    <li><strong>BIM Execution Plan (BEP):</strong> A BIM Execution Plan outlines how BIM will be implemented on a project. It includes details on roles and responsibilities, workflows, data exchanges, and standards to be followed.</li>
    <li><strong>Level of Development (LOD):</strong> LOD defines the level of detail and accuracy in BIM models at different stages of the project. It ranges from LOD 100 (conceptual) to LOD 500 (as-built), helping to manage expectations and deliverables.</li>
    <li><strong>Common Data Environment (CDE):</strong> A CDE is a collaborative online space where project information is stored and shared. It ensures that all stakeholders have access to the most current data, enhancing coordination and reducing errors.</li>
    <li><strong>Information Delivery Manual (IDM):</strong> IDM provides a standardized approach to defining processes and information requirements for BIM projects. It ensures that all necessary data is available at each stage of the project.</li>
  </ul>

  <h4>Importance of Adhering to BIM Standards and Protocols</h4>
  <ul>
    <li><strong>Consistency and Quality:</strong> Standards and protocols ensure that BIM practices are consistent across projects, leading to higher quality outcomes. They provide a clear framework for data management, reducing the risk of errors and inconsistencies.</li>
    <li><strong>Interoperability:</strong> Adhering to standards like IFC ensures that BIM data can be exchanged seamlessly between different software applications. This enhances collaboration and reduces the risk of data loss.</li>
    <li><strong>Efficiency and Productivity:</strong> Standardized workflows and processes improve efficiency by reducing rework and streamlining project delivery. They enable teams to work more effectively, saving time and resources.</li>
    <li><strong>Compliance:</strong> Following established standards ensures compliance with industry regulations and client requirements. It demonstrates professionalism and commitment to best practices.</li>
    <li><strong>Lifecycle Management:</strong> Standards and protocols facilitate the management of building information throughout its lifecycle, from design and construction to operation and maintenance. This enhances the long-term value of the asset.</li>
  </ul>
</div>
`,
  },
  {
    id: "3",
    title: "BIM in construction",
    description:
      "Building Information Modeling (BIM) is reshaping the construction industry by enhancing project delivery,",
    image: blog5,
    author: "Syed Amaan Quadri",
    Date: "22 Jun, 2024",
    content: `<div>
  <h2>BIM in Construction: Revolutionizing the Industry</h2>
  <p>Building Information Modeling (BIM) is reshaping the construction industry by enhancing project delivery, improving collaboration, and driving innovation. As digital transformation sweeps through construction, BIM stands at the forefront, offering a powerful toolset for managing the entire lifecycle of a building.</p>
  
  <h3>What is BIM in Construction?</h3>
  <p>Building Information Modeling (BIM) in construction involves creating and managing digital representations of physical and functional characteristics of a facility. It extends beyond simple 3D models to encompass detailed information about materials, systems, performance, and operations. BIM integrates various aspects of a project, from design and construction to operation and maintenance, into a cohesive digital model.</p>

  <h4>Key Benefits of BIM in Construction</h4>
  <ul>
    <li><strong>Enhanced Collaboration and Communication:</strong> BIM fosters better collaboration among architects, engineers, contractors, and clients by providing a shared digital model. This collaborative environment ensures that all stakeholders are aligned, reducing miscommunications and streamlining workflows.</li>
    <li><strong>Improved Project Visualization:</strong> BIM offers detailed 3D visualizations of a project, enabling stakeholders to understand the design and scope better. This helps in identifying potential issues early in the design phase, reducing the need for costly changes during construction.</li>
    <li><strong>Increased Accuracy and Reduced Errors:</strong> BIM models incorporate precise information about building components, spatial relationships, and materials. This accuracy reduces errors and inconsistencies, leading to higher quality construction and fewer rework incidents.</li>
    <li><strong>Cost and Time Savings:</strong> By improving coordination and minimizing errors, BIM can significantly lower project costs and reduce timelines. It allows for more efficient planning, resource management, and construction sequencing, leading to faster project completion.</li>
    <li><strong>Better Project Management:</strong> BIM provides a comprehensive view of the project, enabling better decision-making and project management. Project managers can use BIM data to monitor progress, manage risks, and ensure that the project stays on schedule and within budget.</li>
    <li><strong>Lifecycle Management:</strong> BIM is not limited to the construction phase; it extends throughout the building’s lifecycle. Facility managers can use BIM models for maintenance, operations, and future renovations, ensuring that the building performs optimally over time.</li>
  </ul>

  <h4>Applications of BIM in Construction</h4>
  <ul>
    <li><strong>Design and Planning:</strong> During the design phase, BIM allows architects and engineers to create detailed models that integrate structural, mechanical, electrical, and plumbing systems. This holistic approach ensures that all systems work together harmoniously.</li>
    <li><strong>Construction Simulation:</strong> BIM enables the simulation of construction processes, helping teams plan and sequence activities efficiently. This reduces the likelihood of on-site issues and ensures that construction proceeds smoothly.</li>
    <li><strong>Clash Detection:</strong> One of the critical applications of BIM is clash detection, which identifies conflicts between different building systems before construction begins. This proactive approach prevents costly and time-consuming rework.</li>
    <li><strong>Cost Estimation:</strong> BIM provides accurate quantity takeoffs and cost estimates, improving budgeting and financial planning. This transparency ensures that projects are financially viable and that stakeholders have a clear understanding of costs.</li>
    <li><strong>Facility Management:</strong> Once construction is complete, BIM models serve as valuable resources for facility management. They provide detailed information about building systems, maintenance schedules, and asset management, enhancing the building’s performance over its lifespan.</li>
  </ul>

  <h4>Challenges and Future of BIM in Construction</h4>
  <ul>
    <li><strong>Implementation Challenges:</strong> Despite its benefits, BIM implementation can be challenging due to the need for significant upfront investment in software, training, and process changes. Additionally, the industry’s resistance to change and lack of standardized practices can hinder adoption.</li>
    <li><strong>Data Management:</strong> Managing the vast amounts of data generated by BIM models requires robust systems and processes. Ensuring data accuracy, security, and interoperability remains a critical challenge.</li>
    <li><strong>Future Trends:</strong> The future of BIM in construction is promising, with advancements in technologies like augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) enhancing BIM capabilities. These innovations will further streamline construction processes, improve project outcomes, and drive industry transformation.</li>
  </ul>

  <h4>Conclusion</h4>
  <p>BIM is revolutionizing the construction industry by providing a comprehensive, collaborative, and efficient approach to building design, construction, and management. Its ability to enhance visualization, improve accuracy, and reduce costs makes it an indispensable tool for modern construction projects. As the industry continues to evolve, embracing BIM will be essential for staying competitive and delivering high-quality, sustainable buildings.</p>
</div>`,
  },
];
const courseData = [
  {
    id: 1,
    image: course4,
    subtitle: "For Architects & Civil Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 2,
    image: course3,
    subtitle: "For Mechanical & Electrical Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
];
const recentBlogPost = blogPosts[0];
const otherBlogPosts = blogPosts.slice(1);
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Slide arrows={false} autoplay={true} duration={2000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="min-h-[70vh] md:min-h-[90vh] p-10 md:p-20 flex justify-start m-5 md:m-10 rounded-xl"
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="w-full flex flex-col gap-5">
                <h1 className="text-3xl md:text-7xl font-normal text-white w-full md:w-[53%]">
                  {slideImage.title}
                </h1>
                <h1 className="text-base md:text-xl text-white w-full md:w-[50%]">
                  {slideImage.desc}
                </h1>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 w-full">
                  <button
                    onClick={() => {
                      navigate("/courses");
                    }}
                    className="flex gap-2 items-center justify-center text-base md:text-xl text-white font-semibold px-4 py-2 rounded-md w-full md:w-[300px] bg-black"
                  >
                    Explore BIM Training
                    <TfiArrowTopRight />
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services");
                    }}
                    className="flex gap-2 items-center justify-center text-base md:text-xl text-white font-semibold px-4 py-2 rounded-md w-full md:w-[300px] bg-black"
                  >
                    Explore BIM Services
                    <TfiArrowTopRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>

      {/* BIM Services Section */}
      {/* <div className="p-10 px-20">
        <h1 className="text-[#FF006B] text-6xl font-bold">BIM Services</h1>
        <h1 className="text-blue-600 text-xl font-bold">
          What Services We Provide!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">BIM CONSULTING</h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Implementation
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Adoption
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Digital Integration
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Execution Planning
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                COBIE Services
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                FM Data
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">BIM SERVICES</h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                3D Modelling
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                4D Modelling
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                5D Estimation
              </li>

              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                SCAN TO BIM
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Revit Family Creation
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Automation{" "}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ARCHITECTURE BIM SERVICES
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                24/7 Assistance
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Technical Help
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Community Forums
              </li>

              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Documentation
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button className="  bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]">
            Explore More
          </button>
        </div>
      </div> */}
      <div className="p-5 md:p-10 md:px-20">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#FF006B]">Top BIM</span> Services
        </h1>
        <div className="flex flex-wrap justify-between my-10 mt-16 gap-5">
          <div className="flex gap-5 items-center w-full md:w-[20%]">
            <img src={one} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl text-[#FF006B] font-bold">
              BIM <span className="text-black">TRAINING</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center w-full md:w-[25%]">
            <img src={two} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl text-[#FF006B] font-bold">
              BIM <span className="text-black">CONSULTING</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center w-full md:w-[30%]">
            <img src={three} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl font-bold">
              ARCHITECTURE <span className="text-[#FF006B]">BIM</span> SERVICES
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex gap-5 items-center w-full md:w-[20%]">
            <img src={four} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl font-bold text-[#FF006B]">
              BIM <span className="text-black">SERVICES</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center w-full md:w-[25%]">
            <img src={five} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl font-bold text-[#FF006B]">
              CAD <span className="text-black">SERVICES</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center w-full md:w-[30%]">
            <img src={six} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl font-bold">
              STRUCTURE <span className="text-[#FF006B]">BIM</span> SERVICES
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex gap-5 items-center w-full md:w-[35%]">
            <img src={seven} alt="one" className="w-6 h-6" />
            <h1 className="text-lg md:text-2xl text-[#FF006B] font-bold">
              VISUALIZATION <span className="text-black">SERVICES</span>
            </h1>
          </div>
        </div>
      </div>

      {/* target audience */}
      <div className="p-5 md:p-10 md:px-20">
        <h1 className="text-3xl md:text-4xl font-bold">
          Who Can Learn <span className="text-[#FF006B]">BIM?</span>
        </h1>
        <h1 className="text-blue-600 text-lg md:text-xl font-bold">
          Prerequisites for BIM!
        </h1>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">Civil Engineers</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">Architects</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">
              Mechanical Engineers
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">Interior Designers</h1>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">
              Electrical Engineers
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">
              Structural Engineers
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">Site Engineers</h1>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-lg md:text-xl font-bold">Quantity Surveyors</h1>
          </div>
        </div>
      </div>

      {/* why learn bim */}
      <div className="p-5 md:p-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={info} alt="info" className="w-[70%] md:w-[90%]" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl md:text-6xl font-bold">
            Why Learn <br />
            <span className="text-[#FF006B]">BIM?</span>
          </h1>
          <h1 className="text-sm md:text-lg">
            Unlock unparalleled opportunities in the architecture, engineering,
            and construction (AEC) industry by mastering Building Information
            Modeling (BIM). As the industry's leading-edge technology, BIM
            proficiency positions you at the forefront of innovation, making you
            an indispensable asset to employers. Streamline your workflows,
            enhance collaboration, and reduce costly errors with BIM’s advanced
            tools. Embrace the future of AEC and transform your career with BIM
            expertise—where efficiency meets excellence. Join the BIM revolution
            and build a brighter, more prosperous professional journey.
          </h1>
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-3 items-center w-full md:w-[45%] mb-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">High Demand</h1>
                <h1 className="text-sm md:text-base">
                  BIM skills are highly sought after, making you a valuable
                  asset in the competitive AEC job market.
                </h1>
              </div>
            </div>
            <div className="flex gap-3 items-center w-full md:w-[45%] mb-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">Accelerated Growth</h1>
                <h1 className="text-sm md:text-base">
                  Fast-track your career with BIM expertise, opening doors to
                  advanced roles and higher earning potential.
                </h1>
              </div>
            </div>
            <div className="flex gap-3 items-center w-full md:w-[45%]">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">Innovation Leadership</h1>
                <h1 className="text-sm md:text-base">
                  Lead the charge in innovative design and construction
                  practices, leveraging advanced BIM tools for superior,
                  sustainable project outcomes.
                </h1>
              </div>
            </div>
            <div className="flex gap-3 items-center w-full md:w-[45%]">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">
                  Enhanced Project Management
                </h1>
                <h1 className="text-sm md:text-base">
                  Improve collaboration and efficiency across all project
                  stages, reducing errors and ensuring high-quality, timely
                  project delivery.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* online courses */}
      <div className="relative p-10 py-20 mb-10 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          TOP ONLINE <span className="text-[#FF006B]">COURSES</span>
        </h1>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 py-10 w-full md:w-[45%]">
          {courseData.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              subtitle={course.subtitle}
              title={course.title}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
              oldPrice={course.oldPrice}
              id={course.id}
            />
          ))}
        </div>

        <div className="relative z-10 flex justify-center mt-8">
          <button
            onClick={() => {
              navigate("/courses");
            }}
            className="bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]"
          >
            Explore More
          </button>
        </div>

        {/* Background elements for visual interest */}
        <div className="hidden md:block absolute top-[30%] left-[-5%] w-[35%] h-12 bg-blue-600 transform -rotate-6 z-0" />
        <div className="hidden md:block absolute top-[40%] left-[-10%] w-[35%] h-12 bg-blue-600 transform -rotate-6 z-0" />
        <div className="hidden md:block absolute top-[20%] right-[-5%] w-[35%] h-12 bg-blue-600 transform -rotate-6 z-0" />
        <div className="hidden md:block absolute top-[28%] right-[-10%] w-[35%] h-12 bg-blue-600 transform -rotate-6 z-0" />
        <div className="hidden md:block absolute top-[40%] right-[-15%] w-[60%] h-12 bg-[#FF006B] transform -rotate-6 z-0" />
      </div>

      {/* out top projects  */}
      <div className="p-5 md:p-10 min-h-[70vh] relative">
        <h1 className="text-3xl md:text-4xl font-bold">
          OUR TOP <span className="text-[#FF006B]">PROJECTS</span>
        </h1>
        <h1 className="text-blue-600 text-lg md:text-xl font-bold">
          WHAT PROJECTS WE DO!
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="w-full md:w-1/2">
            <img
              src={landscape}
              alt="projectgroup"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 mt-5 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold">
              NEOM - LOGISTICS PARK LANDSCAPE PROJECT
            </h1>
            <h1 className="text-lg md:text-xl font-bold text-blue-600">
              A Benchmark in Advanced BIM Implementation
            </h1>
            <h1 className="pt-5 text-sm md:text-xl">
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
      </div>

      {/* advantages of bim */}
      <div className="p-5 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          ADVANTAGES OF <span className="text-[#FF006B]">BIM</span>
        </h1>
        <h1 className="text-blue-600 text-lg md:text-xl font-bold">
          WHAT'S YOU GET FROM BIM!
        </h1>
        <div className="flex flex-wrap gap-5 md:gap-16 my-10 md:my-16">
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon1} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">
                Enhanced Collaboration
              </h1>
              <h1 className="text-sm md:text-base">
                BIM facilitates better communication and coordination among
                project stakeholders.
              </h1>
            </div>
          </div>
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon2} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">
                Increased Efficiency
              </h1>
              <h1 className="text-sm md:text-base">
                BIM streamlines workflows by integrating various aspects of the
                design and construction process.
              </h1>
            </div>
          </div>
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon3} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">
                Lifecycle Management
              </h1>
              <h1 className="text-sm md:text-base">
                BIM supports the entire lifecycle of a building, from initial
                design and construction to maintenance.
              </h1>
            </div>
          </div>
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon4} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">Cost Savings</h1>
              <h1 className="text-sm md:text-base">
                BIM helps in accurate cost estimation and budget management by
                providing detailed quantity take-offs.
              </h1>
            </div>
          </div>
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon7} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">
                Better Visualization
              </h1>
              <h1 className="text-sm md:text-base">
                The 3D models generated by BIM provide a clear and detailed
                visual representation of the project.
              </h1>
            </div>
          </div>
          <div className="flex w-full md:w-[30%] gap-5">
            <img src={icon8} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-lg md:text-xl font-bold">
                Enhanced Quality Control
              </h1>
              <h1 className="text-sm md:text-base">
                BIM ensures higher quality construction by enabling precise
                planning and execution, minimizing errors.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* company details */}
      <div className="p-5 md:p-10 relative">
        <div className="flex flex-col md:flex-row justify-between min-h-[60vh]">
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={peoplegroup2}
              alt="peoplegroup"
              className="w-[70%] md:w-[90%]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="text-2xl md:text-3xl font-bold">
              Know how everything works and why we work with{" "}
              <span className="text-[#FF006B]">BIM</span>
            </h1>
            <h1 className="font-bold text-blue-600">OUR MISSION</h1>
            <h1 className="text-sm md:text-lg">
              At The BIM skills, we're dedicated to revolutionizing the
              construction landscape through innovative BIM services and expert
              consulting. Our mission is simple yet profound: to empower our
              clients with the tools, strategies, and support they need to bring
              their boldest visions to life. We're not just service providers;
              we're partners committed to driving efficiency, collaboration, and
              excellence in every project we undertake. Together, we're shaping
              a future where BIM transforms not just buildings, but entire
              industries.
            </h1>
            <h1 className="font-bold text-[#FF006B]">OUR VISION</h1>
            <h1 className="text-sm md:text-lg">
              Our vision at The BIM skills is clear: to lead the way in BIM
              services and consulting, setting new standards of excellence and
              innovation. We see a future where every project, large or small,
              benefits from the power of BIM to drive efficiency,
              sustainability, and impact. By harnessing technology, fostering
              creativity, and nurturing talent, we empower our clients to
              achieve their goals beyond imagination. At The BIM skills, we're
              not just building structures; we're building a legacy of
              collaboration, innovation, and progress that will shape the world
              for generations.
            </h1>
          </div>
        </div>
      </div>

      {/* testimonial */}

      {/* <div className="bg-[#0044ff1b] min-h-[80vh] flex p-20  m-10 rounded-lg">
        <div className="w-1/2 flex flex-col ml-20 gap-10">
          <FaQuoteLeft color="FF006B" size={30} />

          <div className="flex items-center mt-8 ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gold"
                className="w-5 h-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <h1 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptate, commodi excepturi cupiditate ab aspernatur, voluptatum
            corrupti aut voluptas et magni totam earum provident laboriosam
            voluptatibus similique hic recusandae eos sunt libero. Porro,
            placeat id obcaecati consequatur, sunt minima sequi illum impedit
            deserunt repudiandae vero, veniam magni laboriosam dicta quis.
          </h1>
          <h1 className="font-bold">
            Maria Botin <span className="text-[#FF006B]"> CEO</span>
          </h1>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={testimonial} alt="testimonial" className="w-[50%]" />
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-20 gap-10">
        {[
          {
            imgSrc: review1,
            name: "Mr BhimRao",
            title: "Head of Concrete RA-Tech Mumbai",
            review:
              "The BIM skills have a great teaching passion. Along with software expertise, They also have in depth practical knowledge that help to understand BIM Fundamentals. I really appreciate, sharing their knowledge to keep update in BIM industry.",
          },
          {
            imgSrc: review2,
            name: "Mr. Wusat Hussain",
            title: "CAD Designer - USA",
            review:
              "I have been learning BIM from The BIM skills and it has been a great experience. The BIM skills has very thoughtful and knowledgeable instructors who put a lot of effort into how they present course material. Their lessons were engaging, useful, and very patient during training. Their skills and techniques of communicating are very professional. I would recommend The BIM skills to anyone interested in learning BIM.",
          },
          {
            imgSrc: review3,
            name: "Mr. Marwan Sufiyan",
            title: "Engineering Consultant",
            review:
              "BIM skills has excellent knowledge of BIM concepts, related standards, tools. They have excellent skills in providing training logically with easily understandable linguistic skills. I can recommend this institute to anyone who is expected to become an expert in BIM skills and become successful in the industry.",
          },
        ].map((testimonial, index) => (
          <div key={index} className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full"
              />
              <div className="">
                <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                <h1 className="text-gray-400">{testimonial.title}</h1>
                <div className="flex items-center">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="gold"
                      className="w-4 h-4"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="text-sm md:text-lg mt-3">{testimonial.review}</h1>
          </div>
        ))}
      </div>

      {/* blogs */}
      <div className="p-5 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF006B]">BLOGS</h1>
        <h1 className="text-blue-600 text-lg md:text-xl font-bold">
          WHAT BLOGS ARE IN BIM!
        </h1>
      </div>
      <div className="flex flex-col gap-5 pb-10 px-5 md:px-20">
        <h1 className="text-xl md:text-2xl font-bold">Recent blog posts</h1>
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          {/* Large card */}
          <div className="w-full md:w-1/2 flex flex-col">
            <img
              src={recentBlogPost.image}
              alt={recentBlogPost.title}
              className="w-full"
            />
            <h1 className="font-bold text-blue-600 mt-2">
              {recentBlogPost.author} • {recentBlogPost.Date}
            </h1>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                navigate(`/blogs/${recentBlogPost.id}`);
              }}
            >
              <h1 className="text-xl md:text-2xl font-bold mt-2">
                {recentBlogPost.title}
              </h1>
              <GoArrowUpRight color="black" size={20} className="mt-2" />
            </div>
            <p className="text-sm md:text-lg">{recentBlogPost.description}</p>
            <button
              onClick={() => {
                navigate(`/blogs/${recentBlogPost.id}`);
              }}
              className="bg-blue-200 py-1 rounded-full w-32"
            >
              Read More
            </button>
          </div>

          {/* Small cards */}
          <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-10 justify-between gap-5">
            {otherBlogPosts.map((post, index) => (
              <div key={index} className="flex items-start">
                <img src={post.image} alt={post.title} className="w-[40%]" />

                <div className="pl-4 flex flex-col justify-between">
                  <h1 className="font-bold text-blue-600">
                    {post.author} • {post.Date}
                  </h1>
                  <div
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={() => {
                      navigate(`/blogs/${post.id}`);
                    }}
                  >
                    <h2 className="text-lg md:text-xl font-bold">
                      {post.title}
                    </h2>
                    <GoArrowUpRight color="black" size={18} className="mt-2" />
                  </div>
                  <p className="text-sm md:text-md">{post.description}</p>
                  <button
                    onClick={() => {
                      navigate(`/blogs/${post.id}`);
                    }}
                    className="bg-blue-200 py-1 rounded-full w-32"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => {
            navigate(`/blogs`);
          }}
          className="bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]"
        >
          Explore More
        </button>
      </div>

      {/* FAQ */}

      <div className="flex flex-col justify-center items-center gap-3 mb-20 px-5 md:px-20">
        <h1 className="text-lg font-bold text-blue-600">FAQs</h1>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Frequently Asked Questions
        </h1>

        <h1 className="text-md md:text-xl text-gray-400 text-center">
          Have questions? We’re here to help.
        </h1>

        <div className="flex flex-wrap justify-between gap-10 w-full">
          {[
            {
              question: "What services does The BIM Skills Company provide?",
              answer:
                "We offer a wide range of services including BIM training and certification, consulting, custom BIM development, BIM coordination and management, digital twins and data management, outsourcing and support services, as well as VR and AR integration.",
            },
            {
              question: "Are your courses suitable for professionals?",
              answer:
                "Yes, our courses are designed for both students and professionals in the AEC (Architecture, Engineering, and Construction) industry. We offer practical, project-based training to enhance real-world skills.",
            },
            {
              question: "Do you provide certification upon course completion?",
              answer:
                "Yes, we provide official certification for various BIM competencies and software proficiencies upon successful completion of our courses.",
            },
            {
              question: "What support services do you offer?",
              answer:
                "We provide ongoing support for BIM software and models, including updates, troubleshooting, and maintenance. We also offer modeling services for architectural, structural, and MEP aspects of projects.",
            },
            {
              question: "Do you offer online courses?",
              answer:
                "Yes, we offer both live and recorded online courses to provide flexible learning options for our students.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] flex flex-col items-center text-center gap-5"
            >
              <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
                <FaRegHeart color="FF006B" size={20} />
              </div>
              <h1 className="font-semibold text-lg">{faq.question}</h1>
              <h1 className="text-sm md:text-base">{faq.answer}</h1>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
