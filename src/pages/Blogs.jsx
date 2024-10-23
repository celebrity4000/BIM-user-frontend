import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import blogmain from "../assets/home/blogmain.png";
import blog from "../assets/home/blog.png";
import Footer from "../components/Footer";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";
import blog4 from "../assets/blogs/blog4.jpg";
import blog5 from "../assets/blogs/blog5.png";
import blog6 from "../assets/blogs/blog6.png";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

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

const allBlogs = [
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog1,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog2,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog3,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Our top 10 Javascript frameworks to use",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog1,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Our top 10 Javascript frameworks to use",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog2,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog3,
    author: "John Dae",
    Date: "22 Jun, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
];
const recentBlogPost = blogPosts[0];
const otherBlogPosts = blogPosts.slice(1);

const Blogs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <h1 className="text-lg font-bold text-blue-600">Our Blogs</h1>
        <h1 className="text-4xl font-bold">
          BIM Blogs and Success Stories & Case Studies
        </h1>
      </div>

      <div className="flex flex-col gap-5 pb-10 px-20">
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="text-2xl font-bold">Recent blog posts</h1>
          <div className="flex   ">
            {/* large card */}
            <div className="w-1/2 flex flex-col ">
              <img
                src={recentBlogPost.image}
                alt={recentBlogPost.title}
                className="w-full"
              />
              <h1 className="font-bold text-blue-600 mt-2">
                {recentBlogPost.author} • {recentBlogPost.Date}
              </h1>
              <div
                className="flex items-center gap-2 "
                onClick={() => {
                  navigate(`/blogs/${recentBlogPost.id}`);
                }}
              >
                <h1 className="text-2xl font-bold mt-2">
                  {recentBlogPost.title}
                </h1>
                <GoArrowUpRight color="black" size={20} className="mt-2" />
              </div>
              <p className="text-lg">{recentBlogPost.description}</p>
              <button
                onClick={() => {
                  navigate(`/blogs/${recentBlogPost.id}`);
                }}
                className="bg-blue-200 py-1 rounded-full w-32"
              >
                Read More
              </button>
              {/* <div className="flex flex-wrap gap-2 mt-2">
              {recentBlogPost.topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-800 text-sm px-4 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div> */}
            </div>
            {/* small cards */}
            <div className="w-1/2 flex flex-col pl-10 justify-between ">
              {otherBlogPosts.map((post, index) => (
                <div key={index} className="flex items-start ">
                  <img src={post.image} alt={post.title} className="w-[40%]" />

                  <div className="pl-4 h-full flex flex-col justify-between  ">
                    <h1 className="font-bold text-blue-600">
                      {post.author} • {post.Date}
                    </h1>
                    <div
                      className="flex gap-3 items-center"
                      onClick={() => {
                        navigate(`/blogs/${post.id}`);
                      }}
                    >
                      <h2 className="text-xl font-bold">{post.title}</h2>
                      <GoArrowUpRight
                        color="black"
                        size={18}
                        className="mt-2"
                      />
                    </div>
                    <p className="text-md">{post.description}</p>
                    {/* <div className="flex flex-wrap gap-2 mt-2">
                    {post.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-800 text-sm px-4 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div> */}

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
      </div>

      <div className=" flex-col gap-5 pb-10 px-20 hidden">
        <h1 className="text-2xl font-bold">All blog posts</h1>

        <div className="flex justify-between flex-wrap mx-12">
          {allBlogs.map((blog, index) => (
            <div className="bg-white rounded-lg p-6 flex flex-col gap-5 w-[350px] ">
              <img
                src={blog.image}
                alt="blogs"
                className="w-full h-48 object-contain"
              />
              <div className="flex-1">
                <h4 className="text-sm text-blue-600 font-bold">
                  {blog.author} • {blog.Date}
                </h4>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                  <GoArrowUpRight color="black" size={20} />
                </div>
                <h2 className="text-md">
                  {blog.description.split(" ").slice(0, 10).join(" ")}...
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-800 text-sm px-4 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-between items-center m-8">
        <button className="text-blue-500 flex gap-2 items-center px-4 py-2 rounded hover:text-blue-600">
          <FiArrowLeft /> Previous
        </button>
        <div className="flex gap-1">
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            1
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            2
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            3
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            4
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            5
          </span>
          <span className="text-lg block">...</span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            20
          </span>
        </div>
        <button className="text-blue-500 flex gap-2 items-center px-4 py-2 rounded hover:text-blue-600">
          Next <FiArrowRight />
        </button>
      </div> */}

      <Footer />
    </div>
  );
};

export default Blogs;
